import React from 'react';
import { motion } from 'framer-motion';

export default function Timeline({ items = [] }) {
  return (
    <div className="relative border-l-2 border-slate-700/60 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-8 my-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          {/* Node Dot */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slateGrey-950 border-2 border-darkOrange-500 group-hover:border-darkOrange-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(234,88,12,0.5)]" />

          {/* Card Content */}
          <div className="glass-card p-5 sm:p-6 rounded-2xl space-y-2 border border-white/10 group-hover:border-darkOrange-500/40">
            {item.date && (
              <span className="text-xs font-mono font-bold text-darkOrange-400 tracking-wider inline-block bg-darkOrange-600/10 border border-darkOrange-600/30 px-2.5 py-0.5 rounded">
                {item.date}
              </span>
            )}
            
            <h3 className="text-lg font-bold text-white group-hover:text-darkOrange-300 transition-colors">
              {item.title}
            </h3>

            {item.subtitle && (
              <p className="text-xs font-semibold text-slate-400">
                {item.subtitle}
              </p>
            )}

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
