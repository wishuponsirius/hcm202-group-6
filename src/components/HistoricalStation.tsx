import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Station } from '../data/stations';
import { SourceReferences } from './SourceReferences';
import ClickableImage from './ClickableImage';
import FlipCard from './FlipCard';
import DocumentViewer from './DocumentViewer';
import NetworkDiagram from './NetworkDiagram';
import DebateSimulation from './DebateSimulation';
import { AspirationWall } from './AspirationWall';

interface HistoricalStationProps {
  station: Station;
}

function InteractiveFeature({ station }: { station: Station }) {
  switch (station.interactiveType) {
    case 'flip-cards':
      return <FlipCard />;
    case 'document-viewer':
      return <DocumentViewer images={station.images} />;
    case 'network-diagram':
      return <NetworkDiagram />;
    case 'debate-simulation':
      return <DebateSimulation />;
    case 'aspiration-wall':
      return <AspirationWall />;
    default:
      return null;
  }
}

export default function HistoricalStation({ station }: HistoricalStationProps) {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section
      id={`station-${station.id}`}
      ref={ref}
      className="py-16 md:py-24 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Station header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Station number & route marker */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-sepia text-parchment-light flex items-center justify-center
                              font-heading text-2xl font-bold shadow-lg">
                {station.number}
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0
                              border-l-[8px] border-r-[8px] border-t-[10px]
                              border-l-transparent border-r-transparent border-t-sepia" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold font-body font-semibold mb-1">
                Trạm {station.number}
              </div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-ink text-shadow-vintage leading-tight">
                {station.title}
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <p className="font-heading text-lg md:text-xl text-sepia font-semibold">
            {station.subtitle}
          </p>

          {/* Time period badge */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-parchment border border-gold/30 rounded-sm">
            <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-body text-sepia">{station.timePeriod}</span>
          </div>

          {/* Theme */}
          <p className="font-accent italic text-ink-light mt-3 text-sm md:text-base">
            {station.theme}
          </p>
        </motion.div>

        {/* Main Content Layout (2 columns on lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            {/* Historical data & Sources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="station-card p-6 md:p-8 mb-6">
                <h3 className="font-heading text-lg font-bold text-ink mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Dữ liệu lịch sử
                </h3>
                <ul className="space-y-4">
                  {station.historicalData.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-ink-light leading-relaxed">
                      <span className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <SourceReferences sources={station.sources} />
            </motion.div>

            {/* Theoretical analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="station-card p-6 md:p-8 border-l-4 border-l-gold"
            >
              <h3 className="font-heading text-lg font-bold text-ink mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-sepia" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Phân tích bản chất bước ngoặt lý luận
              </h3>
              <div className="space-y-4">
                {station.analysis.map((paragraph, i) => (
                  <p key={i} className="text-sm md:text-base text-ink-light leading-relaxed font-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Images */}
          {station.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-5 space-y-6 order-1 lg:order-2"
            >
              {station.images.map((img, i) => (
                <div key={i} className="station-card p-3 md:p-4 overflow-hidden">
                  <ClickableImage
                    src={img.src}
                    alt={img.alt}
                    className="w-full rounded-sm overflow-hidden"
                    imgClassName="w-full h-auto max-h-[350px] object-cover rounded-sm"
                  />
                  <p className="text-xs md:text-sm text-sepia-light mt-3 text-center font-accent italic">
                    {img.alt}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Practical connection */}
        {station.practicalConnection && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="station-card p-6 md:p-8 mb-10 bg-cream/50"
          >
            <h3 className="font-heading text-lg font-bold text-ink mb-3 flex items-center gap-2">
              <span className="text-xl">🔗</span>
              Liên hệ thực tiễn
            </h3>
            <p className="text-sm md:text-base text-ink-light leading-relaxed font-accent italic">
              {station.practicalConnection}
            </p>
          </motion.div>
        )}

        {/* Interactive feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <InteractiveFeature station={station} />
        </motion.div>

        {/* Station divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-gold/40" />
          <div className="compass-rose w-6 h-6 opacity-30" />
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-gold/40" />
        </div>
      </div>
    </section>
  );
}
