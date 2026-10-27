import React from 'react';

export default function SectionHeading({
  number,
  badge,
  title,
  subtitle,
  centered = false,
  className = ""
}) {
  return (
    <div className={`space-y-3 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      
      <div className={`flex items-center gap-3 ${centered ? 'justify-center' : 'justify-start'}`}>
        {number && (
          <span className="text-xs font-mono font-bold tracking-widest text-darkOrange-400 bg-darkOrange-600/10 border border-darkOrange-600/30 px-2.5 py-1 rounded-md">
            {number}
          </span>
        )}
        {badge && (
          <span className="text-xs font-bold uppercase tracking-widest text-slate-200 bg-slateGrey-800/90 border border-slate-700 px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}

      <div className={`w-16 h-1 bg-gradient-to-r from-darkOrange-600 to-navyBlue-500 rounded-full ${centered ? 'mx-auto' : ''}`} />

    </div>
  );
}
