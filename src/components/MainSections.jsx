import React, { useEffect, useState } from 'react';
import { Star, Mail, MapPin } from 'lucide-react';

const products = [
  {
    title: 'Oxford Velvet Sofa',
    price: '£899',
    img: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Windsor Oak Bed',
    price: '£759',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Kensington Wardrobe',
    price: '£649',
    img: 'https://images.unsplash.com/photo-1598300042247-c3c8b987beb2?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Soho Dining Table',
    price: '£529',
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Chelsea Lounge Chair',
    price: '£349',
    img: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop#chair'
  },
  {
    title: 'Mayfair Coffee Table',
    price: '£219',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Camden Bookshelf',
    price: '£279',
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop#shelf'
  },
  {
    title: 'Notting Hill Sideboard',
    price: '£499',
    img: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop'
  }
];

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-on-scroll');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('opacity-100', 'translate-y-0');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-6', 'transition', 'duration-700');
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
};

const FeaturedCard = ({ item }) => (
  <div className="group rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
    </div>
    <div className="p-4">
      <h3 style={{ fontFamily: 'Lora, serif' }} className="text-lg text-neutral-900 dark:text-white">{item.title}</h3>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-amber-700 dark:text-amber-400 font-semibold">{item.price}</span>
        <button className="px-4 py-1.5 rounded-full text-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90">View</button>
      </div>
    </div>
  </div>
);

const DiscountBanner = () => (
  <div className="reveal-on-scroll mt-16 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between">
    <div className="text-center sm:text-left">
      <p className="text-xl sm:text-2xl font-semibold">Free Delivery in the UK + 10% Off Your First Order</p>
      <p className="opacity-90 mt-1">Use code WELCOME10 at checkout</p>
    </div>
    <a href="#shop" className="mt-4 sm:mt-0 inline-flex items-center px-6 py-3 rounded-full bg-white text-neutral-900 hover:bg-neutral-100">Shop Deals</a>
  </div>
);

const About = () => (
  <div id="about" className="reveal-on-scroll mt-20 grid lg:grid-cols-2 gap-10 items-center">
    <div>
      <h2 style={{ fontFamily: 'Lora, serif' }} className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Crafted in the Heart of London</h2>
      <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg">Premium Furniture Since 2020. We blend traditional craftsmanship with contemporary design, using responsibly sourced oak, walnut, and ash. Each piece is made to elevate your home with warmth and longevity.</p>
      <ul className="mt-6 grid grid-cols-2 gap-4 text-neutral-800 dark:text-neutral-200">
        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-600" /> Solid wood</li>
        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-600" /> Hand-finished</li>
        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-600" /> 5-year warranty</li>
        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-600" /> Free UK delivery</li>
      </ul>
    </div>
    <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
      <img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop" alt="London workshop" className="w-full h-full object-cover" />
    </div>
  </div>
);

const Reviews = () => (
  <div className="reveal-on-scroll mt-20" id="reviews">
    <h2 style={{ fontFamily: 'Lora, serif' }} className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white text-center">What Our Customers Say</h2>
    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          name: 'Amelia R.',
          text: 'Beautiful craftsmanship and super comfy sofa. Delivery was quick and free!'
        },
        {
          name: 'James T.',
          text: 'Love our new dining set. Feels premium and looks stunning in our flat.'
        },
        {
          name: 'Sofia K.',
          text: 'Excellent service and quality. Will definitely buy again.'
        }
      ].map((r, i) => (
        <div key={i} className="rounded-2xl p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-1 text-amber-500 mb-3">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} size={18} fill="#f59e0b" className="text-amber-500" />
            ))}
          </div>
          <p className="text-neutral-700 dark:text-neutral-300">“{r.text}”</p>
          <div className="mt-4 flex items-center gap-3">
            <img src={`https://i.pravatar.cc/80?img=${i + 12}`} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">{r.name}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div id="contact" className="reveal-on-scroll mt-20">
      <h2 style={{ fontFamily: 'Lora, serif' }} className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white text-center">Get In Touch</h2>
      <p className="text-center mt-2 text-neutral-700 dark:text-neutral-300">Email: st.furnitur3.0@gmail.com</p>

      <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
        <form onSubmit={onSubmit} className="rounded-2xl p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-neutral-700 dark:text-neutral-300">Name</label>
              <input required type="text" className="mt-1 w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="text-sm text-neutral-700 dark:text-neutral-300">Email</label>
              <input required type="email" className="mt-1 w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-neutral-700 dark:text-neutral-300">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
          </div>
          <button className="mt-4 inline-flex px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white">Send Message</button>
          {submitted && <p className="mt-3 text-green-700 dark:text-green-400">Thanks! We will get back to you shortly.</p>}
          <div className="mt-6 flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <Mail size={18} /> st.furnitur3.0@gmail.com
          </div>
        </form>

        <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="h-[320px] sm:h-[420px] w-full">
            <iframe
              title="ST Furniture London"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.49028001773!2d-0.14158865!3d51.5072174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876053d0ef1f3e1%3A0x7f8b8b9f1d9f9a6a!2sLondon!5e0!3m2!1sen!2suk!4v1700000000000"
            />
          </div>
          <div className="p-4 flex items-center gap-2 text-neutral-700 dark:text-neutral-300 border-t border-neutral-200 dark:border-neutral-800">
            <MapPin size={18} /> Based in London, UK — Free delivery nationwide
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/447512267953"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.52 3.48A11.9 11.9 0 0012.04 0C5.66 0 .5 5.16.5 11.54c0 2.03.52 4.02 1.52 5.79L0 24l6.85-1.99a11.5 11.5 0 005.2 1.31h.01c6.38 0 11.54-5.16 11.54-11.54 0-3.09-1.2-6-3.44-8.26zM12.05 21.3h-.01c-1.73 0-3.43-.46-4.92-1.34l-.35-.21-4.07 1.18 1.17-3.96-.23-.36a9.78 9.78 0 01-1.5-5.08c0-5.41 4.4-9.81 9.81-9.81 2.62 0 5.09 1.02 6.94 2.88a9.74 9.74 0 012.87 6.93c0 5.41-4.4 9.83-9.81 9.83zm5.4-7.35c-.29-.15-1.7-.84-1.97-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.22-.62.07-.29-.14-1.23-.45-2.35-1.43-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.24-.57-.47-.49-.64-.5l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.02 2.84 1.16 3.04c.14.19 2 3.05 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.38.24-.69.24-1.29.17-1.38-.07-.09-.26-.15-.55-.3z"/></svg>
        Chat
      </a>
    </div>
  );
};

const MainSections = () => {
  useReveal();

  return (
    <section id="shop" className="relative z-10 py-16 sm:py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <h2 style={{ fontFamily: 'Lora, serif' }} className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white text-center">Featured Products</h2>
          <p className="text-center mt-2 text-neutral-700 dark:text-neutral-300">Handpicked favourites crafted for everyday luxury</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((p, idx) => (
            <div key={idx} className="reveal-on-scroll">
              <FeaturedCard item={p} />
            </div>
          ))}
        </div>

        <DiscountBanner />
        <About />
        <Reviews />
        <Contact />
      </div>
    </section>
  );
};

export default MainSections;
