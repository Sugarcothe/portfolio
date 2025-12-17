"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "../../useTheme";

export default function AdminSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed");
        setLoading(false);
        return;
      }

      router.push("/admin/login");
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen font-mono flex items-center justify-center px-4 transition-colors ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="w-full max-w-md">
        <h1 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Admin Signup</h1>
        {error && <div className="mb-4 p-3 border-2 border-red-600 bg-red-50 text-red-800 text-sm">{error}</div>}
        <form onSubmit={handleSubmit} className={`border-2 ${isDarkMode ? 'border-white' : 'border-black'} p-8 space-y-6`}>
          <div>
            <label htmlFor="email" className={`block text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className={`w-full border-2 ${isDarkMode ? 'border-white bg-black text-white focus:ring-white' : 'border-black bg-white text-black focus:ring-black'} px-4 py-2 focus:outline-none focus:ring-2`}
            />
          </div>
          <div>
            <label htmlFor="password" className={`block text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className={`w-full border-2 ${isDarkMode ? 'border-white bg-black text-white focus:ring-white' : 'border-black bg-white text-black focus:ring-black'} px-4 py-2 focus:outline-none focus:ring-2`}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className={`block text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
              className={`w-full border-2 ${isDarkMode ? 'border-white bg-black text-white focus:ring-white' : 'border-black bg-white text-black focus:ring-black'} px-4 py-2 focus:outline-none focus:ring-2`}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} px-8 py-3 transition disabled:opacity-50`}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
          <p className={`text-center text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Already have an account? <Link href="/admin/login" className="underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
