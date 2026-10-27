import React from 'react';
import { Scale, ShieldCheck, FileCheck, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Timeline from '../components/Timeline';

export default function Profession() {
  const legalTimeline = [
    {
      date: '2005',
      title: 'Admitted to the Bar of Sri Lanka',
      subtitle: 'Sri Lanka Law College — Attorney-at-Law',
      description: 'Admitted to the Bar as an Attorney-at-Law upon completing legal education at Sri Lanka Law College. Adhering strictly to ethical practice, legal representation, and legal compliance.',
    },
    {
      date: 'Postgraduate',
      title: 'Master of Commerce & Migration Law',
      subtitle: 'Griffith University, Australia',
      description: 'Obtained Master of Commerce and Graduate Diploma in International Migration Law from Griffith University, expanding legal specialization into cross-border migration regulatory frameworks.',
    },
    {
      date: 'Current',
      title: 'Registered Migration Agent & Adviser',
      subtitle: 'MARA (Australia) & IAA (New Zealand)',
      description: 'Licensed to provide official immigration advisory services under official codes of conduct for individuals, students, and businesses.',
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* PAGE HERO */}
      <AnimatedSection>
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slateGrey-900 border border-slate-700/60">
            <Scale className="w-4 h-4 text-darkOrange-400" />
            <span className="text-xs font-mono font-bold tracking-widest text-darkOrange-400 uppercase">
              LEGAL PROFESSION & CONSULTANCY
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Legal Career & International Qualifications
          </h1>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Attorney-at-Law with extensive experience in legal practice, statutory compliance, and international migration jurisprudence.
          </p>
        </div>
      </AnimatedSection>

      {/* CREDENTIAL CARDS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <AnimatedSection delay={0.1}>
          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-2xl bg-slateGrey-900 text-darkOrange-400 border border-slate-700/60">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Attorney-at-Law</h3>
              <p className="text-xs text-darkOrange-400 font-semibold">Admitted 2005 • Sri Lanka Law College</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Admitted to the Bar of Sri Lanka as an Attorney-at-Law. Providing legal counsel, advisory services, and ethical representation.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-slate-400 border-t border-white/10">
              Official Legal Qualification
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-2xl bg-slateGrey-900 text-darkOrange-400 border border-slate-700/60">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Master of Commerce</h3>
              <p className="text-xs text-darkOrange-400 font-semibold">Griffith University, Australia</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Postgraduate degree strengthening expertise in international trade, commerce, strategic management, and corporate policy.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-slate-400 border-t border-white/10">
              Postgraduate Degree
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-2xl bg-slateGrey-900 text-darkOrange-400 border border-slate-700/60">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Int'l Migration Law</h3>
              <p className="text-xs text-darkOrange-400 font-semibold">Graduate Diploma • Griffith University</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Specialized postgraduate qualification in Australian & international migration jurisprudence and statutory codes of conduct.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-slate-400 border-t border-white/10">
              Migration Law Specialization
            </div>
          </div>
        </AnimatedSection>

      </section>

      {/* TIMELINE SECTION */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
        <AnimatedSection>
          <SectionHeading
            number="01"
            badge="CAREER MILESTONES"
            title="Legal Career & Qualifications Timeline"
            subtitle="Verified historical milestones from Sri Lanka Law College and Griffith University."
          />

          <Timeline items={legalTimeline} />
        </AnimatedSection>
      </section>

      {/* EDITABLE PLACEHOLDER SECTION FOR FUTURE LEGAL DETAILS */}
      <section className="glass-card p-8 rounded-3xl border border-dashed border-white/20 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-darkOrange-600/10 text-darkOrange-400 border border-darkOrange-600/30">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white">Additional Professional Credentials & Specializations</h4>
            <p className="text-xs text-slate-400">Section reserved for upcoming detailed legal case history and professional appointments.</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slateGrey-950/80 border border-white/5 text-xs text-slate-400 space-y-2 font-mono">
          <p className="text-darkOrange-400 font-semibold">[Editable Section — Details to be added by user]</p>
          <p>• Specialized practice areas (Constitutional, Commercial, Civil Litigation)</p>
          <p>• Key court admissions & professional association memberships</p>
          <p>• Legal publications & guest lectures</p>
        </div>
      </section>

      {/* LINK TO BUSINESS PAGE */}
      <section className="text-center pt-4">
        <AnimatedSection>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-slateGrey-900 via-navyBlue-950 to-slateGrey-900 border border-slate-700/60">
            <span className="text-sm font-semibold text-slate-200">
              Interested in Migration Consulting & Business Services?
            </span>
            <Button to="/business" variant="primary" size="sm">
              Visit Eureka Consultants Page
            </Button>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
