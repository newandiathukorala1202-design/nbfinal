import React from 'react';
import { Scale, Briefcase, Award, Flag, BookOpen, ShieldCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ImageCard from '../components/ImageCard';

export default function About() {
  const identities = [
    {
      id: 'lawyer',
      badge: 'LAWYER',
      title: 'Legal Counsel & Migration Law Expertise',
      description: `I am an Attorney-at-Law admitted to the Bar of Sri Lanka in 2005 after completing my legal education at Sri Lanka Law College. Over nearly two decades of legal practice, I have maintained an unyielding commitment to justice, ethics, and professional integrity. In addition to core legal practice, I hold a Master of Commerce and a Graduate Diploma in International Migration Law from Griffith University, Australia, enabling me to handle complex immigration jurisprudence and international compliance.`,
      quote: "Legal work is guided by ethics, professionalism, and a fundamental commitment to justice.",
      image: '/images/nb.jpeg',
      imageCaption: 'Attorney-at-Law Nuwan Ballantudawa',
      btnText: 'Explore Legal Career',
      btnLink: '/profession',
      icon: Scale,
      altLayout: false // Image left, text right
    },
    {
      id: 'business',
      badge: 'BUSINESS OWNER',
      title: 'Founder & Managing Director — Eureka Consultants',
      description: `As the Founder and Managing Director of Eureka Consultants, I lead a premier migration and education advisory firm headquartered in Delkanda, Sri Lanka. I am a Registered Migration Agent (MARA) and a Licensed Immigration Adviser (IAA, New Zealand). My focus is on building client trust, delivering compliant pathways, and empowering Sri Lankan students and professionals to achieve world-class international education and career success across Australia, New Zealand, and beyond.`,
      quote: "Transforming aspirations into reality through transparent and result-driven guidance.",
      image: '/images/dad.jpg',
      imageCaption: 'Nuwan Ballantudawa at Eureka Consultants',
      btnText: 'Explore Business',
      btnLink: '/business',
      icon: Briefcase,
      altLayout: true // Text left, image right
    },
    {
      id: 'lions',
      badge: 'LIONS LEADERSHIP',
      title: 'Humanitarian Leadership & Community Empowerment',
      description: `My journey with Lions Clubs International culminated in serving as District Governor of District 306A2 and Immediate Multiple Council Chairperson. Throughout my service, I have championed district-wide health drives, blood donation initiatives, educational scholarships for underprivileged youth, environmental tree-planting campaigns, and leadership workshops designed to inspire the next generation of social servants.`,
      quote: "True leadership is measured by the impact we create in the lives of vulnerable communities.",
      image: '/images/lions.jpg',
      imageCaption: 'District Governor 306A2 Community Service',
      btnText: 'Explore Lions Journey',
      btnLink: '/lions',
      icon: Award,
      altLayout: false // Image left, text right
    },
    {
      id: 'politics',
      badge: 'POLITICAL ENGAGEMENT',
      title: 'Nationalist Vision & Public Integrity',
      description: `Deeply passionate about national development and democratic accountability, I am the founder of Deshapremi Jathika Peramuna. Holding a BA (Honours) in Political Science from the University of Colombo, my political philosophy centers on national sovereignty, economic self-reliance, administrative transparency, and social welfare for all Sri Lankans.`,
      quote: "Contributing toward national development, civic responsibility, and meaningful societal change.",
      image: '/images/group.jpg',
      imageCaption: 'Public Engagement & Political Leadership',
      btnText: 'Explore Political Journey',
      btnLink: '/politics',
      icon: Flag,
      altLayout: true // Text left, image right
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* HEADER HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slateGrey-900 border border-slate-700/60">
            <span className="w-2 h-2 rounded-full bg-darkOrange-500" />
            <span className="text-xs font-mono font-bold tracking-widest text-darkOrange-400 uppercase">
              ABOUT NUWAN BALLANTUDAWA
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mt-4">
            Passionate About <span className="text-gradient-orange">Leadership</span>, <span className="text-navyBlue-400">Service</span> & <span className="text-slate-100">Impact</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Lawyer, migration consultant, business leader, and public servant committed to empowering individuals, organizations, and communities across Sri Lanka and internationally.
          </p>
        </AnimatedSection>
      </section>

      {/* CORE BIOGRAPHY SUMMARY CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-navyBlue-900/10 rounded-full blur-3xl pointer-events-none" />
            
            <SectionHeading
              number="01"
              badge="EDUCATIONAL BACKGROUND"
              title="A Product of Sri Lanka's Free Education System"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs sm:text-sm">
              
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-darkOrange-400 font-bold">
                  <BookOpen className="w-4 h-4" />
                  <span>Primary & Secondary</span>
                </div>
                <p className="text-slate-300">
                  Completed primary schooling at <strong>Wetara Kanitu Viduhala</strong>, and secondary education at <strong>Wetara Maha Vidyalaya</strong> & <strong>Central College, Piliyandala</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-darkOrange-400 font-bold">
                  <Scale className="w-4 h-4" />
                  <span>University & Bar</span>
                </div>
                <p className="text-slate-300">
                  <strong>BA (Honours)</strong> in Political Science from University of Colombo. Admitted as <strong>Attorney-at-Law</strong> in 2005 via Sri Lanka Law College.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-darkOrange-400 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Postgraduate Studies</span>
                </div>
                <p className="text-slate-300">
                  <strong>Master of Commerce (MCom)</strong> & <strong>Graduate Diploma in International Migration Law</strong> from <strong>Griffith University</strong>, Australia.
                </p>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FOUR MAJOR IDENTITIES (ALTERNATING LAYOUTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold text-darkOrange-400 uppercase tracking-widest">
            FOUR MAJOR IDENTITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Dedicated Roles Shaping My Mission
          </h2>
        </div>

        {identities.map((item, idx) => (
          <AnimatedSection key={item.id} delay={0.1}>
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${item.altLayout ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Column */}
              <div className={`lg:col-span-5 ${item.altLayout ? 'lg:order-2' : 'lg:order-1'}`}>
                <ImageCard
                  src={item.image}
                  alt={item.title}
                  caption={item.imageCaption}
                  aspectRatio="aspect-[4/3]"
                  rotate={idx % 2 === 1}
                  rotationAngle={idx % 2 === 1 ? "-rotate-1" : "rotate-1"}
                />
              </div>

              {/* Text Content Column */}
              <div className={`lg:col-span-7 space-y-6 ${item.altLayout ? 'lg:order-1' : 'lg:order-2'}`}>
                
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slateGrey-900 border border-slate-700/60 text-darkOrange-400">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-darkOrange-400 uppercase tracking-widest bg-darkOrange-600/10 px-3 py-1 rounded-full border border-darkOrange-600/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.03] border-l-4 border-darkOrange-600 text-xs sm:text-sm text-slate-200 italic">
                  "{item.quote}"
                </div>

                <div className="pt-2">
                  <Button to={item.btnLink} variant="primary" size="md">
                    {item.btnText}
                  </Button>
                </div>

              </div>

            </div>
          </AnimatedSection>
        ))}

      </section>

    </div>
  );
}
