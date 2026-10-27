import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ModalLightbox({ isOpen, onClose, imageSrc, caption }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-2xl"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden glass-panel border border-white/20 p-2 shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-navy-900/80 text-white border border-white/20 hover:bg-maroon-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <img
            src={imageSrc}
            alt={caption || "Lightbox View"}
            className="max-h-[80vh] w-auto mx-auto rounded-2xl object-contain"
          />

          {caption && (
            <div className="p-4 text-center">
              <p className="text-sm font-semibold text-slate-200">{caption}</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
