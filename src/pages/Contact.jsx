import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, Twitter, Facebook } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const targetEmail = 'newandiathukorala1202@gmail.com';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'fc823f0f-8080-4da8-b847-6879812ad462',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          subject: formData.subject || 'New Portfolio Message',
          message: formData.message,
          replyto: formData.email
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed.');
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus('error');
      setStatusMessage('Unable to send automatically. You can click below to open your email client directly.');
    }
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <AnimatedSection>
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slateGrey-900 border border-slate-700/60">
            <Mail className="w-4 h-4 text-darkOrange-400" />
            <span className="text-xs font-mono font-bold tracking-widest text-darkOrange-400 uppercase">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Contact Nuwan Ballantudawa
          </h1>

          <p className="text-base text-slate-300 leading-relaxed font-light">
            Have questions regarding legal counsel, migration advisory, business consulting, or public engagements? Reach out directly using the form below.
          </p>
        </div>
      </AnimatedSection>

      {/* FORM & INFO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Info Column */}
        <AnimatedSection className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 h-full flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white border-l-4 border-darkOrange-600 pl-3">
                Contact Details
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-slateGrey-900 text-darkOrange-400 border border-slate-700/60 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a href={`mailto:${targetEmail}`} className="text-sm font-semibold text-white hover:text-darkOrange-400 transition-colors">
                      {targetEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-slateGrey-900 text-darkOrange-400 border border-slate-700/60 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Consultancy Phone
                    </span>
                    <a href="tel:+94766915213" className="text-sm font-semibold text-white hover:text-darkOrange-400 transition-colors">
                      +94 76 691 5213
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-slateGrey-900 text-darkOrange-400 border border-slate-700/60 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Office Location
                    </span>
                    <span className="text-sm font-semibold text-white block">
                      Eureka Consultants, Delkanda, Nugegoda, Sri Lanka
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Official Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://au.linkedin.com/in/nuwan-ballantudawa-170aa623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-darkOrange-600 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/ballantudawa?lang=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-darkOrange-600 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/confirmemail.php?next=https%3A%2F%2Fwww.facebook.com%2Fnuwan.ballantudawa%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-darkOrange-600 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </AnimatedSection>

        {/* Right Form Column */}
        <AnimatedSection className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6">
            
            <h3 className="text-2xl font-bold text-white">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold text-slate-200 tracking-wider uppercase">
                  Full Name <span className="text-darkOrange-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-slateGrey-950/90 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-darkOrange-500 focus:ring-1 focus:ring-darkOrange-500 transition-all"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-200 tracking-wider uppercase">
                    Email Address <span className="text-darkOrange-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-slateGrey-950/90 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-darkOrange-500 focus:ring-1 focus:ring-darkOrange-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-200 tracking-wider uppercase">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+94 77 123 4567"
                    className="w-full bg-slateGrey-950/90 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-darkOrange-500 focus:ring-1 focus:ring-darkOrange-500 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-slate-200 tracking-wider uppercase">
                  Subject <span className="text-darkOrange-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry topic (e.g. Legal Counsel / Migration / Lions)"
                  className="w-full bg-slateGrey-950/90 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-darkOrange-500 focus:ring-1 focus:ring-darkOrange-500 transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-200 tracking-wider uppercase">
                  Message <span className="text-darkOrange-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message detail here..."
                  className="w-full bg-slateGrey-950/90 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-darkOrange-500 focus:ring-1 focus:ring-darkOrange-500 transition-all resize-y"
                />
              </div>

              {/* Submit Button & Status */}
              <div className="pt-2 space-y-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleMailto}
                    className="text-xs text-slate-400 hover:text-darkOrange-400 underline transition-colors"
                  >
                    Or open in your email application directly (Mailto)
                  </button>
                </div>
              </div>

              {/* Status Alert Messages */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{statusMessage}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleMailto}
                    className="px-3 py-1.5 rounded-lg bg-slateGrey-800 border border-slate-700 text-white font-bold hover:bg-darkOrange-600 transition-colors"
                  >
                    Click to Send via Mailto ({targetEmail})
                  </button>
                </div>
              )}

            </form>

          </div>
        </AnimatedSection>

      </div>

    </div>
  );
}
