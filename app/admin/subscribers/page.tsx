"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "../../useTheme";

interface Subscriber {
  _id: string;
  email: string;
  subscribedAt: string;
}

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/newsletter/list', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (res.ok) {
        const data = await res.json();
        setSubscribers(data.subscribers);
      }
    } catch (error) {
      console.error('Failed to fetch subscribers');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen p-8 font-mono transition-colors ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Newsletter Subscribers</h1>
          <Link href="/admin/dashboard" className={`px-4 py-2 border-2 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} transition`}>
            Back to Dashboard
          </Link>
        </div>

        {loading ? (
          <p className={isDarkMode ? 'text-white' : 'text-black'}>Loading subscribers...</p>
        ) : (
          <div className={`border-2 ${isDarkMode ? 'border-white' : 'border-black'} p-6`}>
            <p className={`mb-4 ${isDarkMode ? 'text-white' : 'text-black'} opacity-80`}>Total subscribers: {subscribers.length}</p>
            
            {subscribers.length === 0 ? (
              <p className={`${isDarkMode ? 'text-white' : 'text-black'} opacity-70`}>No subscribers yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className={`border-b ${isDarkMode ? 'border-white' : 'border-black'}`}>
                      <th className={`text-left p-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>Email</th>
                      <th className={`text-left p-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>Subscribed Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((subscriber) => (
                      <tr key={subscriber._id} className={`border-b ${isDarkMode ? 'border-white hover:bg-gray-800' : 'border-black hover:bg-gray-50'}`}>
                        <td className={`p-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{subscriber.email}</td>
                        <td className={`p-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{new Date(subscriber.subscribedAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}