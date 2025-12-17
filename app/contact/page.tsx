"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { ArrowUp, Globe, Sun, Moon } from "lucide-react";
import { useTheme } from "../useTheme";

export default function Contact() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setShowLanguageModal(false);
      setShowThemeModal(false);
    };
    if (showLanguageModal || showThemeModal) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showLanguageModal, showThemeModal]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `New message from ${formData.name}`,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen font-mono transition-colors ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <nav className={`flex items-center justify-between px-4 md:px-12 py-6 md:py-8 border-b ${isDarkMode ? 'border-white' : 'border-gray-200'}`}>
        <Link href="/" className={`text-xl md:text-2xl font-mono ${isDarkMode ? 'text-white' : 'text-black'}`}>V|E</Link>
        <div className="flex gap-4 md:gap-12 text-sm md:text-lg">
          <Link href="/work" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:underline decoration-2 underline-offset-4`}>Work</Link>
          <Link href="/writing" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:underline decoration-2 underline-offset-4`}>Writing</Link>
          <Link href="/contact" className={`${isDarkMode ? 'text-white' : 'text-black'} underline decoration-2 underline-offset-4`}>Contact</Link>
        </div>
      </nav>

      <main className="flex justify-center px-4 md:px-12 py-8 md:py-12">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className={`text-3xl md:text-4xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-8`}>Get in Touch</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`border-2 ${isDarkMode ? 'border-white' : 'border-black'} p-6`}>
              <h2 className={`text-xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-2`}>Send a Message</h2>
              <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} opacity-80 font-mono`}>Drop me an email about your project or question.</p>
            </div>
            <div className={`border-2 ${isDarkMode ? 'border-white' : 'border-black'} p-6`}>
              <h2 className={`text-xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-4`}>Book a Meeting</h2>
              <button onClick={() => setShowCalendly(true)} className={`border-2 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} px-6 py-2 text-sm font-mono transition-all duration-300 w-full`}>Schedule on Calendly</button>
            </div>
          </div>

          {submitted && (
            <div className="mb-6 p-4 border-2 border-green-600 bg-green-50 text-green-800 font-mono">Message sent successfully! I'll get back to you soon.</div>
          )}

          {error && (
            <div className="mb-6 p-4 border-2 border-red-600 bg-red-50 text-red-800 font-mono">{error}</div>
          )}

          <form onSubmit={handleSubmit} className={`border-2 ${isDarkMode ? 'border-white' : 'border-black'} p-6 md:p-8 space-y-6`}>
            <div>
              <label htmlFor="name" className={`block text-sm font-mono ${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>Name</label>
              <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className={`w-full border-2 ${isDarkMode ? 'border-white bg-black text-white focus:ring-white' : 'border-black bg-white text-black focus:ring-black'} px-4 py-3 text-base font-mono focus:outline-none focus:ring-2`} />
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-mono ${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>Email</label>
              <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className={`w-full border-2 ${isDarkMode ? 'border-white bg-black text-white focus:ring-white' : 'border-black bg-white text-black focus:ring-black'} px-4 py-3 text-base font-mono focus:outline-none focus:ring-2`} />
            </div>
            <div>
              <label htmlFor="message" className={`block text-sm font-mono ${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>Message</label>
              <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={6} className={`w-full border-2 ${isDarkMode ? 'border-white bg-black text-white focus:ring-white' : 'border-black bg-white text-black focus:ring-black'} px-4 py-3 text-base font-mono focus:outline-none focus:ring-2 resize-none`} />
            </div>
            <button type="submit" disabled={loading} className={`border-2 ${isDarkMode ? 'border-white bg-white text-black hover:bg-black hover:text-white' : 'border-black bg-black text-white hover:bg-white hover:text-black'} px-8 py-3 text-base font-mono transition-all duration-300 w-full md:w-auto disabled:opacity-50`}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </main>

      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} rounded-lg shadow-xl w-full max-w-4xl h-[80vh] relative`}>
            <button onClick={() => setShowCalendly(false)} className={`absolute top-4 right-4 text-2xl ${isDarkMode ? 'text-white hover:text-gray-400' : 'text-black hover:text-gray-600'} z-10`}>×</button>
            <div className="w-full h-full p-4">
              <iframe src="https://calendly.com/valezeval/30min" width="100%" height="100%" frameBorder="0" className="rounded" />
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40">
        <div className="relative">
          <button onClick={() => setShowLanguageModal(!showLanguageModal)} className={`w-12 h-12 ${isDarkMode ? 'bg-black border-white text-white hover:bg-white hover:text-black' : 'bg-white border-black text-black hover:bg-black hover:text-white'} border-2 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg`}>
            <Globe size={20} />
          </button>
          {showLanguageModal && (
            <div className={`absolute bottom-14 right-0 ${isDarkMode ? 'bg-black border-white' : 'bg-white border-black'} border-2 rounded p-2 shadow-lg min-w-24`}>
              <button onClick={() => { setCurrentLanguage('EN'); setShowLanguageModal(false); }} className={`block w-full text-left px-3 py-1 text-sm font-mono ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'} ${currentLanguage === 'EN' ? 'font-bold' : ''}`}>EN</button>
              <button onClick={() => { setCurrentLanguage('ES'); setShowLanguageModal(false); }} className={`block w-full text-left px-3 py-1 text-sm font-mono ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'} ${currentLanguage === 'ES' ? 'font-bold' : ''}`}>ES</button>
              <button onClick={() => { setCurrentLanguage('FR'); setShowLanguageModal(false); }} className={`block w-full text-left px-3 py-1 text-sm font-mono ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'} ${currentLanguage === 'FR' ? 'font-bold' : ''}`}>FR</button>
            </div>
          )}
        </div>
        <div className="relative">
          <button onClick={() => setShowThemeModal(!showThemeModal)} className={`w-12 h-12 ${isDarkMode ? 'bg-black border-white text-white hover:bg-white hover:text-black' : 'bg-white border-black text-black hover:bg-black hover:text-white'} border-2 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg`}>
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          {showThemeModal && (
            <div className={`absolute bottom-14 right-0 ${isDarkMode ? 'bg-black border-white' : 'bg-white border-black'} border-2 rounded p-2 shadow-lg min-w-24`}>
              <button onClick={() => { toggleTheme('light'); setShowThemeModal(false); }} className={`flex items-center gap-2 w-full text-left px-3 py-1 text-sm font-mono ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'} ${!isDarkMode ? 'font-bold' : ''}`}><Sun size={16} /> Light</button>
              <button onClick={() => { toggleTheme('dark'); setShowThemeModal(false); }} className={`flex items-center gap-2 w-full text-left px-3 py-1 text-sm font-mono ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'} ${isDarkMode ? 'font-bold' : ''}`}><Moon size={16} /> Dark</button>
            </div>
          )}
        </div>
        {showScrollTop && (
          <button onClick={scrollToTop} className={`w-12 h-12 ${isDarkMode ? 'bg-black border-white text-white hover:bg-white hover:text-black' : 'bg-white border-black text-black hover:bg-black hover:text-white'} border-2 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg`}>
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </div>
  );
}