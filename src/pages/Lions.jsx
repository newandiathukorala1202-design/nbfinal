import React, { useState } from 'react';
import { Award, Heart, Users, BookOpen, Trees, Eye } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import ModalLightbox from '../components/ModalLightbox';

export default function Lions() {
  const [selectedImage, setSelectedImage] = useState(null);

  const lionsTimeline = [
    {
      date: 'Beginning',
      title: 'Joining the Lions Movement',
      subtitle: 'Active Lions Club Member',
      description: 'Began the journey with Lions Clubs International driven by passion for humanitarian service, leadership development, and social welfare.',
    },
    {
      date: 'Service Leadership',
      title: 'Early Community Contributions',
      subtitle: 'Project Chair, Secretary & President',
      description: 'Led welfare campaigns, medical camps, blood donation drives, educational support, and youth empowerment initiatives across local communities.',
    },
    {
      date: 'Governor Year',
      title: 'District Governor — District 306A2',
      subtitle: 'Immediate Multiple Council Chairperson',
      description: 'Spearheaded district-wide humanitarian campaigns, uniting clubs across Sri Lanka for healthcare access, environmental protection, and youth leadership.',
    },
  ];

  const positions = [
    { title: 'Club Member', text: 'Active foundation in grassroots community welfare.' },
    { title: 'Project Chairperson', text: 'Led impactful humanitarian and healthcare projects.' },
    { title: 'Club Secretary', text: 'Managed club administration and district coordination.' },
    { title: 'Club President', text: 'Directed strategic club growth and community outreach.' },
    { title: 'District Governor (306A2)', text: 'Expanded Lions district leadership and service impact.' },
  ];

  const services = [
    {
      icon: Heart,
      title: 'Healthcare Programs',
      description: 'Organized islandwide medical camps, blood donation drives, vision screening, and health awareness campaigns.',
    },
    {
      icon: BookOpen,
      title: 'Educational Support',
      description: 'Provided scholarships, school supplies, and educational infrastructure support for underprivileged children.',
    },
    {
      icon: Trees,
      title: 'Environmental Initiatives',
      description: 'Conducted tree planting drives, environmental conservation projects, and community sustainability initiatives.',
    },
    {
      icon: Users,
      title: 'Youth Empowerment',
      description: 'Led youth leadership workshops, motivational seminars, and Leo club mentoring programs.',
    },
  ];

  const galleryImages = [
    { src: '/images/lions.jpg', caption: 'Lions District Governor Leadership Event' },
    { src: '/images/daham.jpg', caption: 'Community Service & Welfare Initiatives' },
    { src: '/images/group.jpg', caption: 'District Lions Conference & Delegation' },
    { src: '/images/group2.jpg', caption: 'Humanitarian Outreach & Project Team' },
    { src: '/images/mountain.jpg', caption: 'Environmental & Community Field Projects' },
    { src: '/images/eureka.png', caption: 'Lions District Directory Feature' },
  ];

  return (
    <div className="pt-28 pb-20 space-y-24">
      
      {/* LIONS HERO */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-slateGrey-950 via-navyBlue-950 to-slateGrey-900 border-b border-white/10 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
        
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto space-y-4 py-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slateGrey-900 border border-slate-700/60 text-darkOrange-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Award className="w-4 h-4" />
            LIONS CLUBS INTERNATIONAL
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Nuwan Ballantudawa
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto">
            District Governor (306A2) • Immediate Multiple Council Chairperson • Humanitarian Service Portfolio
          </p>
        </AnimatedSection>
      </section>

      {/* POSITIONS HELD OVER THE YEARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedSection>
          <SectionHeading
            centered
            number="01"
            badge="LEADERSHIP JOURNEY"
            title="Positions Held Over the Years"
            subtitle="A progressive journey of dedication, administrative service, and district leadership."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {positions.map((pos, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-2 text-center h-full flex flex-col justify-between hover:border-darkOrange-500/40">
                <div className="w-8 h-8 rounded-full bg-slateGrey-900 border border-slate-700 text-darkOrange-400 flex items-center justify-center font-mono font-bold text-xs mx-auto">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-white">{pos.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pos.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ENTRANCE & GOVERNOR YEAR TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
            <SectionHeading
              number="02"
              badge="GOVERNOR YEAR HIGHLIGHTS"
              title="Lions Service Timeline & Vision"
              subtitle="Introducing district-wide initiatives in healthcare, education, environment, and youth development."
            />

            <Timeline items={lionsTimeline} />
          </div>
        </AnimatedSection>
      </section>

      {/* COMMUNITY SERVICES & PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedSection>
          <SectionHeading
            centered
            number="03"
            badge="HUMANITARIAN IMPACT"
            title="Community Services & Projects"
            subtitle="Core avenues of service conducted across District 306A2 and local communities."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-3 w-fit rounded-2xl bg-slateGrey-900 text-darkOrange-400 border border-slate-700/60">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 text-[11px] text-darkOrange-400 font-medium">
                  District 306A2 Initiative
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* GOVERNOR YEAR GALLERY / FLIPBOOK PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <AnimatedSection>
          <SectionHeading
            centered
            number="04"
            badge="PHOTO GALLERY"
            title="Governor Year Portfolio Showcase"
            subtitle="Selected photographs and historical moments from Lions District leadership."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div
                onClick={() => setSelectedImage(img)}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 cursor-pointer aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slateGrey-950/80 via-slateGrey-950/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-xs font-semibold text-slate-200">{img.caption}</span>
                  <div className="p-1.5 rounded-lg bg-slateGrey-950/80 text-darkOrange-400 border border-white/10">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <ModalLightbox
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src}
        caption={selectedImage?.caption}
      />

    </div>
  );
}
