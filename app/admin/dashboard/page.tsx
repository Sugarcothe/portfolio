"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "../../useTheme";

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    verifyAuth();
  }, [router]);

  const verifyAuth = async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    try {
      const res = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (!res.ok) {
        localStorage.removeItem("adminToken");
        router.push("/admin/login");
        return;
      }

      setIsAuth(true);
    } catch (error) {
      localStorage.removeItem("adminToken");
      router.push("/admin/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  if (!isAuth) return null;

  return (
    <div className={`min-h-screen font-mono transition-colors ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <nav className={`border-b-2 ${isDarkMode ? 'border-white' : 'border-black'} px-4 md:px-12 py-6`}>
        <div className="flex items-center justify-between">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className={`border-2 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} px-4 py-2 transition`}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/admin/profile"
            className={`border-2 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} p-8 transition`}
          >
            <h2 className="text-2xl font-bold mb-2">Profile</h2>
            <p className="text-sm opacity-80">Update homepage profile information</p>
          </Link>

          <Link
            href="/admin/work"
            className={`border-2 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} p-8 transition`}
          >
            <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
            <p className="text-sm opacity-80">Manage work history and projects</p>
          </Link>

          <Link
            href="/admin/blog"
            className={`border-2 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} p-8 transition`}
          >
            <h2 className="text-2xl font-bold mb-2">Blog Posts</h2>
            <p className="text-sm opacity-80">Create and edit blog articles</p>
          </Link>

          <Link
            href="/admin/subscribers"
            className={`border-2 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} p-8 transition`}
          >
            <h2 className="text-2xl font-bold mb-2">Subscribers</h2>
            <p className="text-sm opacity-80">View newsletter subscribers</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
