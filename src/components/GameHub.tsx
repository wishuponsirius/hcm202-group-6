import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DragDropGame from './DragDropGame';
import DecisionGame from './DecisionGame';
import MemoryGame from './MemoryGame';

// ─── Stage definitions ────────────────────────────────────────────────────────
interface Stage {
  id: number;
  label: string;
  title: string;
  description: string;
  icon: string;
  mapX: string; // percentage across the map SVG
  winHint: string;
}

const stages: Stage[] = [
  {
    id: 0,
    label: 'Ải 1',
    title: 'Kéo – Thả',
    description: 'Nối sự kiện lịch sử vào đúng mốc thời gian.',
    icon: '🗂️',
    mapX: '18%',
    winHint: 'Cần ≥ 3/5 đúng',
  },
  {
    id: 1,
    label: 'Ải 2',
    title: 'Vượt Ải Lịch Sử',
    description: 'Nhập vai đồng hành cùng Bác, chọn quyết định đúng đắn.',
    icon: '⚔️',
    mapX: '50%',
    winHint: 'Cần ≥ 40/60 điểm',
  },
  {
    id: 2,
    label: 'Ải 3',
    title: 'Lật Thẻ Ký Ức',
    description: 'Ghép đúng 6 cặp sự kiện & ý nghĩa trong 60 giây.',
    icon: '🃏',
    mapX: '82%',
    winHint: 'Ghép đủ 6 cặp trong 60s',
  },
];

