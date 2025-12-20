"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUp, Globe, Sun, Moon } from "lucide-react";
import { useTheme } from "../useTheme";
import { useLanguage, languages, Language } from "../useLanguage";
import { useTranslation } from "../translations";

interface Article {
  _id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

export default function Writing() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const { isDarkMode, toggleTheme } = useTheme();
  const { currentLanguage: lang, changeLanguage } = useLanguage();
  const t = useTranslation(lang);

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const fetchArticles = async () => {
    try {
      const res = await fetch("/api/blog/list");
      const data = await res.json();
      if (res.ok) {
        setArticles(data.blogs);
      }
    } catch (error) {
      console.error("Failed to fetch articles");
    } finally {
      setLoading(false);
    }
  };

  const displayedArticles = showAll ? articles : articles.slice(0, 3);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        setSubscribed(true);
        setEmail("");
      } else {
        const data = await res.json();
        alert(data.error || t.subscribeError);
      }
    } catch (error) {
      alert(t.subscribeError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen font-mono transition-colors ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <nav className={`flex items-center justify-between px-4 md:px-12 py-6 md:py-8 border-b ${isDarkMode ? 'border-white' : 'border-gray-200'}`}>
        <Link href="/" className={`text-xl md:text-2xl font-mono ${isDarkMode ? 'text-white' : 'text-black'}`}>V|E</Link>
        <div className="flex gap-4 md:gap-12 text-sm md:text-lg">
          <Link href="/work" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:underline decoration-2 underline-offset-4`}>{t.work}</Link>
          <Link href="/writing" className={`${isDarkMode ? 'text-white' : 'text-black'} underline decoration-2 underline-offset-4`}>{t.writing}</Link>
          <Link href="/contact" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:underline decoration-2 underline-offset-4`}>{t.contact}</Link>
        </div>
      </nav>

      <main className="flex justify-center px-4 md:px-12 py-8 md:py-12">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className={`text-3xl md:text-4xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-8`}>{t.writingTitle}</h1>

          <div className="space-y-8">
            {loading ? (
              <p className={`text-sm opacity-70 ${isDarkMode ? 'text-white' : 'text-black'}`}>{t.loading}</p>
            ) : articles.length === 0 ? (
              <p className={`text-sm opacity-70 ${isDarkMode ? 'text-white' : 'text-black'}`}>{t.noArticles}</p>
            ) : (
              displayedArticles.map((article) => (
                <Link key={article._id} href={`/writing/${article.slug}`} className={`block border-b ${isDarkMode ? 'border-white' : 'border-gray-200'} pb-6 hover:opacity-70 transition-opacity`}>
                  <h2 className={`text-xl md:text-2xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>{article.title}</h2>
                  <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} opacity-60 mb-3`}>{article.date}</p>
                  <p className={`text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-black'} opacity-80 leading-relaxed`}>{article.excerpt}</p>
                </Link>
              ))
            )}
          </div>

          {!showAll && articles.length > 3 && (
            <div className="mt-8">
              <button onClick={() => setShowAll(true)} className={`border-2 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} px-8 py-3 text-base font-mono transition-all duration-300`}>{t.viewMoreArticles}</button>
            </div>
          )}

          <div className={`mt-12 border-2 ${isDarkMode ? 'border-white' : 'border-black'} p-6 md:p-8`}>
            <h3 className={`text-xl md:text-2xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-4`}>{t.newsletterTitle}</h3>
            {subscribed ? (
              <p className={`text-base ${isDarkMode ? 'text-white' : 'text-black'} opacity-80`}>{t.subscribeSuccess}</p>
            ) : (
              <>
                <p className={`text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-black'} opacity-80 mb-6`}>{t.newsletterDescription}</p>
                <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.emailPlaceholder} required className={`flex-1 border-2 ${isDarkMode ? 'border-white bg-black text-white' : 'border-black bg-white text-black'} px-4 py-3 text-base font-mono focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-white' : 'focus:ring-black'}`} />
                  <button type="submit" disabled={loading} className={`border-2 ${isDarkMode ? 'border-white bg-white text-black hover:bg-black hover:text-white' : 'border-black bg-black text-white hover:bg-white hover:text-black'} px-8 py-3 text-base font-mono transition-all duration-300 disabled:opacity-50`}>{loading ? t.subscribing : t.subscribe}</button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40">
        <div className="relative">
          <button onClick={() => setShowLanguageModal(!showLanguageModal)} className={`w-12 h-12 ${isDarkMode ? 'bg-black border-white text-white hover:bg-white hover:text-black' : 'bg-white border-black text-black hover:bg-black hover:text-white'} border-2 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg`}>
            <Globe size={20} />
          </button>
          {showLanguageModal && (
            <div className={`absolute bottom-14 right-0 ${isDarkMode ? 'bg-black border-white' : 'bg-white border-black'} border-2 rounded-lg p-2 shadow-lg min-w-[120px]`}>
              {Object.entries(languages).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => {
                    changeLanguage(code as Language);
                    setShowLanguageModal(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm font-mono transition-colors ${
                    lang === code 
                      ? (isDarkMode ? 'bg-white text-black' : 'bg-black text-white')
                      : (isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100')
                  }`}
                >
                  {name}
                </button>
              ))}
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