"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Share2, ThumbsUp, ArrowUp, Globe, Sun, Moon } from "lucide-react";
import { useTheme } from "../../useTheme";
import { useLanguage, languages, Language } from "../../useLanguage";
import { useTranslation } from "../../translations";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  likes: number;
  imageUrl?: string;
}

export default function BlogClient({ blog }: { blog: Blog }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(blog.likes || 0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const { isDarkMode, toggleTheme } = useTheme();
  const { currentLanguage: lang, changeLanguage } = useLanguage();
  const t = useTranslation(lang);

  useEffect(() => {
    const liked = localStorage.getItem(`liked_${blog._id}`);
    setHasLiked(liked === 'true');
  }, [blog._id]);

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

  const handleLike = async () => {
    if (hasLiked) return;

    try {
      const res = await fetch('/api/blog/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blogId: blog._id }),
      });

      if (res.ok) {
        const data = await res.json();
        setLikeCount(data.likes);
        setHasLiked(true);
        localStorage.setItem(`liked_${blog._id}`, 'true');
      }
    } catch (error) {
      console.error('Failed to like blog');
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    const text = `Check out this article: ${blog.title}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: blog.title, text, url });
      } catch (error) {
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }).catch(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    });
  };

  return (
    <div className={`min-h-screen font-mono transition-colors ${isDarkMode ? 'bg-black text-white' : 'bg-[#E9E9E9] text-black'}`}>
      <nav className={`flex items-center justify-between px-4 md:px-12 py-6 md:py-8 border-b ${isDarkMode ? 'border-white' : 'border-gray-200'}`}>
        <Link href="/" className={`text-xl md:text-2xl font-mono ${isDarkMode ? 'text-white' : 'text-black'}`}>V|E</Link>
        <div className="flex gap-4 md:gap-12 text-sm md:text-lg">
          <Link href="/work" className={`${isDarkMode ? 'text-white' : 'text-black'} relative group transition-colors duration-300`}>
            {t.work}
            <span className={`absolute left-0 bottom-0 w-0 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
          </Link>
          <Link href="/writing" className={`${isDarkMode ? 'text-white' : 'text-black'} relative group transition-colors duration-300`}>
            {t.writing}
            <span className={`absolute left-0 bottom-0 w-0 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
          </Link>
          <Link href="/contact" className={`${isDarkMode ? 'text-white' : 'text-black'} relative group transition-colors duration-300`}>
            {t.contact}
            <span className={`absolute left-0 bottom-0 w-0 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
          </Link>
        </div>
      </nav>

      <main className="flex justify-center px-4 md:px-12 py-8 md:py-12">
        <article className="w-full max-w-2xl mx-auto">
          <Link href="/writing" className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} opacity-60 hover:opacity-100 mb-6 inline-block`}>{t.backToWriting}</Link>

          <h1 className={`text-3xl md:text-4xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-4 mt-4`}>{blog.title}</h1>
          <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} opacity-60 mb-8`}>{blog.date}</p>

          {blog.imageUrl && (
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className={`w-full h-auto mb-8 border-2 ${isDarkMode ? 'border-white' : 'border-black'}`}
            />
          )}

          <div className={`prose prose-sm md:prose-base max-w-none ${isDarkMode ? 'text-white' : 'text-black'} font-mono opacity-80 leading-relaxed whitespace-pre-line`}>{blog.content}</div>

          <div className={`flex items-center gap-6 mt-12 pt-8 border-t ${isDarkMode ? 'border-white' : 'border-gray-200'}`}>
            <button onClick={handleLike} disabled={hasLiked} className={`flex items-center gap-2 px-4 py-2 border-2 transition ${hasLiked ? 'border-blue-600 bg-blue-50 text-blue-600' : isDarkMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} ${hasLiked ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
              <ThumbsUp size={16} className={hasLiked ? 'fill-current' : ''} />
              <span className="text-sm font-mono">{likeCount} {likeCount === 1 ? t.like : t.likes}</span>
            </button>

            <div className="relative">
              <button onClick={handleShare} className={`flex items-center gap-2 px-4 py-2 border-2 ${isDarkMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition`}>
                <Share2 size={16} />
                <span className="text-sm font-mono">{t.share}</span>
              </button>
              {showTooltip && (
                <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} px-3 py-1 text-sm font-mono rounded whitespace-nowrap`}>
                  {t.linkCopied}
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${isDarkMode ? 'border-t-white' : 'border-t-black'}`}></div>
                </div>
              )}
            </div>
          </div>
        </article>
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