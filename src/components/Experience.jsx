import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import digicodersBuilding from '../assets/digicoders-building.jpg';
import digicoderIcon from '../assets/digicoder-icon.png';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#fcfaff] text-[#0d0726] py-16 sm:py-24 border-t border-purple-100/60 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-100/35 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Horizontal Experience Banner */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-white/80 border border-purple-100/90 shadow-[0_20px_50px_rgba(15,10,35,0.06)] p-6 sm:p-8 lg:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Column 1: Info & Company Badge (Cols 1-5) */}
            <div className="lg:col-span-5 flex flex-col items-start gap-4 sm:gap-5 text-left">
              
              {/* Pill Tag */}
              <Reveal animation="fade-up" delay={50}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/90 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.6)]"></span>
                  <span className="text-xs sm:text-sm font-bold text-purple-900 tracking-wide">
                    My Experience
                  </span>
                </div>
              </Reveal>

              {/* Heading */}
              <Reveal animation="fade-up" delay={150}>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0d0726] tracking-tight leading-[1.15]">
                  Professional Experience
                </h2>
              </Reveal>

              {/* Description */}
              <Reveal animation="fade-up" delay={250}>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal max-w-md">
                  Currently working at <strong className="font-bold text-gray-900">DigiCoder Technology Pvt. Ltd.</strong> where I contribute to building modern web applications and solving real-world problems.
                </p>
              </Reveal>

              {/* Learn Experience Button */}
              <Reveal animation="fade-up" delay={350} className="pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-white purple-gradient-btn group shadow-[0_10px_25px_rgba(147,51,234,0.35)]"
                >
                  <span>Learn Experience</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>
              </Reveal>

              {/* DigiCoder Company Badge */}
              <Reveal animation="fade-up" delay={450} className="w-full max-w-sm">
                <div className="w-full mt-1 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-purple-100/80 shadow-[0_4px_16px_rgba(15,10,35,0.04)] hover:shadow-[0_8px_24px_rgba(147,51,234,0.1)] transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50/80 flex items-center justify-center p-2 flex-shrink-0">
                      <img src={digicoderIcon} alt="DigiCoder Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-gray-950 leading-tight">DigiCoder</h3>
                      <p className="text-xs text-gray-500 font-semibold">Technology Pvt. Ltd.</p>
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-purple-50 flex items-center justify-between text-xs">
                    <span className="font-bold text-purple-900">MERN Stack Developer</span>
                    <span className="text-gray-500 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      Lucknow, India
                    </span>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* Column 2: Timeline on Clean Background in the Middle (Cols 6-8) */}
            <div className="lg:col-span-3 lg:border-l lg:border-purple-200/80 lg:pl-6 text-left py-2">
              <Reveal animation="fade-up" delay={250}>
                <div className="relative pl-7 space-y-7 sm:space-y-8">
                  
                  {/* Purple Vertical Track Line */}
                  <div className="absolute left-[7px] top-2.5 bottom-2.5 w-[2.5px] bg-purple-500/80 rounded-full"></div>

                  {/* Node 1 */}
                  <div className="relative group cursor-default">
                    <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-[3px] border-white shadow-[0_0_10px_rgba(147,51,234,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0d0726] leading-snug group-hover:text-purple-700 transition-colors">
                      MERN Stack Developer
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium">
                      (DigiCoder Technology Pvt. Ltd.)
                    </p>
                    <p className="text-xs text-purple-700 font-semibold mt-0.5">
                      2025 – Present
                    </p>
                  </div>

                  {/* Node 2 */}
                  <div className="relative group cursor-default">
                    <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-[3px] border-white shadow-[0_0_10px_rgba(147,51,234,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0d0726] leading-snug group-hover:text-purple-700 transition-colors">
                      Summer Training
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium">
                      (DigiCoder, Lucknow)
                    </p>
                  </div>

                  {/* Node 3 */}
                  <div className="relative group cursor-default">
                    <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-[3px] border-white shadow-[0_0_10px_rgba(147,51,234,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0d0726] leading-snug group-hover:text-purple-700 transition-colors">
                      Internship / Training
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium">
                      (MERN Stack)
                    </p>
                  </div>

                </div>
              </Reveal>
            </div>

            {/* Column 3: DigiCoders Building Photo (Cols 9-12) - Clean, Unblocked */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <Reveal animation="zoom-in" delay={300} duration={800} className="w-full">
                <div className="relative w-full h-[300px] sm:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(15,10,35,0.1)] border border-purple-100 group">
                  <img
                    src={digicodersBuilding}
                    alt="DigiCoders Technologies Building, Lucknow"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                </div>
              </Reveal>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
