'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity =
          cursorRef.current.style.opacity === '0' ? '1' : '0';
      }
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white"
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #e0e0e0 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="absolute top-0 left-0 w-full h-px bg-[#eee]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full relative z-10 pt-24 pb-16">
        {/* Tag line */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-black" />
          <span className="text-[#999] text-xs font-mono tracking-[0.2em] uppercase">
            Full Stack Developer
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-tighter text-black mb-6">
          RAVI
          <br />
          SHARMA
          <span
            ref={cursorRef}
            className="inline-block w-[0.08em] h-[0.85em] bg-black ml-3 align-middle"
            style={{ transition: 'opacity 0.1s' }}
          />
        </h1>

        {/* Divider */}
        <div className="w-full h-px bg-[#e5e5e5] my-8" />

        {/* Sub info row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <p className="text-[#999] text-base leading-relaxed max-w-md font-mono">
            Building scalable web applications with modern technologies.
            <br />
            Next.js &middot; React &middot; Node.js &middot; TypeScript
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-semibold tracking-wide hover:bg-[#222] transition-colors duration-200"
            >
              View Projects
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/media/RaviSharmaResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-[#ccc] text-[#888] text-sm font-semibold tracking-wide hover:border-black hover:text-black transition-all duration-200"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-12 bg-[#ddd] relative overflow-hidden">
              <div
                className="w-full bg-black animate-bounce"
                style={{ height: '40%', animationDuration: '1.5s' }}
              />
            </div>
          </div>
          <span className="text-[#bbb] text-xs font-mono tracking-[0.2em] uppercase">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
