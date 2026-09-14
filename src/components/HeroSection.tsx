import { motion } from 'framer-motion';

const stationMarkers = [
  { id: 1, label: 'Hướng đi', x: '10%', y: '50%' },
  { id: 2, label: 'Hệ tư tưởng', x: '30%', y: '35%' },
  { id: 3, label: 'Đường lối', x: '50%', y: '55%' },
  { id: 4, label: 'Bản lĩnh', x: '70%', y: '40%' },
  { id: 5, label: 'Hiện thực hóa', x: '90%', y: '50%' },
];

export default function HeroSection() {
  const scrollToOverview = () => {
    document.getElementById('station-overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden parchment-bg">
      {/* Decorative border */}
      <div className="absolute inset-4 md:inset-8 border-2 border-sepia/20 rounded-lg pointer-events-none" />
      
      {/* Corner ornaments */}
      {['top-6 left-6', 'top-6 right-6', 'bottom-6 left-6', 'bottom-6 right-6'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} md:block hidden`}>
          <div className="compass-rose w-8 h-8 opacity-30" />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Compass decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex justify-center mb-8"
        >
          <div className="compass-rose w-16 h-16 opacity-60" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-ink tracking-wide text-shadow-vintage leading-tight"
        >
          HÀNH TRÌNH TƯ TƯỞNG
          <br />
          <span className="text-sepia">QUA CÁC BƯỚC NGOẶT LỊCH SỬ</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-accent text-lg md:text-xl text-ink-light mt-6 italic max-w-3xl mx-auto"
        >
          Khám phá 5 bước ngoặt làm thay đổi căn bản nhận thức và quyết định con đường cứu nước của Chủ tịch Hồ Chí Minh
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-2 h-2 bg-gold rotate-45" />
          <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Central question */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="relative max-w-2xl mx-auto px-8 py-6"
        >
          <div className="absolute top-0 left-0 text-5xl text-gold/40 font-heading leading-none">"</div>
          <p className="font-accent text-base md:text-lg text-sepia italic leading-relaxed">
            Những bước ngoặt nào đã làm thay đổi căn bản nhận thức và lựa chọn con đường cách mạng của Hồ Chí Minh?
          </p>
          <div className="absolute bottom-0 right-0 text-5xl text-gold/40 font-heading leading-none">"</div>
        </motion.blockquote>

        {/* Mini map with route */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="relative h-20 md:h-24 max-w-3xl mx-auto mt-10 mb-8 hidden md:block"
        >
          {/* Route line */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <motion.path
              d="M 50,50 C 150,30 200,70 300,35 S 450,55 500,40 S 650,60 750,50"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="2"
              strokeDasharray="8,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.6, ease: 'easeInOut' }}
              style={{ width: '100%' }}
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Station markers */}
          {stationMarkers.map((marker, index) => (
            <motion.div
              key={marker.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.8 + index * 0.15 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{ left: marker.x, top: marker.y }}
            >
              <div className="w-4 h-4 bg-gold rounded-full border-2 border-sepia shadow-md animate-pulse-glow" />
              <span className="text-[10px] text-sepia-light mt-1 font-body whitespace-nowrap">
                {marker.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          onClick={scrollToOverview}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-sepia text-parchment-light font-heading text-lg rounded-sm
                     border border-sepia-light hover:bg-ink transition-colors duration-300 cursor-pointer"
        >
          <span>Bắt đầu hành trình</span>
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-parchment-light to-transparent" />
    </section>
  );
}
