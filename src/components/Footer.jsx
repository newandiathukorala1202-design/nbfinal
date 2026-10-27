import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Scale, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slateGrey-950 via-slateGrey-900 to-[#040914] border-t border-white/10 text-slate-300 pt-16 pb-12 overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-darkOrange-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navyBlue-800 to-slateGrey-900 border border-darkOrange-600/40 flex items-center justify-center font-bold text-white tracking-wider text-lg shadow-md">
                NB
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-wider block">
                  NUWAN BALLANTUDAWA
                </span>
                <span className="text-xs text-darkOrange-400 font-medium tracking-wide">
                  Attorney-at-Law & Migration Adviser
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A dedicated Nationalist, Social Worker, Attorney-at-Law, and Founder of Eureka Consultants, committed to ethical leadership, legal excellence, and community service.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slateGrey-800/80 border border-slate-700/60 text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-darkOrange-400" /> MARA & IAA Registered
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slateGrey-800/80 border border-slate-700/60 text-slate-200">
                <Scale className="w-3.5 h-3.5 text-darkOrange-400" /> Attorney-at-Law
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase border-l-2 border-darkOrange-600 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Profession & Law', path: '/profession' },
                { name: 'Business Venture', path: '/business' },
                { name: 'Lions Leadership', path: '/lions' },
                { name: 'Political Engagement', path: '/politics' },
                { name: 'Contact Me', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-darkOrange-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-darkOrange-400 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business & Leadership */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase border-l-2 border-darkOrange-600 pl-2">
              Key Identities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <strong className="text-slate-200 block font-semibold">Eureka Consultants</strong>
                Managing Director & Founder
              </li>
              <li>
                <strong className="text-slate-200 block font-semibold">Lions Clubs International</strong>
                District Governor (306A2)
              </li>
              <li>
                <strong className="text-slate-200 block font-semibold">Deshapremi Jathika Peramuna</strong>
                Founder & Political Leader
              </li>
              <li>
                <strong className="text-slate-200 block font-semibold">Griffith University Alumni</strong>
                MCom & Int'l Migration Law
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase border-l-2 border-darkOrange-600 pl-2">
              Connect & Reach
            </h4>
            
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-darkOrange-400 shrink-0" />
                <span>Delkanda, Nugegoda, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-darkOrange-400 shrink-0" />
                <span>+94 76 691 5213</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-darkOrange-400 shrink-0" />
                <span>newandiathukorala1202@gmail.com</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://au.linkedin.com/in/nuwan-ballantudawa-170aa623"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-darkOrange-600 hover:border-darkOrange-500 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/ballantudawa?lang=fr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter Profile"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-darkOrange-600 hover:border-darkOrange-500 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/confirmemail.php?next=https%3A%2F%2Fwww.facebook.com%2Fnuwan.ballantudawa%2F#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-darkOrange-600 hover:border-darkOrange-500 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nuwan Ballantudawa. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Use</span>
            <span className="text-darkOrange-400/80 font-medium">Eureka Consultants Profile</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