// ─── Map pin component ────────────────────────────────────────────────────────
function MapPin({
  stage,
  status,
  isActive,
  onClick,
}: {
  stage: Stage;
  status: 'locked' | 'unlocked' | 'cleared';
  isActive: boolean;
  onClick: () => void;
}) {
  const isLocked = status === 'locked';
  const isCleared = status === 'cleared';

  return (
    <div
      className="absolute -translate-x-1/2 flex flex-col items-center gap-1"
      style={{ left: stage.mapX, top: '50%', transform: 'translateX(-50%) translateY(-50%)' }}
    >
      {/* Pin label above */}
      <div className={`text-xs font-heading font-bold mb-1 transition-colors
        ${isActive ? 'text-sepia' : isCleared ? 'text-green-700' : 'text-sepia-light'}`}>
        {stage.label}
      </div>

      {/* The pin button */}
      <motion.button
        onClick={isLocked ? undefined : onClick}
        disabled={isLocked}
        animate={isActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={isActive ? { duration: 1.4, repeat: Infinity, ease: 'easeInOut' } : {}}
        whileHover={!isLocked ? { scale: 1.1 } : {}}
        whileTap={!isLocked ? { scale: 0.95 } : {}}
        className={`w-14 h-14 rounded-full border-3 flex flex-col items-center justify-center
          shadow-md transition-all relative
          ${isLocked
            ? 'bg-parchment-dark border-sepia/30 cursor-not-allowed opacity-60'
            : isCleared
            ? 'bg-green-100 border-green-500 cursor-pointer'
            : isActive
            ? 'bg-parchment border-gold cursor-pointer ring-2 ring-gold/40 ring-offset-1'
            : 'bg-parchment border-sepia/50 cursor-pointer hover:border-gold'}`}
      >
        <span className="text-xl leading-none">{isLocked ? '🔒' : isCleared ? '✓' : stage.icon}</span>
      </motion.button>

      {/* Win hint below */}
      <div className={`text-[10px] font-body text-center max-w-[90px] leading-tight transition-colors
        ${isActive ? 'text-sepia' : 'text-sepia-light/70'}`}>
        {stage.winHint}
      </div>
    </div>
  );
}

// ─── Badge Ceremony ────────────────────────────────────────────────────────────
function BadgeCeremony({ onRestart }: { onRestart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12 flex flex-col items-center gap-6 text-center"
    >
      {/* Radiating glow */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-gold/20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-28 h-28 rounded-full bg-gold/30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        {/* Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="relative w-24 h-24 rounded-full bg-gradient-to-br from-gold via-[#C9A84C] to-[#8B6914]
            border-4 border-gold shadow-xl flex items-center justify-center z-10"
        >
          <span className="text-4xl">🏅</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-2"
      >
        <h3 className="font-heading text-3xl font-bold text-ink">Huy hiệu đã mở khóa!</h3>
        <div className="inline-block px-5 py-2 border-2 border-gold rounded-full bg-gold/10">
          <span className="font-heading font-bold text-sepia text-lg">⭐ Chiến sĩ HCM202 ⭐</span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="font-accent italic text-sepia-light max-w-sm text-sm leading-relaxed"
      >
        Bạn đã hoàn thành Hành trình tư tưởng qua cả 3 bước ngoặt lịch sử. Chúc mừng!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="flex gap-3"
      >
        <button
          onClick={onRestart}
          className="px-6 py-2 bg-parchment-dark border border-sepia/30 text-sepia font-body text-sm rounded hover:bg-gold hover:text-ink transition-all cursor-pointer"
        >
          Chơi lại từ đầu
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Main GameHub ─────────────────────────────────────────────────────────────
export default function GameHub() {
  // Which stages are cleared: Set of stage ids
  const [cleared, setCleared] = useState<Set<number>>(new Set());
  const [activeStage, setActiveStage] = useState<number>(0);
  const [allDone, setAllDone] = useState(false);

  const getStatus = (stageId: number): 'locked' | 'unlocked' | 'cleared' => {
    if (cleared.has(stageId)) return 'cleared';
    if (stageId === 0 || cleared.has(stageId - 1)) return 'unlocked';
    return 'locked';
  };

  const handleWin = (stageId: number) => {
    setCleared((prev) => {
      const next = new Set(prev);
      next.add(stageId);
      if (next.size === stages.length) {
        setTimeout(() => setAllDone(true), 600);
      } else {
        // Auto-advance to next stage after a short delay
        setTimeout(() => setActiveStage(stageId + 1), 1500);
      }
      return next;
    });
  };

  const handleRestart = () => {
    setCleared(new Set());
    setActiveStage(0);
    setAllDone(false);
  };

  return (
    <div className="w-full">
      {/* ── Section header ── */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-gold/40" />
          <span className="text-xs uppercase tracking-widest text-gold font-body font-semibold">
            Góc Trải Nghiệm
          </span>
          <div className="h-px w-12 bg-gold/40" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink text-shadow-vintage">
          Hành Trình 3 Ải
        </h2>
        <p className="font-accent italic text-sepia-light mt-2 text-sm md:text-base max-w-xl mx-auto">
          Vượt qua cả 3 ải thử thách để nhận huy hiệu <strong className="text-sepia">Chiến sĩ HCM202</strong>.
        </p>
      </div>

      {/* ── Quest Map ── */}
      <div className="station-card p-4 md:p-6 mb-6 overflow-hidden">
        {/* Parchment-tinted map area */}
        <div className="relative h-36 bg-gradient-to-r from-parchment via-cream to-parchment rounded-lg
          border border-gold/20 overflow-hidden">

          {/* Faint aged map grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
            {[20, 40, 60, 80].map((x) => (
              <line key={`v${x}`} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%" stroke="#704214" strokeWidth="1" />
            ))}
            {[33, 66].map((y) => (
              <line key={`h${y}`} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke="#704214" strokeWidth="1" />
            ))}
          </svg>

          {/* Route path */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            {/* Base faint path */}
            <line x1="18" y1="50" x2="82" y2="50"
              stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.3" vectorEffect="non-scaling-stroke" />

            {/* Segment 1→2: animate when stage 0 cleared */}
            <motion.line
              x1="18" y1="50" x2="50" y2="50"
              stroke="#8B2500" strokeWidth="2.5" strokeDasharray="3 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: cleared.has(0) ? 1 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              vectorEffect="non-scaling-stroke"
            />

            {/* Segment 2→3: animate when stage 1 cleared */}
            <motion.line
              x1="50" y1="50" x2="82" y2="50"
              stroke="#8B2500" strokeWidth="2.5" strokeDasharray="3 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: cleared.has(1) ? 1 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Stage pins */}
          {stages.map((stage) => (
            <MapPin
              key={stage.id}
              stage={stage}
              status={getStatus(stage.id)}
              isActive={activeStage === stage.id && !allDone && !cleared.has(stage.id)}
              onClick={() => setActiveStage(stage.id)}
            />
          ))}

          {/* Completion star at end */}
          <motion.div
            className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl"
            animate={allDone ? { scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] } : {}}
            transition={{ duration: 1, repeat: allDone ? Infinity : 0, repeatDelay: 1.5 }}
          >
            {allDone ? '🏅' : '🏁'}
          </motion.div>
        </div>

        {/* Stage selector tabs (text) */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {stages.map((stage) => {
            const status = getStatus(stage.id);
            const isLocked = status === 'locked';
            const isCleared = status === 'cleared';
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => !isLocked && setActiveStage(stage.id)}
                disabled={isLocked}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-body transition-all border
                  ${isLocked ? 'border-sepia/20 text-sepia-light/50 cursor-not-allowed'
                  : isCleared ? 'border-green-400 bg-green-50 text-green-700 cursor-pointer'
                  : isActive ? 'border-gold bg-gold/10 text-sepia font-semibold cursor-pointer'
                  : 'border-sepia/30 text-sepia hover:border-gold cursor-pointer'}`}
              >
                <span>{isLocked ? '🔒' : isCleared ? '✓' : stage.icon}</span>
                <span>{stage.label}: {stage.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Game panel or Badge ceremony ── */}
      <AnimatePresence mode="wait">
        {allDone ? (
          <motion.div
            key="badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="station-card p-6 md:p-10"
          >
            <BadgeCeremony onRestart={handleRestart} />
          </motion.div>
        ) : (
          <motion.div
            key={`stage-${activeStage}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="station-card p-6 md:p-8"
          >
            {/* Stage header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold/20">
              <span className="text-2xl">{stages[activeStage].icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-lg font-bold text-ink">{stages[activeStage].label}: {stages[activeStage].title}</h3>
                  {cleared.has(activeStage) && (
                    <span className="text-xs bg-green-100 border border-green-400 text-green-700 px-2 py-0.5 rounded-full font-body">
                      ✓ Đã vượt
                    </span>
                  )}
                </div>
                <p className="text-xs text-sepia-light font-body">{stages[activeStage].description}</p>
              </div>
            </div>

            {/* The game */}
            {activeStage === 0 && (
              <DragDropGame onWin={() => handleWin(0)} />
            )}
            {activeStage === 1 && (
              <DecisionGame onWin={() => handleWin(1)} />
            )}
            {activeStage === 2 && (
              <MemoryGame onWin={() => handleWin(2)} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
