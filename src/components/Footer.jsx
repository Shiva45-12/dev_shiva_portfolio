import React from 'react';
import fullLogo from '../assets/full-logo-tight.png';
import { ArrowUp, Mail, Phone, MapPin, ChevronRight, Heart } from 'lucide-react';
import Reveal from './Reveal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Shiva45-12',
      hoverColor: 'hover:text-white hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shiva-vishwakarma-b13888308',
      hoverColor: 'hover:text-[#0a66c2] hover:border-[#0a66c2]/60 hover:shadow-[0_0_20px_rgba(10,102,194,0.4)]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ram__bhakt_shiva_vishwakarma45?psln=MWF4cGFhMTZ0cWJrdQ==',
      hoverColor: 'hover:text-[#e1306c] hover:border-[#e1306c]/60 hover:shadow-[0_0_20px_rgba(225,48,108,0.4)]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~01c647272fc5d9cb27?mp_source=share',
      hoverColor: 'hover:text-[#14a800] hover:border-[#14a800]/60 hover:shadow-[0_0_20px_rgba(20,168,0,0.4)]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.715 0-6.071 2.502-6.685 4.965-1.066-1.579-1.85-3.69-2.228-5.748h-3.618v9.45c0 1.947-1.585 3.532-3.532 3.532s-3.532-1.585-3.532-3.532v-9.45h-3.618v9.45c0 3.942 3.208 7.15 7.15 7.15 3.942 0 7.15-3.208 7.15-7.15v-1.127c.474.967 1.096 1.905 1.871 2.723l-1.564 7.371h3.699l1.177-5.545c.983.567 2.07.892 3.212.892 4.418 0 8.01-3.593 8.01-8.01 0-4.417-3.592-8.01-8.01-8.01z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#06040d] text-gray-300 pt-16 pb-10 border-t border-purple-900/40 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-36 bg-gradient-to-b from-purple-600/15 via-purple-900/5 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content Grid */}
        <Reveal animation="fade-up" duration={750}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.08]">
            
            {/* Column 1: Brand & Bio (Span 4) */}
            <div className="lg:col-span-4 flex flex-col items-start gap-4">
              
              {/* Logo */}
              <a
                href="#home"
                className="inline-block group transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="h-11 sm:h-12 flex items-center">
                  <img
                    src={fullLogo}
                    alt="Shiva Vishwakarma - Software Developer"
                    className="h-full w-auto object-contain drop-shadow-[0_0_18px_rgba(168,85,247,0.5)]"
                  />
                </div>
              </a>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm text-left">
                MERN Stack Developer passionate about crafting performant, scalable, and visually compelling web applications that make an impact.
              </p>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for freelance & full-time roles</span>
              </div>

            </div>

            {/* Column 2: Quick Navigation Links (Span 3) */}
            <div className="lg:col-span-3 flex flex-col items-start text-left">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Quick Navigation
              </h3>
              
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-300 transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 text-purple-500/60 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info (Span 2) */}
            <div className="lg:col-span-2 flex flex-col items-start text-left">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Get In Touch
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm">
                <li>
                  <a
                    href="mailto:sv575014@gmail.com"
                    className="text-gray-400 hover:text-purple-300 transition-colors flex items-center gap-2 group"
                  >
                    <Mail className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="truncate">sv575014@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918112580707"
                    className="text-gray-400 hover:text-purple-300 transition-colors flex items-center gap-2 group"
                  >
                    <Phone className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>+91 8112580707</span>
                  </a>
                </li>
                <li className="text-gray-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Lucknow, India</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Connect (Span 3) */}
            <div className="lg:col-span-3 flex flex-col items-start lg:items-end text-left lg:text-right">
              
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#d946ef] shadow-[0_0_8px_#d946ef]"></span>
                <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                  Connect With Me
                </h3>
              </div>

              <p className="text-xs text-gray-400 mb-4 max-w-xs lg:ml-auto">
                Follow my work, check open source contributions, or hire me for freelance:
              </p>

              {/* Real Brand Social Icons */}
              <div className="flex flex-wrap items-center gap-2.5 lg:justify-end relative z-20">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-300 hover:scale-110 active:scale-95 shadow-md ${social.hoverColor} group cursor-pointer relative z-20`}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>

            </div>

          </div>
        </Reveal>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="font-medium text-gray-300">
              © {new Date().getFullYear()} Shiva Vishwakarma. All rights reserved.
            </p>
            <span className="hidden sm:inline text-gray-600">•</span>
            <p className="flex items-center gap-1.5 text-gray-400">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 hover:border-purple-500/60 hover:bg-purple-600/20 text-purple-300 hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] group"
          >
            <span className="text-xs font-semibold">Back to top</span>
            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-white group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

        </div>

      </div>
    </footer>
  );
}
