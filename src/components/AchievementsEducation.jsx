import React from 'react';
import trophyImg from '../assets/trophy-clean.png';
import ribbonImg from '../assets/education-ribbon.png';
import Reveal from './Reveal';

export default function AchievementsEducation() {
  const educationList = [
    {
      degree: 'B.Tech (IT) – 3rd Semester (Ongoing)',
      institution: 'AKTU, Uttar Pradesh',
      dotColor: 'bg-[#9333ea] shadow-[0_0_8px_rgba(147,51,234,0.6)]',
    },
    {
      degree: 'Diploma in Computer Science Engineering',
      institution: 'GPS Kanpur Dehat, UP – 69%',
      dotColor: 'bg-[#9333ea] shadow-[0_0_8px_rgba(147,51,234,0.6)]',
    },
    {
      degree: '12th – Janta Janardan Inter College',
      institution: 'Bhurkura, Mirzapur – 77%',
      dotColor: 'bg-[#581c87]',
    },
    {
      degree: '10th – Janta Janardan Inter College',
      institution: 'Bhurkura – 84%',
      dotColor: 'bg-[#3b0764]',
    },
  ];

  return (
    <section className="relative bg-[#faf7fd] text-[#0d0726] pt-16 sm:pt-24 pb-8 sm:pb-12 border-t border-purple-100/80 overflow-hidden">
      
      {/* Decorative Dot Matrix on Far Left */}
      <div
        className="absolute top-10 left-2 sm:left-8 w-52 sm:w-64 h-80 pointer-events-none opacity-45 -z-10"
        style={{
          backgroundImage: 'radial-gradient(#c084fc 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
        }}
      ></div>

      {/* Decorative Fluid Wavy Ribbons on Far Right */}
      <div className="absolute top-0 right-0 h-full w-48 sm:w-80 pointer-events-none opacity-40 select-none overflow-hidden -z-10 flex items-center justify-end">
        <img
          src={ribbonImg}
          alt=""
          className="h-full w-full object-cover object-left opacity-75 mix-blend-multiply"
        />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-purple-200/25 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two Matching Rounded Cards Side by Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Achievements */}
          <Reveal animation="zoom-in" duration={750} className="h-full">
            <div
              id="achievements"
              className="h-full relative rounded-3xl sm:rounded-[36px] bg-white border border-[#efe9f8] shadow-[0_15px_45px_rgba(20,10,45,0.04)] p-6 sm:p-8 lg:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden group hover:shadow-[0_20px_55px_rgba(147,51,234,0.14)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Subtle Inner Glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

              {/* Left Content */}
              <div className="flex flex-col items-start text-left z-10 flex-1">
                
                {/* Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200/60 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.7)]"></span>
                  <span className="text-xs sm:text-sm font-bold text-purple-900 tracking-wide">
                    Achievements
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0e0725] tracking-tight leading-[1.2] mt-3 group-hover:text-purple-950 transition-colors">
                  CoderWar 3.0 Winner
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4b4363] leading-relaxed max-w-[290px] font-medium mt-2">
                  Secured 1st Position in CoderWar 3.0 Website Design Competition.
                </p>

              </div>

              {/* Right: 3D Golden Trophy on Podium with Laurel Wreath */}
              <div className="w-full sm:w-auto flex justify-center sm:justify-end z-10 flex-shrink-0">
                <div className="relative w-48 sm:w-52 md:w-56 aspect-[215/175] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:rotate-1">
                  <img
                    src={trophyImg}
                    alt="CoderWar 3.0 Winner Trophy"
                    className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(217,119,6,0.35)]"
                  />
                </div>
              </div>

            </div>
          </Reveal>

          {/* Card 2: Education */}
          <Reveal animation="zoom-in" delay={150} duration={750} className="h-full">
            <div
              id="education"
              className="h-full relative rounded-3xl sm:rounded-[36px] bg-white border border-[#efe9f8] shadow-[0_15px_45px_rgba(20,10,45,0.04)] p-6 sm:p-8 lg:p-9 flex flex-col items-start gap-4 overflow-hidden group hover:shadow-[0_20px_55px_rgba(147,51,234,0.14)] hover:-translate-y-1 transition-all duration-300 text-left"
            >
              {/* Subtle purple background ambience */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-100/30 to-transparent pointer-events-none -z-10"></div>

              {/* Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200/60 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.7)]"></span>
                <span className="text-xs sm:text-sm font-bold text-purple-900 tracking-wide">
                  Education
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0e0725] tracking-tight leading-[1.2] mt-1 group-hover:text-purple-950 transition-colors">
                My Education Journey
              </h2>

              {/* Vertical Education Timeline */}
              <div className="relative pl-6 space-y-4 sm:space-y-4.5 pt-1 w-full">
                
                {/* Purple Track Line from 1st dot to 4th dot */}
                <div className="absolute left-[7px] top-2.5 bottom-3.5 w-[2px] bg-gradient-to-b from-[#9333ea] via-[#7e22ce] to-[#3b0764] rounded-full"></div>

                {educationList.map((item, idx) => (
                  <div key={idx} className="relative group/item flex items-start gap-3">
                    
                    {/* Glowing Node Dot with white border */}
                    <div
                      className={`absolute -left-[24px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white transition-transform duration-300 group-hover/item:scale-130 ${item.dotColor}`}
                    ></div>

                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#0e0725] leading-snug group-hover/item:text-purple-700 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#6b6280] font-medium mt-0.5">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
