import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-neutral-950 dark:via-neutral-900/70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 style={{ fontFamily: 'Lora, serif' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 dark:text-white">
            Timeless Pieces For Modern Living
          </h1>
          <p className="mt-5 text-neutral-700 dark:text-neutral-300 text-lg sm:text-xl">
            Luxury. Comfort. Delivered Free Across the UK.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 text-sm font-medium shadow">
              Shop Now
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full bg-white/70 dark:bg-neutral-800/70 backdrop-blur px-6 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
