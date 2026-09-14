import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stations } from '../data/stations';

export default function JourneyMap() {
  const [activeStation, setActiveStation] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stationElements = stations.map(s => ({
        id: s.id,
        element: document.getElementById(`station-${s.id}`),
      }));

      // Find which station is most in view
      let currentStation: string | null = null;
      const scrollY = window.scrollY + window.innerHeight / 3;

      for (const { id, element } of stationElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = top + rect.height;
          if (scrollY >= top && scrollY <= bottom) {
            currentStation = id;
          }
        }
      }
      setActiveStation(currentStation);

      // Auto-collapse when at the top of the page
      const heroHeight = document.getElementById('station-overview')?.getBoundingClientRect().top ?? 0;
      setIsCollapsed(heroHeight > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStation = (id: string) => {
    document.getElementById(`station-${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isCollapsed) return null;

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block group/sidebar"
      >
        <div className="station-card p-3 backdrop-blur-sm bg-parchment/90 transition-all duration-300">
          <div className="relative">
            {/* Vertical route line */}
            <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-gold/30" />

            {/* Progress fill */}
            {activeStation && (
              <motion.div
                className="absolute left-[15px] top-4 w-0.5 bg-gold"
                initial={{ height: 0 }}
                animate={{
                  height: `${
                    ((stations.findIndex(s => s.id === activeStation) + 1) / stations.length) * 100
                  }%`,
                }}
                transition={{ duration: 0.3 }}
                style={{ maxHeight: 'calc(100% - 32px)' }}
              />
            )}

            <div className="space-y-4">
              {stations.map((station) => {
                const isActive = activeStation === station.id;
                return (
                  <button
                    key={station.id}
                    onClick={() => scrollToStation(station.id)}
                    className="flex items-center group cursor-pointer w-full text-left"
                  >
                    <div
                      className={`w-[30px] h-[30px] rounded-full flex items-center justify-center text-xs font-heading font-bold
                        transition-all duration-300 flex-shrink-0 relative z-10
                        ${isActive
                          ? 'bg-sepia text-parchment-light shadow-md scale-110'
                          : 'bg-parchment-dark text-sepia group-hover:bg-gold group-hover:text-ink'
                        }`}
                    >
                      {station.number}
                    </div>
                    <span
                      className={`text-xs font-body transition-all duration-300 whitespace-nowrap overflow-hidden
                        max-w-0 opacity-0 group-hover/sidebar:max-w-[200px] group-hover/sidebar:opacity-100 group-hover/sidebar:ml-3
                        ${isActive ? 'text-ink font-semibold' : 'text-sepia-light group-hover:text-ink'}`}
                    >
                      {station.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
