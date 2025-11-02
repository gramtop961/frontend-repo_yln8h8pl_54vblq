import React, { useEffect, useState } from 'react';
import { ShoppingCart, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize theme from system or previous choice
    const saved = localStorage.getItem('st-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(enableDark);
    document.documentElement.classList.toggle('dark', enableDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('st-theme', next ? 'dark' : 'light');
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-500 to-amber-600 shadow-inner" />
            <div>
              <div className="text-lg font-semibold tracking-wide text-neutral-900 dark:text-neutral-100">ST Furniture</div>
              <div className="text-[10px] text-neutral-500 dark:text-neutral-400">Luxury. Comfort. Delivered Free Across the UK.</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollToId('home')} className="text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition">Home</button>
            <button onClick={() => scrollToId('shop')} className="text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition">Shop</button>
            <button onClick={() => scrollToId('about')} className="text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition">About</button>
            <button onClick={() => scrollToId('contact')} className="text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition">Contact</button>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle Theme" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition">
              <ShoppingCart size={16} />
              <span className="text-sm">Cart</span>
            </button>
            <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <button onClick={() => scrollToId('home')} className="text-left px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200">Home</button>
            <button onClick={() => scrollToId('shop')} className="text-left px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200">Shop</button>
            <button onClick={() => scrollToId('about')} className="text-left px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200">About</button>
            <button onClick={() => scrollToId('contact')} className="text-left px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200">Contact</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
