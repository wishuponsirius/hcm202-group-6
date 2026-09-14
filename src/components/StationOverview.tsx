import { motion } from 'framer-motion';
import { stations } from '../data/stations';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function StationOverview() {
  const { ref, isVisible } = useScrollReveal(0.2);

  const scrollToStation = (id: string) => {
    document.getElementById(`station-${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="station-overview" ref={ref} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gold" />
            <div className="compass-rose w-6 h-6 opacity-50" />
            <div className="h-px w-16 bg-gold" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-ink font-bold text-shadow-vintage">
            Bản đồ hành trình
          </h2>
          <p className="font-accent text-sepia mt-3 italic">
            5 trạm bước ngoặt trên con đường tư tưởng
          </p>
        </motion.div>

        {/* Journey map - Desktop: horizontal, Mobile: vertical */}
        <div className="relative">
          {/* Desktop horizontal layout */}
          <div className="hidden md:block">
            {/* Connecting route line */}
            <div className="absolute top-12 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-gold/60" />

            <div className="flex justify-between items-start px-[5%]">
              {stations.map((station, index) => (
                <motion.button
                  key={station.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  onClick={() => scrollToStation(station.id)}
                  className="group flex flex-col items-center max-w-[160px] cursor-pointer"
                >
                  {/* Station pin */}
                  <div className="relative mb-4">
                    <div className="w-10 h-10 rounded-full bg-sepia text-parchment-light flex items-center justify-center
                                    font-heading text-lg font-bold shadow-lg group-hover:bg-ink group-hover:scale-110
                                    transition-all duration-300 animate-pulse-glow">
                      {station.number}
                    </div>
                    {/* Pin tail */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0
                                    border-l-[6px] border-r-[6px] border-t-[8px]
                                    border-l-transparent border-r-transparent border-t-sepia
                                    group-hover:border-t-ink transition-colors" />
                  </div>

                  {/* Station info */}
                  <h3 className="font-heading text-sm font-semibold text-ink text-center leading-tight group-hover:text-sepia transition-colors">
                    {station.title}
                  </h3>
                  <p className="text-xs text-sepia-light mt-1 text-center font-body">
                    {station.timePeriod}
                  </p>
                  <p className="text-[11px] text-ink-light mt-2 text-center leading-snug opacity-80">
                    {station.subtitle}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile vertical layout */}
          <div className="md:hidden">
            <div className="relative ml-6">
              {/* Vertical route line */}
              <div className="absolute top-0 bottom-0 left-5 w-0.5 border-l-2 border-dashed border-gold/60" />

              <div className="space-y-8">
                {stations.map((station, index) => (
                  <motion.button
                    key={station.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    onClick={() => scrollToStation(station.id)}
                    className="flex items-start gap-4 text-left cursor-pointer group w-full"
                  >
                    {/* Station pin */}
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-sepia text-parchment-light flex items-center justify-center
                                      font-heading text-lg font-bold shadow-md group-hover:bg-ink transition-colors">
                        {station.number}
                      </div>
                    </div>

                    {/* Station info */}
                    <div className="pt-1">
                      <h3 className="font-heading text-base font-semibold text-ink group-hover:text-sepia transition-colors">
                        {station.title}
                      </h3>
                      <p className="text-xs text-sepia-light mt-0.5">{station.timePeriod}</p>
                      <p className="text-sm text-ink-light mt-1 leading-snug">{station.subtitle}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
