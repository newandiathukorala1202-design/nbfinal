import React from 'react';
import { Flag, FileText, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';

export default function Politics() {
  const politicalTimeline = [
    {
      date: 'Academic Foundation',
      title: 'BA (Honours) in Political Science',
      subtitle: 'University of Colombo',
      description: 'Completed Bachelor of Arts degree specializing in Political Science, governance, constitutional law, and international policy analysis.',
    },
    {
      date: 'Political Founding',
      title: 'Founder — Deshapremi Jathika Peramuna',
      subtitle: 'Nationalist & Civic Movement',
      description: 'Founded Deshapremi Jathika Peramuna to advocate national sovereignty, transparent public administration, social justice, and civic welfare.',
    },
    {
      date: 'Ongoing Vision',
      title: 'Public Advocacy & National Policy',
      subtitle: 'Policy & Civic Representation',
      description: 'Engaging in public discussions, civic awareness programs, and policy advocacy focused on sustainable national development for Sri Lanka.',
    },
  ];

  const corePillars = [
    {
      title: 'National Sovereignty & Integrity',
      description: 'Upholding Sri Lanka’s constitutional independence, economic dignity, and international standing.',
    },
    {
      title: 'Social Justice & Civic Welfare',
      description: 'Ensuring equitable access to education, healthcare, and economic opportunity for all citizens.',
    },
    {
      title: 'Administrative Transparency',
      description: 'Promoting ethical governance, rule of law, and anti-corruption measures across public institutions.',
    },
    {
      title: 'Environmental Stewardship',
      description: 'Protecting Sri Lanka’s natural resources, forests, and agricultural sustainability for future generations.',
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-24">
      
      {/* HERO */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-slateGrey-950 via-navyBlue-950 to-slateGrey-900 border-b border-white/10 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
        
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto space-y-4 py-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slateGrey-900 border border-slate-700/60 text-darkOrange-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Flag className="w-4 h-4" />
            POLITICAL ENGAGEMENT & CIVIC VISION
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Deshapremi Jathika Peramuna
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto">
            Founder & Political Leader • Advocating for national development, public integrity, and societal progress.
          </p>
        </AnimatedSection>
      </section>

      {/* CORE VISION & FOUNDING STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-6">
            <SectionHeading
              number="01"
              badge="FOUNDER VISION"
              title="Deshapremi Jathika Peramuna"
              subtitle="A movement centered on patriotic service, constitutional democracy, and social progress."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
              <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  Nuwan Ballantudawa is actively involved in Sri Lankan politics and is the founder of <strong>Deshapremi Jathika Peramuna</strong>. Grounded in his academic background in Political Science (BA Honours, University of Colombo), his political vision is dedicated toward national development and meaningful societal change.
                </p>
                <p>
                  Guided by the core principles of civic duty, constitutionalism, and public service, he strives to foster patriotic leadership that respects free public education, national sovereignty, and economic self-reliance.
                </p>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-darkOrange-400 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Key Political Identity</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-2">
                  <li>• Founder, Deshapremi Jathika Peramuna</li>
                  <li>• BA (Hons) Political Science (Univ of Colombo)</li>
                  <li>• Advocate for National Development</li>
                  <li>• Public Servant & Nationalist</li>
                </ul>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* FOUR PILLARS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatedSection>
          <SectionHeading
            centered
            number="02"
            badge="PRINCIPLES"
            title="Pillars of Political Philosophy"
            subtitle="Neutral and dignified values driving public service and national advocacy."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((pillar, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-slateGrey-900 border border-slate-700/60 text-darkOrange-400 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
            <SectionHeading
              number="03"
              badge="CIVIC TIMELINE"
              title="Political & Academic Journey"
              subtitle="Milestones in political science education and public leadership."
            />

            <Timeline items={politicalTimeline} />
          </div>
        </AnimatedSection>
      </section>

      {/* FUTURE MEDIA & STATEMENT PLACEHOLDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 rounded-3xl border border-dashed border-white/20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-darkOrange-600/10 text-darkOrange-400 border border-darkOrange-600/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Media Appearances & Policy Press Releases</h4>
              <p className="text-xs text-slate-400">Section prepared for future political statements, interviews, and media archives.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slateGrey-950/80 border border-white/5 text-xs text-slate-400 font-mono space-y-1">
            <p className="text-darkOrange-400 font-semibold">[Editable Section — Statements to be added by user]</p>
            <p>• Official speeches & press briefings</p>
            <p>• Television interviews & policy debates</p>
            <p>• Parliamentary & civic campaign updates</p>
          </div>
        </div>
      </section>

    </div>
  );
}
