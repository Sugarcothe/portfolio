"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUp, Globe, Sun, Moon, MapPin } from "lucide-react";
import { useTheme } from "./useTheme";
import { useLanguage, languages, Language } from "./useLanguage";
import { useTranslation } from "./translations";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useLanguage();
  const t = useTranslation(currentLanguage);

  useEffect(() => {
    setMounted(true);
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
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showLanguageModal, showThemeModal]);

  if (!mounted) {
    return <div className="min-h-screen font-mono" />;
  }

  return (
    <div
      className={`min-h-screen font-mono transition-colors ${
        isDarkMode ? "bg-black text-white" : "bg-[#E9E9E9] text-black"
      }`}
    >
      <nav
        className={`flex items-center justify-between px-4 md:px-12 py-6 md:py-4 border-b ${
          isDarkMode ? "border-white" : "border-gray-200"
        }`}
      >
        <Link
          href="/"
          className={`text-xl md:text-2xl font-mono ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          V|E
        </Link>
        <div className="flex gap-4 md:gap-12 text-sm md:text-lg">
          <Link
            href="/work"
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } relative group transition-colors duration-300`}
          >
            {t.work}
            <span className={`absolute left-0 bottom-0 w-0 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
          </Link>
          <Link
            href="/writing"
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } relative group transition-colors duration-300`}
          >
            {t.writing}
            <span className={`absolute left-0 bottom-0 w-0 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
          </Link>
          <Link
            href="/contact"
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } relative group transition-colors duration-300`}
          >
            {t.contact}
            <span className={`absolute left-0 bottom-0 w-0 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
          </Link>
        </div>
      </nav>

      <main className="flex justify-center px-4 md:px-12 py-8 md:py-12">
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div
              className={`relative w-[62px] h-[62px] border-2 ${
                isDarkMode ? "border-white" : "border-black"
              } rounded-full flex-shrink-0`}
            >
              <Image
                src="/my.png"
                alt="Profile"
                fill
                className="object-cover rounded-full grayscale"
                priority
              />
            </div>
            <div>
              <h1
                className={`text-2xl md:text-3xl font-mono ${
                  isDarkMode ? "text-white" : "text-black"
                } mb-1 leading-tight`}
                style={{ fontWeight: 400 }}
              >
                Valentine Eze
              </h1>
              <h2
                className={`text-lg md:text-xl font-mono ${
                  isDarkMode ? "text-white" : "text-black"
                } opacity-70`}
              >
                {t.softwareDeveloper}
              </h2>
              <div className="flex items-center gap-1 mt-1">
                <MapPin size={14} className={`${isDarkMode ? "text-white" : "text-black"} opacity-60`} />
                <p className={`text-sm font-mono ${isDarkMode ? "text-white" : "text-black"} opacity-60`}>
                  {t.location}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl text-left">
            <div
              className={`text-sm md:text-base ${
                isDarkMode ? "text-white" : "text-black"
              } leading-relaxed font-mono opacity-80 space-y-4`}
            >
              <p>
                {t.aboutDescription1}
              </p>
              <p>
                {t.aboutDescription2}
              </p>
              <p className="font-medium">{t.selectedWork}</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>{t.project1}</li>
                <li>{t.project2}</li>
                <li>{t.project3}</li>
                <li>{t.project4}</li>
                <li>{t.project5}</li>
                <li>{t.project6}</li>
              </ul>
            </div>
          </div>

          <div className="max-w-2xl text-left mt-12">
            <h3
              className={`text-xl md:text-2xl font-mono ${
                isDarkMode ? "text-white" : "text-black"
              } font-bold mb-6`}
            >
              {t.howICanHelp}
            </h3>
            <ul
              className={`list-disc list-inside space-y-2 text-sm md:text-base ${
                isDarkMode ? "text-white" : "text-black"
              } leading-relaxed font-mono opacity-80 ml-4`}
            >
              <li>{t.service1}</li>
              <li>{t.service2}</li>
              <li>{t.service3}</li>
              <li>{t.service4}</li>
              <li>{t.service5}</li>
              <li>{t.service6}</li>
              <li>{t.service7}</li>
              <li>{t.service8}</li>
            </ul>
          </div>

          <div className="max-w-2xl text-left mt-12">
            <button
              onClick={() => setShowCalendly(true)}
              className={`border-2 ${
                isDarkMode
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              } px-8 py-3 text-base font-mono transition-all duration-300`}
            >
              {t.scheduleCall}
            </button>
          </div>
        </div>
      </main>

      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className={`${
              isDarkMode ? "bg-black" : "bg-white"
            } rounded-lg shadow-xl w-full max-w-4xl h-[80vh] relative`}
          >
            <button
              onClick={() => setShowCalendly(false)}
              className={`absolute top-4 right-4 text-2xl ${
                isDarkMode
                  ? "text-white hover:text-gray-400"
                  : "text-black hover:text-gray-600"
              } z-10`}
            >
              ×
            </button>
            <div className="w-full h-full p-4">
              <iframe
                src="https://calendly.com/valezeval/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded"
              />
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40">
        <div className="relative">
          <button
            onClick={() => setShowLanguageModal(!showLanguageModal)}
            className={`w-12 h-12 ${
              isDarkMode
                ? "bg-black border-white text-white hover:bg-white hover:text-black"
                : "bg-white border-black text-black hover:bg-black hover:text-white"
            } border-2 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg`}
          >
            <Globe size={20} />
          </button>
          {showLanguageModal && (
            <div
              className={`absolute bottom-14 right-0 ${
                isDarkMode ? "bg-black border-white" : "bg-white border-black"
              } border-2 rounded-lg p-2 shadow-lg min-w-[120px]`}
            >
              {Object.entries(languages).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => {
                    changeLanguage(code as Language);
                    setShowLanguageModal(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm font-mono transition-colors ${
                    currentLanguage === code 
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
          <button
            onClick={() => setShowThemeModal(!showThemeModal)}
            className={`w-12 h-12 ${
              isDarkMode
                ? "bg-black border-white text-white hover:bg-white hover:text-black"
                : "bg-white border-black text-black hover:bg-black hover:text-white"
            } border-2 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg`}
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          {showThemeModal && (
            <div
              className={`absolute bottom-14 right-0 ${
                isDarkMode ? "bg-black border-white" : "bg-white border-black"
              } border-2 rounded p-2 shadow-lg min-w-24`}
            >
              <button
                onClick={() => {
                  toggleTheme("light");
                  setShowThemeModal(false);
                }}
                className={`flex items-center gap-2 w-full text-left px-3 py-1 text-sm font-mono ${
                  isDarkMode
                    ? "text-white hover:bg-gray-800"
                    : "text-black hover:bg-gray-100"
                } ${!isDarkMode ? "font-bold" : ""}`}
              >
                <Sun size={16} /> Light
              </button>
              <button
                onClick={() => {
                  toggleTheme("dark");
                  setShowThemeModal(false);
                }}
                className={`flex items-center gap-2 w-full text-left px-3 py-1 text-sm font-mono ${
                  isDarkMode
                    ? "text-white hover:bg-gray-800"
                    : "text-black hover:bg-gray-100"
                } ${isDarkMode ? "font-bold" : ""}`}
              >
                <Moon size={16} /> Dark
              </button>
            </div>
          )}
        </div>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={`w-12 h-12 ${
              isDarkMode
                ? "bg-black border-white text-white hover:bg-white hover:text-black"
                : "bg-white border-black text-black hover:bg-black hover:text-white"
            } border-2 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg`}
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
