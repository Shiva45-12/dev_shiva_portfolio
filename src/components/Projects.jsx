import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingCart,
  GraduationCap,
  Zap,
  Droplet,
  Users,
  Briefcase,
} from 'lucide-react';
import ecommerceImg from '../assets/project-ecommerce.jpg';
import collegeImg from '../assets/project-college.jpg';
import evImg from '../assets/project-ev.jpg';
import pathologyImg from '../assets/project-pathology.jpg';
import crmImg from '../assets/project-crm.jpg';
import consultancyImg from '../assets/project-consultancy.jpg';
import Reveal from './Reveal';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Online Shopping Solution',
      image: ecommerceImg,
      icon: ShoppingCart,
      iconBg: 'bg-pink-500/25 border-pink-400/40 text-pink-300',
      link: 'https://bookvardi.in/',
    },
    {
      id: 2,
      title: 'Polytechnic ERP',
      category: 'College Management SaaS',
      image: collegeImg,
      icon: GraduationCap,
      iconBg: 'bg-white/20 border-white/40 text-white',
      link: 'https://digicampuspro.com/',
    },
    {
      id: 3,
      title: 'Bharat EV Prime',
      category: 'EV Charging Platform',
      image: evImg,
      icon: Zap,
      iconBg: 'bg-purple-500/25 border-purple-400/40 text-purple-300',
      link: 'https://ev-prime-admin-panel.vercel.app/',
    },
    {
      id: 4,
      title: 'Pathology Management',
      category: 'Lab Management System',
      image: pathologyImg,
      icon: Droplet,
      iconBg: 'bg-sky-500/25 border-sky-400/40 text-sky-300',
      link: 'https://laboindia.com/',
    },
    {
      id: 5,
      title: 'CRM & HRMS',
      category: 'Business Management',
      image: crmImg,
      icon: Users,
      iconBg: 'bg-violet-500/25 border-violet-400/40 text-violet-300',
      link: 'https://chaya-admin-panel.vercel.app/',
    },
    {
      id: 6,
      title: 'KTR Consultants',
      category: 'Consultancy Website',
      image: consultancyImg,
      icon: Briefcase,
      iconBg: 'bg-slate-400/25 border-slate-300/40 text-slate-200',
      link: 'http://ktrconsultants.in/',
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-[#fcfaff] text-[#0d0726] py-16 sm:py-24 border-t border-purple-100/60 overflow-hidden"
    >
      {/* Decorative Dot Matrix on Left */}
      <div
        className="absolute top-12 left-4 sm:left-10 w-64 h-80 pointer-events-none opacity-40 -z-10"
        style={{
          backgroundImage: 'radial-gradient(#c084fc 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
        }}
      ></div>

      {/* Ambient Radial Lights */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-indigo-100/35 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card Container */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-white/80 border border-purple-100/90 shadow-[0_20px_50px_rgba(15,10,35,0.06)] p-6 sm:p-8 lg:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading, Bio, Button (Cols 1-4) */}
            <div className="lg:col-span-4 flex flex-col items-start gap-4 sm:gap-5 text-left">
              
              {/* Pill Tag */}
              <Reveal animation="fade-up" delay={50}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/90 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.6)]"></span>
                  <span className="text-xs sm:text-sm font-bold text-purple-900 tracking-wide">
                    My Projects
                  </span>
                </div>
              </Reveal>

              {/* Title */}
              <Reveal animation="fade-up" delay={150}>
                <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#0d0726] tracking-tight leading-[1.12]">
                  Featured Projects
                </h2>
              </Reveal>

              {/* Description */}
              <Reveal animation="fade-up" delay={250}>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal max-w-sm">
                  A collection of my best work showcasing skills and creativity.
                </p>
              </Reveal>

              {/* View All Projects Button */}
              <Reveal animation="fade-up" delay={350} className="pt-2 sm:pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-white purple-gradient-btn group shadow-[0_10px_25px_rgba(147,51,234,0.35)]"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>
              </Reveal>

            </div>

            {/* Right Column: 6 Project Cards Grid (2 rows x 3 cols on desktop) (Cols 5-12) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {projects.map((project, index) => (
                  <Reveal
                    key={project.id}
                    animation="zoom-in"
                    delay={Math.min(index * 90, 500)}
                    duration={700}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${project.title} (${project.link})`}
                      className="group relative block rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_10px_25px_rgba(15,10,35,0.08)] hover:shadow-[0_20px_45px_rgba(147,51,234,0.25)] border border-purple-100/80 hover:border-purple-300/80 transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gray-900"
                    >
                      {/* Project Preview Image (High-Res 16:9 Aspect) */}
                      <div className="relative w-full h-44 sm:h-48 lg:h-52 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                        />

                        {/* Ambient Image Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

                        {/* Glassmorphic Overlay Bar at Bottom */}
                        <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 bg-black/60 backdrop-blur-md border-t border-white/10 flex items-center justify-between gap-2.5 transition-colors group-hover:bg-black/80">
                          
                          {/* Left: Icon & Text */}
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center flex-shrink-0 shadow-md ${project.iconBg} transition-transform duration-300 group-hover:scale-110`}
                            >
                              <project.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                            </div>
                            <div className="truncate text-left">
                              <h3 className="font-extrabold text-xs sm:text-sm text-white truncate leading-tight group-hover:text-purple-300 transition-colors">
                                {project.title}
                              </h3>
                              <p className="text-[10px] sm:text-xs text-gray-300/85 font-medium truncate mt-0.5">
                                {project.category}
                              </p>
                            </div>
                          </div>

                          {/* Right: Interactive Arrow Button */}
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0 text-white group-hover:bg-purple-600 group-hover:border-purple-400 group-hover:scale-110 transition-all duration-300 shadow-sm">
                            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>

                        </div>

                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
