import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Briefcase, Award, Flag, ShieldCheck, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ImageCard from '../components/ImageCard';

export default function Home() {
  const roleCards = [
    {
      id: 'lawyer',
      number: '01',
      title: 'Legal Practice',
      role: 'Attorney-at-Law',
      description: 'Admitted to the Bar of Sri Lanka in 2005. Specialized in legal counsel, constitutional awareness, and international migration jurisprudence.',
      image: '/images/nb.jpeg',
      link: '/profession',
      btnText: 'Explore Legal Career',
      icon: Scale,
    },
    {
      id: 'business',
      number: '02',
      title: 'Business & Consultancy',
      role: 'Founder & Managing Director',
      description: 'Heading Eureka Consultants as a Registered Migration Agent (MARA & IAA Licensed), transforming global educational & career aspirations.',
      image: '/images/dad.jpg',
      link: '/business',
      btnText: 'Explore Business',
      icon: Briefcase,
    },
    {
      id: 'lions',
      number: '03',
      title: 'Lions Community Service',
      role: 'District Governor (306A2)',
      description: 'Spearheading district-wide humanitarian drives, medical camps, educational scholarships, and youth empowerment projects.',
      image: '/images/lions.jpg',
      link: '/lions',
      btnText: 'Explore Lions Journey',
      icon: Award,
    },
    {
      id: 'politics',
      number: '04',
      title: 'Political Leadership',
      role: 'Founder, Deshapremi Jathika Peramuna',
      description: 'Advocating national sovereignty, social justice, public integrity, and progressive national development policies for Sri Lanka.',
      image: '/images/group.jpg',
      link: '/politics',
      btnText: 'Explore Political Vision',
      icon: Flag,
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
        
        {/* Background Glow Elements */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navyBlue-900/20 pointer-events-none rounded-full opacity-60 blur-3xl" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-darkOrange-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slateGrey-900 border border-slate-700/60 shadow-inner"
              >
                <span className="w-2 h-2 rounded-full bg-darkOrange-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest text-darkOrange-400 uppercase">
                  NUWAN BALLANTUDAWA
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white"
              >
                <span className="text-gradient-orange block">NATIONALIST.</span>
                <span className="text-slate-100 block">SOCIAL WORKER.</span>
                <span className="text-navyBlue-400 block">PROFESSIONAL.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light border-l-2 border-darkOrange-600 pl-4 py-1 bg-white/[0.02]"
              >
                "I owe the society for what I am today. I am a Nationalist, Environmentalist, social worker, proud centralian & Immigration consultant & a lawyer by profession."
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="pt-4 flex flex-wrap items-center gap-4"
              >
                <Button to="/about" variant="primary" size="lg">
                  Explore My Journey
                </Button>
                <Button to="/contact" variant="secondary" size="lg" icon={ExternalLink}>
                  Get in Touch
                </Button>
              </motion.div>

              {/* Quick Credentials Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/10 text-xs"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                  <Scale className="w-5 h-5 text-darkOrange-400 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-100 block">Attorney-at-Law</span>
                    <span className="text-[10px] text-slate-400">Sri Lanka Bar (2005)</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-darkOrange-400 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-100 block">MARA & IAA Agent</span>
                    <span className="text-[10px] text-slate-400">Australia & NZ Licensed</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <Award className="w-5 h-5 text-darkOrange-400 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-100 block">District Governor</span>
                    <span className="text-[10px] text-slate-400">Lions District 306A2</span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-md"
              >
                {/* Decorative Frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-darkOrange-600/30 via-navyBlue-600/30 to-slateGrey-800 opacity-60 blur-xl animate-pulse" />
                
                <div className="relative rounded-3xl overflow-hidden glass-panel border-2 border-white/20 p-2 shadow-2xl">
                  <img
                    src="/images/nb.jpeg"
                    alt="Nuwan Ballantudawa"
                    className="w-full h-[450px] sm:h-[500px] object-cover object-top rounded-2xl filter contrast-105"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slateGrey-950/85 backdrop-blur-md border border-white/15 shadow-xl">
                    <p className="text-xs font-bold text-darkOrange-400 uppercase tracking-widest">
                      Nuwan Ballantudawa
                    </p>
                    <p className="text-sm font-semibold text-white">
                      BA (Hons), Attorney-at-Law, MCom (Griffith)
                    </p>
                  </div>
                </div>

              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl overflow-hidden relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Image Left */}
              <div className="lg:col-span-5 relative">
                <ImageCard
                  src="/images/daham.jpg"
                  alt="Nuwan Ballantudawa Biography"
                  caption="Roots, Education & Values"
                  aspectRatio="aspect-[4/5]"
                />
              </div>

              {/* Text Right */}
              <div className="lg:col-span-7 space-y-6">
                
                <SectionHeading
                  number="01"
                  badge="BIOGRAPHY"
                  title="A Legacy Rooted in Education & Public Service"
                />

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal space-y-4">
                  I am proud to be a product of Sri Lanka’s free education system, a legacy established through the visionary leadership of Dr. C.W.W. Kannangara. I completed my primary education at Wetara Kanitu Viduhala and pursued my secondary education at Wetara Maha Vidyalaya and Central College, Piliyandala.
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  I hold a Bachelor of Arts (Honours) degree in Political Science from the University of Colombo. I was admitted to the Bar as an Attorney-at-Law in 2005 upon completing my legal education at Sri Lanka Law College. In addition to my legal qualifications, I have obtained a Master of Commerce and a Graduate Diploma in International Migration Law from Griffith University, Australia, further strengthening my expertise in the field.
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal italic border-l-2 border-darkOrange-500 pl-4 py-1 text-slate-200">
                  Beyond my professional life, I am a dedicated husband and father, values that continue to guide my personal and professional journey.
                </p>

                <div className="pt-2">
                  <Button to="/about" variant="primary">
                    Read Full Story
                  </Button>
                </div>

              </div>

            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* MAJOR ROLES INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <AnimatedSection>
          <SectionHeading
            centered
            number="02"
            badge="AREAS OF IMPACT"
            title="Four Pillars of Leadership & Service"
            subtitle="Integrating legal counsel, global business consulting, humanitarian community leadership, and political advocacy."
          />
        </AnimatedSection>

        {/* 4 Major Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roleCards.map((card, idx) => (
            <AnimatedSection key={card.id} delay={idx * 0.1}>
              <div className="group relative h-full rounded-3xl overflow-hidden glass-card border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-darkOrange-500/50 transition-all duration-300">
                
                {/* Top Row: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slateGrey-900 border border-slate-700/60 text-darkOrange-400 shadow-md">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-darkOrange-400 bg-darkOrange-600/10 px-3 py-1 rounded-full border border-darkOrange-600/30">
                    AREA {card.number}
                  </span>
                </div>

                {/* Card Visual Thumbnail */}
                <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 bg-slateGrey-900">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slateGrey-950 via-slateGrey-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs font-bold text-darkOrange-300 uppercase tracking-widest block">
                      {card.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-darkOrange-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                <div className="pt-2">
                  <Button to={card.link} variant="outline" size="sm" className="w-full">
                    {card.btnText}
                  </Button>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </section>

      {/* QUICK SUMMARY CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl bg-gradient-to-r from-slateGrey-900 via-navyBlue-950 to-slateGrey-900 p-8 sm:p-12 border border-slate-700/60 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-mono font-bold text-darkOrange-400 uppercase tracking-widest">
                DIRECT CONTACT & CONSULTATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Require Migration Advice or Professional Representation?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Get in touch with Attorney-at-Law & Licensed Migration Adviser Nuwan Ballantudawa.
              </p>
            </div>

            <div className="shrink-0">
              <Button to="/contact" variant="primary" size="lg">
                Send a Message
              </Button>
            </div>

          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
