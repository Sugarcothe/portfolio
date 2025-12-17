"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUp, Globe, Sun, Moon } from "lucide-react";
import { useTheme } from "../useTheme";

const workExperience = [
  {
    period: "2023/01 – present",
    title: "Senior Fullstack Engineer",
    company: "Digital Works Technologies",
    location: "(Remote), Manchester, UK",
    responsibilities: [
      "Designed and developed robust, scalable, and secure web applications across the full stack (front-end, back-end, and database).",
      "Defined system architecture, wrote clean and maintainable code, and enforced engineering best practices to ensure code quality.",
      "Collaborated with UI/UX designers, product managers, and other engineers to translate requirements into functional solutions.",
      "Optimized and maintained applications to ensure high performance, troubleshoot issues, and continuously improve scalability and efficiency.",
      "Provided technical leadership and mentorship, conducted code reviews, and guided junior developers to enhance team capability.",
    ],
  },
  {
    period: "2023/06 – 2023/12",
    title: "DevOps Engineer",
    company: "Darey.io",
    location: "",
    responsibilities: [
      "Supported CI/CD pipeline implementation, enhancing software delivery efficiency and reducing errors.",
      "Assisted in adopting IaC principles, streamlining resource management processes with a good improvement in provisioning time.",
      "Contributed to the implementation of proactive monitoring solutions, reducing system downtime.",
      "Administered and secured NGINX for load balancing, reverse proxy, and application delivery.",
      "Developed and consumed RESTful APIs, enabling seamless communication between services.",
      "Applied strong understanding of TCP/IP, DNS, HTTP, SMTP, TLS/SSL, and PKI to design secure and reliable networked applications.",
    ],
  },
  {
    period: "2021/06 – 2023/06",
    title: "Fullstack | Cloud Computing Instructor",
    company: "New Horizons",
    location: "Lagos, Nigeria",
    responsibilities: [
      "Designed and delivered Full-Stack Development courses covering HTML, CSS, JavaScript, React, and Node.js. Helped students build real-world applications with clean coding practices.",
      "Taught practical coding sessions using React, Express.js, and APIs, focusing on cloud deployment and version control with Git.",
      "Guided students in building frontend and backend projects while providing career coaching on portfolios, debugging, and agile workflows.",
      "Delivered lessons on React, Docker, Firebase, and AWS, organizing workshops to teach scalable application development.",
      "Mentored students to create complete applications, focusing on responsive design, API integration, and agile project management.",
      "Also introduced the student into Cloud Computing Technology",
    ],
  },
  {
    period: "2018/02 – 2021/03",
    title: "Fullstack Engineer",
    company: "Pematrix Technology",
    location: "Lagos, Nigeria",
    responsibilities: [
      "Designed and implemented user-friendly frontend features using modern JavaScript frameworks like React, and NextJs.",
      "Developed scalable backend services and RESTful APIs using technologies like Node.js and Python, with a 60% focus on backend development.",
      "Implemented seamless integration between frontend and backend components to deliver cohesive user experiences and optimize system performance.",
      "Performed Micro Frontend to increase speed for user experience.",
      "Optimized application for security and scalability, through proper authentication, encryption, validation, session, and understanding threat models.",
    ],
  },
];

