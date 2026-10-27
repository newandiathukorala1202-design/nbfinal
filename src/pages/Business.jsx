import React, { useState } from 'react';
import { Briefcase, ExternalLink, ShieldCheck, MapPin, Phone, Play, ChevronLeft, ChevronRight, Star, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ImageCard from '../components/ImageCard';

export default function Business() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const maraLink = "https://portal.mara.gov.au/search-the-register-of-migration-agents/register-of-migration-agent-details/?ContactID=f1d0726f-a352-e311-9402-005056ab0eca";
  const iaaLink = "https://app.mbieregisters.govt.nz/iaa/ui/XP-f01BlWe70DgbPcpCqf50gxtI2dJsVLO6r8O3-FhMyO0mHQkV54y5mF8d-Hkx9od1xj_1J2sU8wygTD0JPhv4aSbeTogIj9MOEBF-AuZGXS8-SS";

  const videos = [
    {
      id: 'akVKJQ_w6TM',
      title: 'Migration & Education Guidance - Eureka Consultants',
      url: 'https://www.youtube.com/watch?v=akVKJQ_w6TM',
      thumb: 'https://img.youtube.com/vi/akVKJQ_w6TM/maxresdefault.jpg'
    },
    {
      id: 'qaC0PKb_pfc',
      title: 'Study & Work Opportunities Overseas',
      url: 'https://www.youtube.com/watch?v=qaC0PKb_pfc',
      thumb: 'https://img.youtube.com/vi/qaC0PKb_pfc/maxresdefault.jpg'
    },
    {
      id: 'oiW2IVoGj7k',
      title: 'Navigating Migration Compliance',
      url: 'https://youtu.be/oiW2IVoGj7k',
      thumb: 'https://img.youtube.com/vi/oiW2IVoGj7k/maxresdefault.jpg'
    },
    {
      id: '0PWrVtIYZ0s',
      title: 'Australia & New Zealand Pathways',
      url: 'https://youtu.be/0PWrVtIYZ0s',
      thumb: 'https://img.youtube.com/vi/0PWrVtIYZ0s/maxresdefault.jpg'
    },
    {
      id: '0J3sBpLWyGg',
      title: 'Client Success Stories & Advisory',
      url: 'https://youtu.be/0J3sBpLWyGg',
      thumb: 'https://img.youtube.com/vi/0J3sBpLWyGg/maxresdefault.jpg'
    },
  ];

  const testimonials = [
    {
      text: "Professional, reliable and highly knowledgeable immigration expert. Helped me secure my visa seamlessly.",
      client: "Client — Migration Services",
      image: "/images/baby.jpg"
    },
    {
      text: "Nuwan guided us through the entire process smoothly and successfully. Highest level of integrity.",
      client: "Client — Australian Education Pathway",
      image: "/images/funny.jpg"
    },
    {
      text: "Highly recommended for immigration and legal consultancy. Clear communication and genuine care.",
      client: "Client — New Zealand Advisory",
      image: "/images/mountain.jpg"
    },
  ];

  const handlePrevVideo = () => {
    setActiveVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setActiveVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-28 pb-20 space-y-24">
      
      {/* EUREKA HERO BANNER - RED AND BLUE THEME */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-businessRed-950 via-navyBlue-950 to-businessRed-900 border-b border-white/10 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
        
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto space-y-4 py-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-businessRed-900/60 border border-businessRed-600/40 text-businessRed-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Briefcase className="w-4 h-4" />
            EUREKA CONSULTANTS
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Managing Director & Founder Profile
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto">
            Empowering students, professionals, and families to pursue opportunities across Australia, New Zealand, and globally with clarity and confidence.
          </p>
        </AnimatedSection>
      </section>

      {/* MD PROFILE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* MD Photo Left */}
              <div className="lg:col-span-5">
                <ImageCard
                  src="/images/dad.jpg"
                  alt="Nuwan Ballantudawa — Founder & Managing Director"
                  caption="Nuwan Ballantudawa — Managing Director"
                  aspectRatio="aspect-[4/5]"
                />
              </div>

              {/* MD Details Right */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-businessRed-400 uppercase tracking-widest">
                    FOUNDER & MANAGING DIRECTOR
                  </span>
                  <h2 className="text-3xl font-extrabold text-white">
                    Nuwan Ballantudawa
                  </h2>
                  <p className="text-xs font-semibold text-slate-300">
                    Registered Migration Agent & Licensed Immigration Adviser
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Nuwan Ballantudawa is the Founder and Managing Director of <strong>Eureka Consultants</strong>, a trusted name in immigration and advisory services. He is a <strong>Registered Migration Agent</strong> and a <strong>Licensed Immigration Adviser</strong> holding a current licence, authorized to provide immigration advice in accordance with the official Code of Conduct.
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  With extensive experience in migration law and international consultancy, he delivers ethical, compliant, and result-driven solutions for individuals and businesses seeking global opportunities.
                </p>

                {/* MARA & IAA License Buttons */}
                <div className="pt-2 flex flex-wrap gap-4">
                  <Button
                    href={maraLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="business"
                    size="md"
                    icon={ShieldCheck}
                  >
                    MARA REGISTRATION
                  </Button>

                  <Button
                    href={iaaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="blue"
                    size="md"
                    icon={ShieldCheck}
                  >
                    IAA LICENCE
                  </Button>
                </div>

              </div>

            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ABOUT EUREKA CONSULTANTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedSection>
          <SectionHeading
            centered
            number="01"
            badge="COMPANY OVERVIEW"
            title="About Eureka Consultants"
            subtitle="Transforming aspirations into reality through nearly two decades of migration expertise."
          />
        </AnimatedSection>

        {/* Logo & Description Row */}
        <AnimatedSection>
          <div className="glass-card p-8 rounded-3xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                At Eureka Consultants, our purpose is to transform aspirations into reality. Whether it’s studying at a world-class university, building a career overseas, or reuniting with loved ones, we believe in empowering individuals and families to pursue opportunities across Australia, New Zealand, and beyond—with confidence and clarity.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                With nearly two decades of industry experience, Eureka Consultants has built a reputation for integrity, professionalism, and results. Our expert team provides personalized guidance, ensuring every client receives a clear pathway toward their international education, migration, and career goals.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <img
                src="/images/eureka.png"
                alt="Eureka Consultants Logo"
                className="max-h-28 object-contain filter drop-shadow-lg"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* 3 Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Official Website */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="p-3 w-fit rounded-2xl bg-businessRed-900/60 text-businessRed-400">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Eureka Consultants</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Transforming aspirations into reality for international education, migration, and career pathways.
                </p>
              </div>
              <Button
                href="https://www.eurekaconsultants.net/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                icon={ExternalLink}
              >
                Visit Website
              </Button>
            </div>
          </AnimatedSection>

          {/* Card 2: Location */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="p-3 w-fit rounded-2xl bg-navyBlue-900/60 text-navyBlue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Our Location</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Delkanda, Nugegoda, Sri Lanka. Easily accessible for personal consultations and advisory meetings.
                </p>
              </div>
              <Button
                href="https://maps.google.com/?q=Delkanda,Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                icon={ExternalLink}
              >
                View on Google Maps
              </Button>
            </div>
          </AnimatedSection>

          {/* Card 3: Contact */}
          <AnimatedSection delay={0.3}>
            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="p-3 w-fit rounded-2xl bg-businessRed-900/60 text-businessRed-400">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Contact Consultancy</h3>
                <p className="text-xs sm:text-sm text-businessRed-400 font-bold">
                  📞 +94 76 691 5213
                </p>
                <p className="text-xs text-slate-300">
                  Stay connected for the latest visa regulations, university intake updates, and consultations.
                </p>
              </div>
              <Button to="/contact" variant="business" size="sm">
                Get in Touch
              </Button>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* BUSINESS INSIGHTS VIDEO CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection>
          <SectionHeading
            centered
            number="02"
            badge="MEDIA & INSIGHTS"
            title="Business Insights & Seminars"
            subtitle="Watch video presentations and advice on international migration and study opportunities."
          />
        </AnimatedSection>

        {/* Carousel Wrapper */}
        <AnimatedSection>
          <div className="relative glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            
            {/* Featured Active Video */}
            <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-navyBlue-950 border border-white/15 shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${videos[activeVideoIndex].id}`}
                title={videos[activeVideoIndex].title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Title & Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
              <div>
                <p className="text-xs font-mono text-businessRed-400 font-bold uppercase">
                  VIDEO {activeVideoIndex + 1} OF {videos.length}
                </p>
                <h4 className="text-base font-bold text-white">
                  {videos[activeVideoIndex].title}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevVideo}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-businessRed-800 transition-colors"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextVideo}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-businessRed-800 transition-colors"
                  aria-label="Next video"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto pt-2">
              {videos.map((vid, idx) => (
                <button
                  key={vid.id}
                  onClick={() => setActiveVideoIndex(idx)}
                  className={`relative aspect-video rounded-xl overflow-hidden border transition-all duration-200 ${
                    activeVideoIndex === idx
                      ? 'border-businessRed-400 ring-2 ring-businessRed-400/40 scale-105'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={vid.thumb} alt={vid.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navyBlue-950/40 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </button>
              ))}
            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <AnimatedSection>
          <SectionHeading
            centered
            number="03"
            badge="CLIENT FEEDBACK"
            title="Client Testimonials"
            subtitle="Trusted by students, professionals, and families seeking worldwide migration."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-businessRed-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-businessRed-400 text-businessRed-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={item.image}
                    alt="Client avatar"
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {item.client}
                    </span>
                    <span className="text-[10px] text-businessRed-400 font-medium">Verified Client</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

    </div>
  );
}
