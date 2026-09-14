import { stations } from './data/stations';
import HeroSection from './components/HeroSection';
import StationOverview from './components/StationOverview';
import HistoricalStation from './components/HistoricalStation';
import JourneyMap from './components/JourneyMap';
import GameHub from './components/GameHub';
import { AiIntegrityAppendix } from './components/AiIntegrityAppendix';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Floating journey navigation */}
      <JourneyMap />

      {/* Section 1: Hero / Opening */}
      <HeroSection />

      {/* Section 2: Journey Overview */}
      <StationOverview />

      {/* Section 3: Five Historical Stations */}
      <div className="relative">
        {/* Vertical route line connecting stations - desktop only */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
          <div className="w-px h-full border-l-2 border-dashed border-gold/20" />
        </div>

        {stations.map((station) => (
          <HistoricalStation
            key={station.id}
            station={station}
          />
        ))}
      </div>

      {/* Section 4: Game Hub */}
      <section id="game-hub" className="py-16 md:py-24 px-4 md:px-8 bg-parchment-dark/30">
        <div className="max-w-4xl mx-auto">
          <GameHub />
        </div>
      </section>

      {/* Section 5: AI Integrity Appendix */}
      <section id="ai-appendix" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AiIntegrityAppendix />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-parchment-light py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold/40" />
            <div className="compass-rose w-8 h-8 opacity-40" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h3 className="font-heading text-xl text-parchment mb-2">
            Hành trình tư tưởng qua các bước ngoặt lịch sử
          </h3>
          <p className="font-accent text-sm text-parchment-dark italic mb-4">
            Bài tập lớn môn HCM202 — Tư tưởng Hồ Chí Minh
          </p>
          <p className="text-xs text-parchment-dark/60">
            © 2025 — Dự án học thuật sinh viên. Nội dung dựa trên nguồn tài liệu chính thống.
          </p>
        </div>
      </footer>
    </div>
  );
}
