import React from 'react';
import { ArrowRight, Send } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import shivaImg from '../assets/shiva.png';
import briefcaseIcon from '../assets/briefcase-clean.png';

export default function Hero() {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/Shiva45-12',
      icon: () => (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shiva-vishwakarma-b13888308',
      icon: () => (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    // {
    //   name: 'X (Twitter)',
    //   url: 'https://x.com',
    //   icon: () => (
    //     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    //       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    //     </svg>
    //   ),
    // },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~01c647272fc5d9cb27?mp_source=share',
      icon: () => (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.715 0-6.071 2.502-6.685 4.965-1.066-1.579-1.85-3.69-2.228-5.748h-3.618v9.45c0 1.947-1.585 3.532-3.532 3.532s-3.532-1.585-3.532-3.532v-9.45h-3.618v9.45c0 3.942 3.208 7.15 7.15 7.15 3.942 0 7.15-3.208 7.15-7.15v-1.127c.474.967 1.096 1.905 1.871 2.723l-1.564 7.371h3.699l1.177-5.545c.983.567 2.07.892 3.212.892 4.418 0 8.01-3.593 8.01-8.01 0-4.417-3.592-8.01-8.01-8.01z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ram__bhakt_shiva_vishwakarma45?psln=MWF4cGFhMTZ0cWJrdQ==',
      icon: () => (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
  ];

  // Reusable Portrait Visual Component
  const PortraitCard = ({ isMobile = false }) => (
    <div
      className={`relative mx-auto flex items-end justify-center ${
        isMobile
          ? 'w-full max-w-[280px] xs:max-w-[310px] sm:max-w-[340px] h-[320px] xs:h-[350px] sm:h-[380px] my-4'
          : 'w-full max-w-[480px] lg:max-w-[500px] h-[520px]'
      }`}
    >
      {/* 3D Glowing Purple Glass Arch Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/25 via-purple-900/20 to-purple-950/40 rounded-[36px] sm:rounded-[48px] border border-purple-400/25 backdrop-blur-md shadow-[0_0_50px_rgba(168,85,247,0.3)] -z-10"></div>
      
      {/* Soft Ambient Radial Light Behind Arch */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(216,180,254,0.3),transparent_70%)] rounded-[36px] sm:rounded-[48px] -z-10"></div>
      <div className="absolute -inset-4 bg-purple-600/15 rounded-full blur-2xl -z-20"></div>

      {/* Shiva Vishwakarma Real Portrait */}
      <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-b-[36px] sm:rounded-b-[48px]">
        <img
          src={shivaImg}
          alt="Shiva Vishwakarma - Software Developer"
          className="w-auto h-[95%] sm:h-[97%] max-h-none object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter contrast-[1.03] transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* Floating Glassmorphic "1.5+ Years Experience" Card (Temporarily commented out) */}
      {/*
      <div className="absolute -left-3 sm:-left-6 bottom-5 sm:bottom-10 z-20 animate-float-slow">
        <div className="glass-card bg-white/95 text-gray-900 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.45)] border border-white/60 flex items-center gap-2 sm:gap-3 backdrop-blur-xl">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-50 flex items-center justify-center p-1 shadow-inner">
            <img
              src={briefcaseIcon}
              alt="Experience Briefcase"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 leading-tight tracking-tight">
              1.5+ Years
            </h4>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
              Experience
            </p>
          </div>
        </div>
      </div>
      */}

      {/* Handwritten "Dream Code Build" signature script */}
      <div className="absolute -right-3 sm:-right-6 top-1/4 sm:top-1/3 z-20 pointer-events-none select-none">
        <div className="font-handwriting text-2xl sm:text-3xl lg:text-4xl text-white/95 leading-[1.1] drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] rotate-[-6deg] tracking-wide">
          <p className="text-white">Dream</p>
          <p className="translate-x-1.5 text-purple-100">Code</p>
          <p className="translate-x-3 text-purple-200">Build</p>
          <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-white via-purple-300 to-transparent mt-1 rounded-full -rotate-1"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-0 overflow-hidden"
    >
      {/* Background Graphic - Layer 1 */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-600/15 rounded-full blur-[120px] sm:blur-[140px]"></div>
        <div className="absolute top-1/3 right-10 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-indigo-600/15 rounded-full blur-[140px] sm:blur-[160px]"></div>

        {/* Desktop 3D Purple Graphic (Hidden on small mobile to prevent awkward cube crop) */}
        <img
          src={heroBg}
          alt="Abstract 3D Background"
          className="hidden lg:block w-full h-full object-cover object-right opacity-90 transition-opacity duration-700"
        />

        {/* Mobile-optimized subtle background curve */}
        <div className="lg:hidden absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#07050e] to-[#07050e]"></div>

        {/* Bottom Vignette */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07050e] via-[#07050e]/60 to-transparent"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-center min-h-[calc(100svh-5rem)]">
          
          {/* Left Column (On Desktop) / Main Flow (On Mobile) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-5 pt-2 sm:pt-4 lg:pt-0">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm font-medium text-gray-200 tracking-wide">
                Available for Opportunities
              </span>
            </div>

            {/* Main Hero Heading */}
            <div className="space-y-0.5 sm:space-y-1">
              <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white/95">
                Hello, I'm
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.15]">
                <span className="text-white">Shiva </span>
                <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]">
                  Vishwakarma
                </span>
              </h1>
            </div>

            {/* Subheading / Role */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-200 tracking-wide">
                Software Developer
              </span>
              <div className="h-[2px] w-8 sm:w-16 md:w-24 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-transparent rounded-full"></div>
            </div>

            {/* MOBILE ONLY: Portrait Card Displayed Right Here in Natural Flow */}
            <div className="w-full lg:hidden my-2 flex justify-center">
              <PortraitCard isMobile={true} />
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-base md:text-lg text-gray-300/85 max-w-xl leading-relaxed font-normal px-2 sm:px-0">
              Building innovative and scalable web applications with modern technologies to turn ideas into reality.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 w-full sm:w-auto pt-2">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-semibold text-white purple-gradient-btn group"
              >
                <span>Explore My Work</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </a>

              <a
                href="#contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-semibold text-white purple-outline-btn group"
              >
                <span>Contact Me</span>
                <Send className="w-3.5 h-3.5 text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-2 sm:pt-3 relative z-20">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full social-icon-btn flex items-center justify-center text-gray-300 hover:text-white cursor-pointer transition-transform hover:scale-110 active:scale-95"
                >
                  <social.icon />
                </a>
              ))}
            </div>

          </div>

          {/* DESKTOP ONLY: Right Column Portrait (Cols 8-12) */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-end">
            <PortraitCard isMobile={false} />
          </div>

        </div>
      </div>
    </section>
  );
}
