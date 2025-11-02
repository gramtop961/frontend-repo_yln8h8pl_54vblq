import React from 'react';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-500 to-amber-600 shadow-inner" />
              <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">ST Furniture</span>
            </div>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">Luxury. Comfort. Delivered Free Across the UK.</p>
            <div className="mt-3 inline-flex items-center gap-2 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-3 py-1.5 rounded-full border border-amber-200/60 dark:border-amber-800">Free Delivery</div>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200"><Instagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200"><Facebook /></a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200"><Pinterest /></a>
          </div>
        </div>
        <div className="mt-8 pt-6 text-center text-sm text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800">
          © 2025 ST Furniture. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
