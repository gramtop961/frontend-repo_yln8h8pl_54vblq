import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import MainSections from './components/MainSections.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Title
    document.title = 'ST Furniture | Premium UK Designs';

    // Favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=256&auto=format&fit=crop';
    document.head.appendChild(link);

    // Fonts
    const gf = document.createElement('link');
    gf.rel = 'stylesheet';
    gf.href = 'https://fonts.googleapis.com/css2?family=Lora:wght@500;700&family=Poppins:wght@400;500;600;700&display=swap';
    document.head.appendChild(gf);

    // SEO + Open Graph
    const metas = [
      { name: 'description', content: 'ST Furniture — Luxury, comfort, and free UK delivery. Premium sofas, beds, tables, and more crafted in London.' },
      { name: 'keywords', content: 'furniture uk, london furniture, sofas, beds, tables, wardrobes, free delivery' },
      { property: 'og:title', content: 'ST Furniture | Premium UK Designs' },
      { property: 'og:description', content: 'Luxury. Comfort. Delivered Free Across the UK.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop' },
      { property: 'og:url', content: window.location.href }
    ];
    metas.forEach((m) => {
      const el = document.createElement('meta');
      Object.entries(m).forEach(([k, v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
    });

    // Timed popup
    const t = setTimeout(() => setShowPopup(true), 10000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="app" className="bg-white dark:bg-neutral-950" style={{ fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      <Header />
      <Hero />
      <MainSections />
      <div id="contact" className="sr-only" />
      <Footer />

      {/* Subscription Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden">
            <div className="p-6">
              <h3 style={{ fontFamily: 'Lora, serif' }} className="text-2xl font-semibold text-neutral-900 dark:text-white">Get 5% Off — Subscribe Now!</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">Join our list for exclusive offers and design inspiration.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowPopup(false);
                  alert('Thanks for subscribing! Your 5% code: HELLO5');
                }}
                className="mt-4 flex gap-2"
              >
                <input type="email" required placeholder="your@email.com" className="flex-1 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" />
                <button className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white">Subscribe</button>
              </form>
              <button onClick={() => setShowPopup(false)} className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 hover:underline">No, thanks</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
