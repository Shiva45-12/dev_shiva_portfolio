import React from 'react';
import { ArrowRight } from 'lucide-react';
import shivaImg from '../assets/shiva.png';

export default function About() {
  return (
    <section id="about" className="relative bg-[#fcfaff] text-[#0d0726] pt-16 sm:pt-20 pb-20 sm:pb-28 overflow-hidden">
      
      {/* Top Wave: Smooth transition curve from Dark Hero to Light Surface */}
      <div className="absolute top-0 inset-x-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[98%]">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-20 lg:h-24 object-fill"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C420,95 1020,95 1440,0 L1440,90 L0,90 Z"
            fill="#fcfaff"
          />
        </svg>
      </div>

      {/* Subtle Purple Ambient Lighting in Background */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-purple-200/40 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Shiva Portrait Card with Purple Glow & Signature */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[36px] sm:rounded-[44px] p-2.5 sm:p-3.5 bg-gradient-to-br from-purple-200/80 via-purple-100/50 to-white/90 shadow-[0_25px_50px_rgba(147,51,234,0.14)] border border-purple-200/70 overflow-hidden flex items-end justify-center group">
              
              {/* Inner Decorative Background Curves */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/20 via-purple-200/30 to-white/60 -z-10"></div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-300/30 rounded-full blur-2xl -z-10"></div>
              <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-purple-300/25 to-transparent -z-10"></div>

              {/* Real Photo of Shiva */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-b-[28px] sm:rounded-b-[36px]">
                <img
                  src={shivaImg}
                  alt="Shiva Vishwakarma"
                  className="w-auto h-[95%] sm:h-[97%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Signature Badge: "Shiva V." at bottom right */}
              <div className="absolute right-3 sm:right-5 bottom-3 sm:bottom-4 z-20 px-4 sm:px-5 py-1.5 sm:py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_6px_20px_rgba(0,0,0,0.08)] flex items-center justify-center">
                <span className="font-handwriting text-2xl sm:text-3xl font-bold text-gray-800 tracking-wider">
                  Shiva V.
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6 text-left order-2 lg:order-2">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/90 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.6)]"></span>
              <span className="text-xs sm:text-sm font-bold text-purple-900 tracking-wide">
                About Me
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#0d0726] tracking-tight leading-[1.15]">
              Passionate Developer <br className="hidden sm:inline" />
              & Problem Solver
            </h2>

            {/* Paragraph Text */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal max-w-xl">
              I'm <strong className="font-bold text-gray-900">Shiva Vishwakarma</strong>, a MERN Stack Developer with{' '}
              <strong className="font-bold text-gray-900">1.5+ years of experience</strong> in building scalable web applications. I love turning ideas into real products and constantly learning new technologies.
            </p>

            {/* Learn More Button */}
            <div className="pt-2 sm:pt-4">
              <a
                href="#skills"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-white purple-gradient-btn group shadow-[0_10px_25px_rgba(147,51,234,0.35)]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
