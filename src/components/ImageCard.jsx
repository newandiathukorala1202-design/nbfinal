import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

export default function ImageCard({
  src,
  alt,
  caption,
  rotate = false,
  rotationAngle = "rotate-1",
  onZoom,
  aspectRatio = "aspect-[4/3]",
  className = ""
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotate: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative group rounded-2xl overflow-hidden glass-card border border-white/10 shadow-xl ${rotate ? rotationAngle : ''} ${className}`}
    >
      <div className={`relative ${aspectRatio} overflow-hidden bg-slateGrey-900`}>
        <img
          src={src}
          alt={alt || "Portfolio Showcase"}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slateGrey-950/80 via-slateGrey-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Zoom Icon Button */}
        {onZoom && (
          <button
            onClick={() => onZoom(src, caption || alt)}
            className="absolute top-3 right-3 p-2 rounded-xl bg-slateGrey-950/80 text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-darkOrange-600"
            aria-label="View Image"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        )}

        {/* Caption */}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <p className="text-xs font-semibold text-slate-200 group-hover:text-darkOrange-300 transition-colors drop-shadow-md">
              {caption}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