export default function Work() {
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

  return (
    <div className={`min-h-screen font-mono transition-colors ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <nav className={`flex items-center justify-between px-4 md:px-12 py-6 md:py-8 border-b ${isDarkMode ? 'border-white' : 'border-gray-200'}`}>
        <Link href="/" className={`text-xl md:text-2xl font-mono ${isDarkMode ? 'text-white' : 'text-black'}`}>V|E</Link>
        <div className="flex gap-4 md:gap-12 text-sm md:text-lg">
          <Link href="/work" className={`${isDarkMode ? 'text-white' : 'text-black'} underline decoration-2 underline-offset-4`}>Work</Link>
          <Link href="/writing" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:underline decoration-2 underline-offset-4`}>Writing</Link>
          <Link href="/contact" className={`${isDarkMode ? 'text-white' : 'text-black'} hover:underline decoration-2 underline-offset-4`}>Contact</Link>
        </div>
      </nav>

      <main className="flex justify-center px-4 md:px-12 py-8 md:py-12">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className={`text-3xl md:text-4xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-8`}>Work Experience</h1>

          <div className="space-y-10">
            {workExperience.map((job, index) => (
              <div key={index} className={`border-b ${isDarkMode ? 'border-white' : 'border-gray-200'} pb-8`}>
                <div className="mb-4">
                  <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} opacity-60 mb-2`}>{job.period}</p>
                  <h2 className={`text-xl md:text-2xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-1`}>{job.title}</h2>
                  <p className={`text-base md:text-lg ${isDarkMode ? 'text-white' : 'text-black'} opacity-80`}>{job.company}</p>
                  {job.location && (
                    <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} opacity-60`}>{job.location}</p>
                  )}
                </div>
                <ul className={`list-disc list-inside space-y-2 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-black'} opacity-80 leading-relaxed ml-4`}>
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h1 className={`text-3xl md:text-4xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-8`}>Live Projects</h1>
            <div className="space-y-6">
              <div className={`border-b ${isDarkMode ? 'border-white' : 'border-gray-200'} pb-6`}>
                <a href="https://poll.votemaster.co.uk" target="_blank" rel="noopener noreferrer" className={`text-lg md:text-xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} hover:underline decoration-2 underline-offset-4`}>poll.votemaster.co.uk</a>
                <p className={`text-base ${isDarkMode ? 'text-white' : 'text-black'} opacity-80 mt-2`}>Poll | Customer Rating System</p>
                <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} opacity-60 mt-1`}>Manchester, United Kingdom</p>
              </div>

              <div className={`border-b ${isDarkMode ? 'border-white' : 'border-gray-200'} pb-6`}>
                <a href="https://prevailagency.ie" target="_blank" rel="noopener noreferrer" className={`text-lg md:text-xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} hover:underline decoration-2 underline-offset-4`}>prevailagency.ie</a>
                <p className={`text-base ${isDarkMode ? 'text-white' : 'text-black'} opacity-80 mt-2`}>Digital Accelerator | SaaS | Digital Marketing website</p>
                <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} opacity-60 mt-1`}>Cork, Ireland</p>
              </div>

              <div className={`border-b ${isDarkMode ? 'border-white' : 'border-gray-200'} pb-6`}>
                <a href="https://rexaconsult.com" target="_blank" rel="noopener noreferrer" className={`text-lg md:text-xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} hover:underline decoration-2 underline-offset-4`}>rexaconsult.com</a>
                <p className={`text-base ${isDarkMode ? 'text-white' : 'text-black'} opacity-80 mt-2`}>Product Development | Cloud Solution | Tech Consulting</p>
                <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} opacity-60 mt-1`}>Lagos, Nigeria</p>
              </div>

              <div className={`border-b ${isDarkMode ? 'border-white' : 'border-gray-200'} pb-6`}>
                <a href="https://wevesting.vercel.app" target="_blank" rel="noopener noreferrer" className={`text-lg md:text-xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} hover:underline decoration-2 underline-offset-4`}>Wevesting</a>
                <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} opacity-60 mt-1`}>https://wevesting.vercel.app</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h1 className={`text-3xl md:text-4xl font-mono ${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-8`}>Certificates</h1>
            <ul className={`list-disc list-inside space-y-2 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-black'} opacity-80 leading-relaxed ml-4`}>
              <li>Cloud DevOps Engineer</li>
              <li>Software Development Fundamentals</li>
              <li>Networking Fundamentals</li>
              <li>AWS: Addressing Security Risk | Coursera</li>
              <li>React Basic | HackerRank</li>
              <li>Oracle Cloud Infrastructure 2023 Certified Foundations Associate</li>
              <li>Database Fundamentals</li>
              <li>Introduction to Cloud Computing</li>
              <li>Security Fundamentals</li>
              <li>AWS Cloud Technical Essentials | Coursera</li>
              <li>Javascript | HackerRank</li>
            </ul>
          </div>
        </div>
      </main>

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