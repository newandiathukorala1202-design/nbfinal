import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon = ArrowRight,
  showIcon = true,
  className = "",
  target,
  rel,
  type = "button"
}) {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wider rounded-xl transition-all duration-300 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slateGrey-950 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-darkOrange-600 to-darkOrange-700 hover:from-darkOrange-500 hover:to-darkOrange-600 text-white border border-darkOrange-500/40 shadow-lg shadow-darkOrange-950/40 hover:scale-[1.02] focus:ring-darkOrange-500",
    blue: "bg-gradient-to-r from-navyBlue-700 to-navyBlue-800 hover:from-navyBlue-600 hover:to-navyBlue-700 text-white border border-navyBlue-500/40 shadow-lg hover:scale-[1.02] focus:ring-navyBlue-500",
    business: "bg-gradient-to-r from-businessRed-700 to-businessRed-800 hover:from-businessRed-600 hover:to-businessRed-700 text-white border border-businessRed-500/40 shadow-lg hover:scale-[1.02] focus:ring-businessRed-500",
    secondary: "bg-slateGrey-800/90 hover:bg-slateGrey-700/90 text-slate-200 hover:text-white border border-white/10 hover:border-darkOrange-500/50 shadow-md focus:ring-slate-400",
    outline: "bg-transparent hover:bg-slateGrey-800/50 text-white border border-slate-600 hover:border-darkOrange-500 focus:ring-darkOrange-500",
    glass: "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 backdrop-blur-md focus:ring-white/20",
  };

  const sizes = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-3 text-xs sm:text-sm gap-2",
    lg: "px-7 py-4 text-sm sm:text-base gap-2.5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showIcon && Icon && (
        <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
}
