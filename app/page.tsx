"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUp, Globe, Sun, Moon } from "lucide-react";
import { useTheme } from "./useTheme";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const { isDarkMode, toggleTheme } = useTheme();

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
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <nav
        className={`flex items-center justify-between px-4 md:px-12 py-6 md:py-8 border-b ${
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
            } hover:underline decoration-2 underline-offset-4`}
          >
            Work
          </Link>
          <Link
            href="/writing"
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } hover:underline decoration-2 underline-offset-4`}
          >
            Writing
          </Link>
          <Link
            href="/contact"
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } hover:underline decoration-2 underline-offset-4`}
          >
            Contact
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
                Senior Software Developer
              </h2>
            </div>
          </div>

          <div className="max-w-2xl text-left">
            <div
              className={`text-sm md:text-base ${
                isDarkMode ? "text-white" : "text-black"
              } leading-relaxed font-mono opacity-80 space-y-4`}
            >
              <p>
                With over six years of experience in software development and
                infrastructure optimization, I focus on building reliable,
                scalable systems that solve real business problems. My work
                spans system design, development, deployment, and maintenance,
                with strong attention to performance, security, and long-term
                maintainability.
              </p>
              <p>
                I am proficient in automation, cloud technologies, and CI/CD
                practices, using them to improve delivery speed and operational
                reliability. I work comfortably across teams, translating
                business requirements into robust technical solutions, and I am
                driven by building resilient systems that enable organizations
                to scale efficiently.
              </p>
              <p className="font-medium">Selected work and projects:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  Built AI-powered platforms such as evenx.site and
                  the-congress.vercel.app.
                </li>
                <li>
                  Developed large-scale web applications including
                  Votemaster.co.uk, Pollmaster.co.uk.com, wevesting.vercel.app,
                  and PrevailAgency.ie.
                </li>
                <li>
                  Designed and deployed hotel and business management systems
                  with integrated payments (Stripe)
                </li>
                <li>
                  Deployed and managed applications on AWS, with CI/CD pipelines
                  using GitHub Actions
                </li>
                <li>
                  Optimized databases and resolved performance issues under high
                  traffic
                </li>
                <li>
                  Served as a full-stack and cloud computing instructor and
                  technical consultant
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-2xl text-left mt-12">
            <h3
              className={`text-xl md:text-2xl font-mono ${
                isDarkMode ? "text-white" : "text-black"
              } font-bold mb-6`}
            >
              How I Can Help
            </h3>
            <ul
              className={`list-disc list-inside space-y-2 text-sm md:text-base ${
                isDarkMode ? "text-white" : "text-black"
              } leading-relaxed font-mono opacity-80 ml-4`}
            >
              <li>Technical Architecture & Strategic Planning</li>
              <li>Engineering Leadership & Team Mentorship</li>
              <li>Distributed Systems Architecture</li>
              <li>System Modernization & Migration Services</li>
              <li>Performance Engineering & Scalability Solutions</li>
              <li>Technical Advisory & Code Review Services</li>
              <li>Cloud Infrastructure & Deployment Strategy</li>
              <li>Regulatory Compliance & Data Protection (UK/US Standards)</li>
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
              Schedule a Meeting
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
              } border-2 rounded p-2 shadow-lg min-w-24`}
            >
              <button
                onClick={() => {
                  setCurrentLanguage("EN");
                  setShowLanguageModal(false);
                }}
                className={`block w-full text-left px-3 py-1 text-sm font-mono ${
                  isDarkMode
                    ? "text-white hover:bg-gray-800"
                    : "text-black hover:bg-gray-100"
                } ${currentLanguage === "EN" ? "font-bold" : ""}`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  setCurrentLanguage("ES");
                  setShowLanguageModal(false);
                }}
                className={`block w-full text-left px-3 py-1 text-sm font-mono ${
                  isDarkMode
                    ? "text-white hover:bg-gray-800"
                    : "text-black hover:bg-gray-100"
                } ${currentLanguage === "ES" ? "font-bold" : ""}`}
              >
                ES
              </button>
              <button
                onClick={() => {
                  setCurrentLanguage("FR");
                  setShowLanguageModal(false);
                }}
                className={`block w-full text-left px-3 py-1 text-sm font-mono ${
                  isDarkMode
                    ? "text-white hover:bg-gray-800"
                    : "text-black hover:bg-gray-100"
                } ${currentLanguage === "FR" ? "font-bold" : ""}`}
              >
                FR
              </button>
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
