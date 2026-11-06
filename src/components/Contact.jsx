import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import contactBg from '../assets/contact-bg-full.png';
import contactSphere from '../assets/contact-sphere.png';
import Reveal from './Reveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        throw new Error(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      setIsSubmitting(false);
      setErrorMessage(err.message || 'Failed to send message. Please try again.');
      setTimeout(() => setErrorMessage(''), 6000);
    }
  };

  const scrollToForm = () => {
    const input = document.getElementById('contact-name-input');
    if (input) input.focus();
  };

  return (
    <section
      id="contact"
      className="relative bg-[#faf7fd] text-white pt-2 sm:pt-4 pb-16 sm:pb-24 overflow-hidden w-full"
    >
      {/* Decorative Dot Matrix on Far Left */}
      <div
        className="absolute top-6 left-2 sm:left-6 w-52 sm:w-64 h-80 pointer-events-none opacity-40 -z-10"
        style={{
          backgroundImage: 'radial-gradient(#c084fc 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
        }}
      ></div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-8 w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-indigo-100/35 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      {/* FULL WIDTH WRAPPER across screen */}
      <div className="w-full max-w-[1550px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* DESKTOP BANNER VIEW (lg and up) - Perfect Ribbon Interior */}
        {/* ============================================================== */}
        <Reveal animation="zoom-in" duration={800} className="hidden lg:block relative w-full aspect-[1024/370] select-none">
          
          {/* Authentic 1024x370 Background Image with 3D Sphere, Flares & Dark Ribbon */}
          <img
            src={contactBg}
            alt="Contact Banner"
            className="absolute inset-0 w-full h-full object-fill pointer-events-none -z-0 drop-shadow-[0_20px_50px_rgba(120,40,200,0.22)]"
          />

          {/* Interactive Content Grid strictly confined inside the dark ribbon bounds */}
          <div className="absolute top-[26%] bottom-[35%] left-[20.5%] right-[8%] flex items-center justify-between z-10">
            
            {/* Column 1: Left CTA & Title */}
            <div className="w-[30%] flex flex-col items-start justify-center gap-1 xl:gap-2 text-left">
              
              {/* Tag Pill */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#d946ef] shadow-[0_0_8px_#d946ef]"></span>
                <span className="text-[10px] xl:text-[11px] font-semibold text-purple-200 tracking-wide">
                  Get In Touch
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-base xl:text-xl 2xl:text-2xl font-extrabold text-white tracking-tight leading-tight">
                Let's Work Together
              </h2>

              {/* Subtitle */}
              <p className="text-[10px] xl:text-[11px] text-gray-300 font-normal leading-relaxed max-w-[250px]">
                Have a project in mind or want to discuss opportunities? Feel free to reach out!
              </p>

              {/* Action Button */}
              <button
                type="button"
                onClick={scrollToForm}
                className="mt-0.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#8b2cf5] via-[#9333ea] to-[#c026d3] text-white text-[10px] xl:text-xs font-bold shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.85)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Send Message</span>
                <ArrowRight className="w-3 h-3 xl:w-3.5 xl:h-3.5" />
              </button>

            </div>

            {/* Column 2: Middle Contact Details with Vertical Dividers */}
            <div className="w-[34%] flex items-center justify-around px-2">
              
              {/* Item 1: Email */}
              <a
                href="mailto:sv575014@gmail.com"
                className="group flex flex-col items-center text-center p-1.5 rounded-xl hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center text-[#e879f9] group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 xl:w-5 xl:h-5" />
                </div>
                <span className="text-[9px] xl:text-[10px] font-bold text-gray-400 mt-0.5 uppercase tracking-widest">
                  Email
                </span>
                <span className="text-[10px] xl:text-xs font-bold text-white group-hover:text-purple-300 transition-colors mt-0.5 whitespace-nowrap">
                  sv575014@gmail.com
                </span>
              </a>

              {/* Vertical Divider */}
              <div className="w-[1px] h-10 xl:h-12 bg-gradient-to-b from-transparent via-purple-500/35 to-transparent"></div>

              {/* Item 2: Call */}
              <a
                href="tel:+918112580707"
                className="group flex flex-col items-center text-center p-1.5 rounded-xl hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center text-[#c026d3] group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 xl:w-5 xl:h-5" />
                </div>
                <span className="text-[9px] xl:text-[10px] font-bold text-gray-400 mt-0.5 uppercase tracking-widest">
                  Call
                </span>
                <span className="text-[10px] xl:text-xs font-bold text-white group-hover:text-purple-300 transition-colors mt-0.5 whitespace-nowrap">
                  +91 8112580707
                </span>
              </a>

              {/* Vertical Divider */}
              <div className="w-[1px] h-10 xl:h-12 bg-gradient-to-b from-transparent via-purple-500/35 to-transparent"></div>

              {/* Item 3: Location */}
              <div className="group flex flex-col items-center text-center p-1.5">
                <div className="w-7 h-7 xl:w-8 xl:h-8 flex items-center justify-center text-[#a855f7] group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 xl:w-5 xl:h-5" />
                </div>
                <span className="text-[9px] xl:text-[10px] font-bold text-gray-400 mt-0.5 uppercase tracking-widest">
                  Location
                </span>
                <span className="text-[10px] xl:text-xs font-bold text-white mt-0.5 whitespace-nowrap">
                  Lucknow, India
                </span>
              </div>

            </div>

            {/* Column 3: Right Contact Form */}
            <div className="w-[33%] pl-2 xl:pl-3 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 xl:gap-2">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-2 gap-1.5 xl:gap-2">
                  <input
                    id="contact-name-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-black/60 border border-purple-500/35 rounded-lg px-2.5 py-1 text-[10px] xl:text-xs text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 backdrop-blur-md transition-all shadow-inner disabled:opacity-60"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-black/60 border border-purple-500/35 rounded-lg px-2.5 py-1 text-[10px] xl:text-xs text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 backdrop-blur-md transition-all shadow-inner disabled:opacity-60"
                  />
                </div>

                {/* Message Field */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Your Message..."
                  required
                  disabled={isSubmitting}
                  className="w-full bg-black/60 border border-purple-500/35 rounded-lg px-2.5 py-1 text-[10px] xl:text-xs text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 backdrop-blur-md transition-all resize-none shadow-inner disabled:opacity-60"
                ></textarea>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="text-[10px] text-red-300 bg-red-950/60 border border-red-500/40 rounded px-2 py-0.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-red-400 flex-shrink-0" />
                    <span className="truncate">{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-1.5 xl:py-2 rounded-lg xl:rounded-xl bg-gradient-to-r from-[#7e22ce] via-[#9333ea] to-[#c026d3] text-white text-[10px] xl:text-xs font-bold shadow-[0_0_20px_rgba(168,85,247,0.55)] hover:shadow-[0_0_30px_rgba(168,85,247,0.9)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-1.5">
                      <Loader2 className="w-3 h-3 xl:w-3.5 xl:h-3.5 animate-spin" />
                      <span>Sending Message...</span>
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-1.5 text-green-300">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Sent to Shiva!
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-3 h-3 xl:w-3.5 xl:h-3.5" />
                    </>
                  )}
                </button>

              </form>
            </div>

          </div>

        </Reveal>

        {/* ============================================================== */}
        {/* MOBILE & TABLET VIEW (< lg) - Luxury Stacked Responsive Card */}
        {/* ============================================================== */}
        <Reveal animation="fade-up" duration={800} className="lg:hidden">
          <div className="relative rounded-3xl bg-[#090710] border border-purple-500/30 p-6 sm:p-8 shadow-[0_20px_50px_rgba(15,5,30,0.5)] overflow-hidden text-left max-w-2xl mx-auto">
            
            {/* Subtle Ambient Glows */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-600/15 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header with 3D Sphere */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <img
                  src={contactSphere}
                  alt=""
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] animate-sphere-float"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#d946ef] shadow-[0_0_8px_#d946ef]"></span>
                  <span className="text-xs font-medium text-purple-200">Get In Touch</span>
                </div>
                <h2 className="text-2xl font-extrabold text-white tracking-tight">
                  Let's Work Together
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>

            {/* 3 Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              
              {/* Email */}
              <a
                href="mailto:sv575014@gmail.com"
                className="p-3 rounded-2xl bg-white/[0.03] border border-purple-500/20 flex items-center gap-3 hover:bg-white/[0.06] transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-[#e879f9]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] text-gray-400 font-semibold uppercase">Email</div>
                  <div className="text-xs font-bold text-white truncate">sv575014@gmail.com</div>
                </div>
              </a>

              {/* Call */}
              <a
                href="tel:+918112580707"
                className="p-3 rounded-2xl bg-white/[0.03] border border-purple-500/20 flex items-center gap-3 hover:bg-white/[0.06] transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-[#c026d3]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-semibold uppercase">Call</div>
                  <div className="text-xs font-bold text-white">+91 8112580707</div>
                </div>
              </a>

              {/* Location */}
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-purple-500/20 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-[#a855f7]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-semibold uppercase">Location</div>
                  <div className="text-xs font-bold text-white">Lucknow, India</div>
                </div>
              </div>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-black/50 border border-purple-500/30 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 disabled:opacity-60"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-black/50 border border-purple-500/30 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 disabled:opacity-60"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Your Message..."
                required
                disabled={isSubmitting}
                className="w-full bg-black/50 border border-purple-500/30 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none disabled:opacity-60"
              ></textarea>

              {/* Error message */}
              {errorMessage && (
                <div className="text-xs text-red-300 bg-red-950/60 border border-red-500/40 rounded-xl p-2.5 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7e22ce] via-[#9333ea] to-[#c026d3] text-white text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(168,85,247,0.55)] hover:shadow-[0_0_30px_rgba(168,85,247,0.85)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-1.5 text-green-300">
                    <CheckCircle2 className="w-4 h-4" /> Message Sent Successfully to Shiva!
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
