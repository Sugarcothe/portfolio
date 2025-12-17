"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminWork() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [formData, setFormData] = useState({
    period: "",
    title: "",
    company: "",
    location: "",
    responsibilities: "",
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
    alert("Work experience added successfully!");
    setFormData({ period: "", title: "", company: "", location: "", responsibilities: "" });
  };

  if (!isAuth) return null;

  return (
    <div className="min-h-screen bg-white font-mono">
      <nav className="border-b-2 border-black px-4 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link href="/admin/dashboard" className="text-xl hover:underline">← Dashboard</Link>
          <h1 className="text-2xl font-bold">Manage Work Experience</h1>
          <div className="w-24"></div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-6">Add New Experience</h2>
        <form onSubmit={handleSubmit} className="space-y-6 border-2 border-black p-6">
          <div>
            <label className="block text-sm mb-2">Period (e.g., 2023/01 – present)</label>
            <input
              type="text"
              value={formData.period}
              onChange={(e) => setFormData({ ...formData, period: e.target.value })}
              required
              className="w-full border-2 border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Job Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full border-2 border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Company</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
              className="w-full border-2 border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full border-2 border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Responsibilities (one per line)</label>
            <textarea
              value={formData.responsibilities}
              onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
              rows={8}
              required
              className="w-full border-2 border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition"
          >
            Add Experience
          </button>
        </form>
      </div>
    </div>
  );
}
