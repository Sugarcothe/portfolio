"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "../../useTheme";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl?: string;
}

export default function AdminBlog() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    date: new Date().toISOString().split('T')[0],
    imageUrl: "",
  });
  const [notifySubscribers, setNotifySubscribers] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
      fetchBlogs();
    }
  }, [router]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blog/list");
      const data = await res.json();
      if (res.ok) setBlogs(data.blogs);
    } catch (error) {
      console.error("Failed to fetch blogs");
    }
  };

  const uploadImage = async (): Promise<string> => {
    if (!imageFile) {
      console.log('No image file selected, using existing imageUrl:', formData.imageUrl);
      return formData.imageUrl;
    }
    
    console.log('Uploading image file:', imageFile.name);
    setUploading(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', imageFile);
      
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: uploadFormData
      });
      
      if (res.ok) {
        const data = await res.json();
        console.log('Image uploaded successfully:', data.url);
        return data.url;
      } else {
        console.error('Upload failed with status:', res.status);
        const errorData = await res.json();
        console.error('Upload error:', errorData);
        alert('Image upload failed. Saving blog without image.');
        return formData.imageUrl; // Continue without new image
      }
    } catch (error) {
      console.error('Image upload failed:', error);
      alert('Image upload failed. Saving blog without image.');
      return formData.imageUrl; // Continue without new image
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrl = await uploadImage();
      console.log('Final imageUrl for blog:', imageUrl);
      const url = editingId ? "/api/blog/update" : "/api/blog/create";
      const method = editingId ? "PUT" : "POST";
      const slug = generateSlug(formData.title);
      const body = editingId ? { ...formData, imageUrl, slug, id: editingId } : { ...formData, imageUrl, slug };
      console.log('Sending blog data:', body);

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        // Send notifications if enabled and it's a new post
        if (notifySubscribers && !editingId) {
          try {
            const token = localStorage.getItem('adminToken');
            await fetch('/api/newsletter/notify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                blogTitle: formData.title,
                blogSlug: slug
              })
            });
          } catch (error) {
            console.error('Failed to send notifications');
          }
        }
        
        setFormData({ title: "", excerpt: "", content: "", date: new Date().toISOString().split('T')[0], imageUrl: "" });
        setEditingId(null);
        setNotifySubscribers(false);
        setImageFile(null);
        fetchBlogs();
        alert(editingId ? "Blog updated!" : "Blog created!");
      } else {
        const data = await res.json();
        alert(data.error || "Failed to save blog");
      }
    } catch (error) {
      alert("Something went wrong");
    }
    setLoading(false);
  };

  const handleEdit = (blog: Blog) => {
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      date: blog.date,
      imageUrl: blog.imageUrl || "",
    });
    setEditingId(blog._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this blog post?")) return;

    try {
      const res = await fetch("/api/blog/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        fetchBlogs();
        alert("Blog deleted!");
      }
    } catch (error) {
      alert("Failed to delete blog");
    }
  };

  const handleCancel = () => {
    setFormData({ title: "", excerpt: "", content: "", date: new Date().toISOString().split('T')[0], imageUrl: "" });
    setEditingId(null);
    setNotifySubscribers(false);
    setImageFile(null);
  };

  if (!isAuth) return null;

  return (
    <div className={`min-h-screen font-mono transition-colors ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <nav className={`border-b-2 ${isDarkMode ? 'border-white' : 'border-black'} px-4 md:px-12 py-6`}>
        <div className="flex items-center justify-between">
          <Link href="/admin/dashboard" className={`text-xl hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`}>← Dashboard</Link>
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Manage Blog Posts</h1>
          <div className="w-24"></div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>{editingId ? "Edit Post" : "Create New Post"}</h2>
        <form onSubmit={handleSubmit} className={`space-y-6 border-2 ${isDarkMode ? 'border-white' : 'border-black'} p-6 mb-12`}>
          <div>
            <label className={`block text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className={`w-full border-2 ${isDarkMode ? 'border-white bg-black text-white focus:ring-white' : 'border-black bg-white text-black focus:ring-black'} px-4 py-2 focus:outline-none focus:ring-2`}
            />
          </div>

          <div>
            <label className={`block text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              className={`w-full border-2 ${isDarkMode ? 'border-white bg-black text-white focus:ring-white' : 'border-black bg-white text-black focus:ring-black'} px-4 py-2 focus:outline-none focus:ring-2`}
            />
          </div>

          <div>
            <label className={`block text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Excerpt</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows={3}
              required
              className={`w-full border-2 ${isDarkMode ? 'border-white bg-black text-white focus:ring-white' : 'border-black bg-white text-black focus:ring-black'} px-4 py-2 focus:outline-none focus:ring-2 resize-none`}
            />
          </div>

          <div>
            <label className={`block text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Featured Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className={`w-full border-2 ${isDarkMode ? 'border-white bg-black text-white focus:ring-white' : 'border-black bg-white text-black focus:ring-black'} px-4 py-2 focus:outline-none focus:ring-2`}
            />
            {formData.imageUrl && (
              <div className="mt-2">
                <img src={formData.imageUrl} alt="Current image" className="w-32 h-32 object-cover border" />
              </div>
            )}
          </div>

          <div>
            <label className={`block text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={15}
              required
              className={`w-full border-2 ${isDarkMode ? 'border-white bg-black text-white focus:ring-white' : 'border-black bg-white text-black focus:ring-black'} px-4 py-2 focus:outline-none focus:ring-2 resize-none`}
            />
          </div>

          {!editingId && (
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="notify"
                checked={notifySubscribers}
                onChange={(e) => setNotifySubscribers(e.target.checked)}
                className="w-4 h-4"
              />
              <label htmlFor="notify" className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>Notify subscribers via email</label>
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading || uploading}
              className={`${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} px-8 py-3 transition disabled:opacity-50`}
            >
              {uploading ? "Uploading..." : loading ? "Saving..." : editingId ? "Update Post" : "Publish Post"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={handleCancel}
                className={`border-2 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} px-8 py-3 transition`}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>All Posts</h2>
        <div className="space-y-4">
          {blogs.length === 0 ? (
            <p className={`text-sm opacity-70 ${isDarkMode ? 'text-white' : 'text-black'}`}>No blog posts yet.</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog._id} className={`border-2 ${isDarkMode ? 'border-white' : 'border-black'} p-6`}>
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{blog.title}</h3>
                <p className={`text-sm opacity-70 mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{blog.date}</p>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>{blog.excerpt}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className={`border-2 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} px-4 py-2 text-sm transition`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="border-2 border-red-600 text-red-600 px-4 py-2 text-sm hover:bg-red-600 hover:text-white transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
