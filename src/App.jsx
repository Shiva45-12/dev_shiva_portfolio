import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AchievementsEducation from './components/AchievementsEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07050e] text-white selection:bg-purple-600 selection:text-white relative">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me Section (Matching Reference Design) */}
        <About />

        {/* My Skills Section (Matching Reference Design) */}
        <Skills />

        {/* Professional Experience Section (Matching Reference Design) */}
        <Experience />

        {/* Featured Projects Section (Matching Reference Design) */}
        <Projects />

        {/* Achievements & Education Journey Section (Matching Reference Design) */}
        <AchievementsEducation />

        {/* Contact / Get In Touch Section (Matching Reference Design with Custom Frame Background) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
