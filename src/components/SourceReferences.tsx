import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SourceReferencesProps {
  sources: string;
}

export const SourceReferences = ({ sources }: SourceReferencesProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-[#8B2500] hover:text-[#704214] font-['Playfair_Display',_serif] font-bold text-lg focus:outline-none transition-colors duration-300"
        aria-expanded={isExpanded}
      >
        <span className="mr-2 text-xl">📚</span>
        Nguồn trích dẫn chính thống
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-2 inline-block"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-4 p-5 bg-[#F5E6C8] border-l-4 border-[#C9A84C] rounded-r-md shadow-sm">
              <p className="text-[#2C1810] font-['Lora',_serif] italic leading-relaxed whitespace-pre-wrap text-sm md:text-base">
                {sources}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
