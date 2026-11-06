import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiTailwindcss,
  SiFlutter,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

export default function Skills() {
  const skills = [
    {
      name: 'React',
      icon: SiReact,
      color: '#00D8FF',
      bgGlow: 'rgba(0, 216, 255, 0.12)',
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: '#000000',
      bgGlow: 'rgba(0, 0, 0, 0.08)',
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '#339933',
      bgGlow: 'rgba(51, 153, 51, 0.12)',
    },
    {
      name: 'Express.js',
      icon: SiExpress,
      color: '#111827',
      bgGlow: 'rgba(17, 24, 39, 0.08)',
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248',
      bgGlow: 'rgba(71, 162, 72, 0.12)',
    },
    {
      name: 'NestJS',
      icon: SiNestjs,
      color: '#E0234E',
      bgGlow: 'rgba(224, 35, 78, 0.12)',
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#06B6D4',
      bgGlow: 'rgba(6, 182, 212, 0.12)',
    },
    {
      name: 'Flutter',
      icon: SiFlutter,
      color: '#02569B',
      bgGlow: 'rgba(2, 86, 155, 0.12)',
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
      bgGlow: 'rgba(247, 223, 30, 0.15)',
      isCustomBox: true,
      boxBg: '#F7DF1E',
      boxTextColor: '#000000',
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '#3178C6',
      bgGlow: 'rgba(49, 120, 198, 0.15)',
      isCustomBox: true,
      boxBg: '#3178C6',
      boxTextColor: '#FFFFFF',
    },
    {
      name: 'Git',
      icon: SiGit,
      color: '#F05032',
      bgGlow: 'rgba(240, 80, 50, 0.12)',
    },
    {
      name: 'GitHub',
      icon: SiGithub,
      color: '#181717',
      bgGlow: 'rgba(24, 23, 23, 0.08)',
    },
    {
      name: 'VS Code',
      icon: TbBrandVscode,
      color: '#007ACC',
      bgGlow: 'rgba(0, 122, 204, 0.12)',
    },
    {
      name: 'Postman',
      icon: SiPostman,
      color: '#FF6C37',
      bgGlow: 'rgba(255, 108, 55, 0.12)',
    },
    {
      name: 'REST APIs',
      customSvg: () => (
        <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
          <path
            d="M49 46H17C12.0294 46 8 41.9706 8 37C8 32.3789 11.4883 28.5721 16.0076 28.0583C16.9118 20.1601 23.6334 14 31.8 14C38.6508 14 44.5244 18.398 46.7388 24.622C51.8706 25.5902 56 30.0886 56 35.5C56 41.299 51.299 46 45.5 46H49Z"
            fill="#0284C7"
          />
          <path
            d="M32 28C29.7909 28 28 29.7909 28 32C28 33.8244 29.2223 35.3644 30.875 35.8291V38.125C30.875 38.7463 31.3787 39.25 32 39.25C32.6213 39.25 33.125 38.7463 33.125 38.125V35.8291C34.7777 35.3644 36 33.8244 36 32C36 29.7909 34.2091 28 32 28Z"
            fill="white"
          />
        </svg>
      ),
      color: '#0284C7',
      bgGlow: 'rgba(2, 132, 199, 0.12)',
    },
  ];

  return (
    <section id="skills" className="relative bg-[#fcfaff] text-[#0d0726] py-16 sm:py-24 overflow-hidden">
      
      {/* Decorative Dot Matrix Pattern on the Right */}
      <div
        className="absolute top-10 right-4 sm:right-10 w-64 sm:w-80 h-96 pointer-events-none opacity-40 -z-10"
        style={{
          backgroundImage: 'radial-gradient(#c084fc 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 mb-10 sm:mb-14">
          
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/90 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.6)]"></span>
            <span className="text-xs sm:text-sm font-bold text-purple-900 tracking-wide">
              My Skills
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d0726] tracking-tight">
            Technologies I Work With
          </h2>

        </div>

        {/* Skills Cards Grid: 5 cols on lg, 3 on sm/md, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative bg-white/95 rounded-2xl p-4 sm:p-6 shadow-[0_10px_25px_rgba(15,10,35,0.04)] hover:shadow-[0_16px_35px_rgba(147,51,234,0.16)] border border-purple-100/70 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-center gap-3 sm:gap-4 min-h-[120px] sm:min-h-[140px] cursor-pointer"
              >
                {/* Ambient Soft Glow on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{ backgroundColor: skill.bgGlow }}
                ></div>

                {/* Tech Icon Container */}
                <div className="h-10 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {skill.customSvg ? (
                    <skill.customSvg />
                  ) : skill.isCustomBox ? (
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center font-bold text-sm sm:text-base shadow-sm"
                      style={{ backgroundColor: skill.boxBg, color: skill.boxTextColor }}
                    >
                      {skill.name === 'JavaScript' ? 'JS' : 'TS'}
                    </div>
                  ) : (
                    <Icon className="w-9 h-9 sm:w-11 sm:h-11" style={{ color: skill.color }} />
                  )}
                </div>

                {/* Skill Name */}
                <span className="text-xs sm:text-sm font-bold text-gray-800 tracking-tight text-center">
                  {skill.name}
                </span>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
