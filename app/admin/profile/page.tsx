"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminProfile() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [formData, setFormData] = useState({
    name: "Valentine Eze",
    title: "Senior Software Developer",
    bio: "",
    skills: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  if (!isAuth) return null;

  return (
    <div className="min-h-screen bg-white font-mono">
      <nav className="border-b-2 border-black px-4 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link href="/admin/dashboard" className="text-xl hover:underline">← Dashboard</Link>
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          <div className="w-24"></div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-2 border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full border-2 border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Bio</label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={8}
              className="w-full border-2 border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Skills (comma separated)</label>
            <textarea
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              rows={4}
              className="w-full border-2 border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
