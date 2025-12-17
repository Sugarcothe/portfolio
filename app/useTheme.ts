import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    document.body.className = document.body.className.replace(/\b(dark-theme|light-theme)\b/g, '');
    document.body.classList.add(isDarkMode ? 'dark-theme' : 'light-theme');
  }, [isDarkMode]);

  const toggleTheme = (theme: 'light' | 'dark') => {
    setIsDarkMode(theme === 'dark');
    localStorage.setItem('theme', theme);
  };

  return { isDarkMode: mounted ? isDarkMode : false, toggleTheme };
};