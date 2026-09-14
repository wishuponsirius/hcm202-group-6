import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

function Lightbox({ src, alt, onClose }: ImageLightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 0.5));

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === '+' || e.key === '=') handleZoomIn();
    if (e.key === '-') handleZoomOut();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const content = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative bg-cream rounded-lg max-w-6xl w-full max-h-[92vh] flex flex-col border-2 border-gold/60 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gold/20 bg-parchment/80 rounded-t-lg">
          {/* Zoom controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="w-8 h-8 flex items-center justify-center bg-parchment-dark border border-sepia/30 rounded
                         text-ink font-bold hover:bg-gold hover:text-ink transition-colors cursor-pointer text-lg"
            >
              −
            </button>
            <span className="text-sm font-body text-sepia min-w-[48px] text-center">
              {(zoom * 100).toFixed(0)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="w-8 h-8 flex items-center justify-center bg-parchment-dark border border-sepia/30 rounded
                         text-ink font-bold hover:bg-gold hover:text-ink transition-colors cursor-pointer text-lg"
            >
              +
            </button>
          </div>

          {/* Caption */}
          <p className="text-sm font-accent italic text-sepia truncate mx-4 hidden sm:block max-w-md">
            {alt}
          </p>

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center bg-parchment-dark border border-sepia/30 rounded
                       text-ink hover:bg-accent-red hover:text-parchment-light transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image area */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center min-h-[60vh] parchment-bg">
          <img
            src={src}
            alt={alt}
            style={{ transform: `scale(${zoom})` }}
            className="max-w-full max-h-[75vh] object-contain transition-transform duration-300 origin-center rounded"
            draggable={false}
          />
        </div>

        {/* Mobile caption */}
        <p className="sm:hidden text-xs font-accent italic text-sepia text-center py-2 px-4 border-t border-gold/20 bg-parchment/80 rounded-b-lg">
          {alt}
        </p>
      </motion.div>
    </motion.div>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
}

/* ---------- Clickable image wrapper ---------- */

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export default function ClickableImage({ src, alt, className = '', imgClassName = '' }: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`group relative cursor-pointer overflow-hidden ${className}`}
        aria-label={`Xem ảnh: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={`transition-transform duration-300 group-hover:scale-[1.02] ${imgClassName}`}
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          bg-ink/60 text-parchment-light px-3 py-1.5 rounded-full text-xs font-body flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Nhấn để phóng to
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <Lightbox src={src} alt={alt} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
