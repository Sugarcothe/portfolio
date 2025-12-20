import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);
      document.body.className = document.body.className.replace(/\b(dark-theme|light-theme)\b/g, '');
      document.body.classList.add(isDark ? 'dark-theme' : 'light-theme');
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
      document.body.className = document.body.className.replace(/\b(dark-theme|light-theme)\b/g, '');
      document.body.classList.add(isDark ? 'dark-theme' : 'light-theme');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.body.className = document.body.className.replace(/\b(dark-theme|light-theme)\b/g, '');
      document.body.classList.add(isDarkMode ? 'dark-theme' : 'light-theme');
    }
  }, [isDarkMode, mounted]);

  const toggleTheme = (theme: 'light' | 'dark') => {
    setIsDarkMode(theme === 'dark');
    localStorage.setItem('theme', theme);
  };

  return { isDarkMode, toggleTheme };
};