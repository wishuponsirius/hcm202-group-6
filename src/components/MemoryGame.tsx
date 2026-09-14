import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { memoryPairs } from '../data/games';

interface Props { onWin: () => void; }

interface CardState {
  id: number;
  pairId: number;
  text: string;
  side: 'A' | 'B';
  isFlipped: boolean;
  isMatched: boolean;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildCards(): CardState[] {
  const cards: CardState[] = [];
  memoryPairs.forEach((p) => {
    cards.push({ id: -1, pairId: p.pairId, text: p.cardA, side: 'A', isFlipped: false, isMatched: false });
    cards.push({ id: -1, pairId: p.pairId, text: p.cardB, side: 'B', isFlipped: false, isMatched: false });
  });
  return shuffle(cards).map((c, i) => ({ ...c, id: i }));
}

const TIMER_SECONDS = 60;

export default function MemoryGame({ onWin }: Props) {
  const [cards, setCards] = useState<CardState[]>(buildCards);
  const [selected, setSelected] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [checking, setChecking] = useState(false);
  const [winCalled, setWinCalled] = useState(false);

  const matchedCount = cards.filter((c) => c.isMatched).length / 2;
  const totalPairs = memoryPairs.length;

  // Timer
  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft <= 0) { setFinished(true); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [started, finished, timeLeft]);

  // Check win
  useEffect(() => {
    if (started && matchedCount === totalPairs) {
      setFinished(true);
      if (!winCalled) {
        setWinCalled(true);
        setTimeout(onWin, 1200);
      }
    }
  }, [matchedCount, started, totalPairs, winCalled, onWin]);

  const handleFlip = useCallback((cardId: number) => {
    if (!started || checking || finished) return;
    const card = cards.find((c) => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;
    if (selected.length === 1 && selected[0] === cardId) return;

    const newSelected = [...selected, cardId];
    setCards((prev) => prev.map((c) => (c.id === cardId ? { ...c, isFlipped: true } : c)));

    if (newSelected.length === 2) {
      setSelected([]);
      setChecking(true);
      const [a, b] = newSelected.map((id) => cards.find((c) => c.id === id)!);
      const isMatch = a.pairId === b.pairId && a.side !== b.side;

      setTimeout(() => {
        if (isMatch) {
          setCards((prev) => prev.map((c) => c.id === a.id || c.id === b.id ? { ...c, isMatched: true } : c));
        } else {
          setCards((prev) => prev.map((c) => c.id === a.id || c.id === b.id ? { ...c, isFlipped: false } : c));
        }
        setChecking(false);
      }, 900);
    } else {
      setSelected(newSelected);
    }
  }, [started, checking, finished, selected, cards]);

  const handleReset = () => {
    setCards(buildCards());
    setSelected([]);
    setTimeLeft(TIMER_SECONDS);
    setStarted(false);
    setFinished(false);
    setChecking(false);
    setWinCalled(false);
  };

  const won = matchedCount === totalPairs;
  const timerPct = (timeLeft / TIMER_SECONDS) * 100;
  const timerColor = timeLeft > 30 ? 'bg-green-500' : timeLeft > 10 ? 'bg-gold' : 'bg-red-500';

  if (!started) {
    return (
      <div className="text-center space-y-5 py-8">
        <div className="text-5xl">🃏</div>
        <h3 className="font-heading text-xl font-bold text-ink">Lật Thẻ Ký Ức</h3>
        <p className="text-sm text-sepia-light font-body max-w-sm mx-auto">
          Bàn cờ 12 thẻ úp (6 cặp). Lật mở để ghép đúng <strong>Sự kiện</strong> với <strong>Địa danh / Ý nghĩa</strong> tương ứng trong vòng 60 giây.
        </p>
        <button
          onClick={() => setStarted(true)}
          className="px-8 py-3 bg-sepia text-parchment-light font-heading font-bold rounded hover:bg-ink transition-all cursor-pointer"
        >
          Bắt đầu ⏱
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8 space-y-4"
      >
        <div className="text-5xl">{won ? '🏆' : '⏰'}</div>
        <h3 className="font-heading text-2xl font-bold text-ink">
          {won ? 'Ký ức vẹn toàn!' : 'Hết giờ!'}
        </h3>
        <div className="inline-block bg-parchment border-2 border-gold rounded-lg px-8 py-4">
          <div className="text-4xl font-heading font-bold text-sepia">
            {matchedCount}<span className="text-lg font-body text-sepia-light"> / {totalPairs} cặp</span>
          </div>
        </div>
        {won ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-green-700 font-accent italic"
          >
            ✓ Vượt ải thành công! Đang mở khóa huy hiệu…
          </motion.p>
        ) : (
          <p className="text-sm text-accent-red font-accent italic">
            Cần ghép đủ 6 cặp trong 60 giây. Thử lại nhé!
          </p>
        )}
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-parchment-dark border border-sepia/30 text-sepia font-body text-sm rounded hover:bg-gold hover:text-ink transition-all cursor-pointer"
        >
          Chơi lại
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-body text-sepia-light">{matchedCount}/{totalPairs} cặp</span>
        <span className={`text-sm font-heading font-bold ${timeLeft <= 10 ? 'text-red-600' : 'text-sepia'}`}>
          ⏱ {timeLeft}s
        </span>
      </div>
      <div className="w-full bg-parchment-dark rounded-full h-1.5">
        <motion.div className={`${timerColor} h-1.5 rounded-full transition-colors`} animate={{ width: `${timerPct}%` }} />
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
        {cards.map((card) => (
          <motion.button
            key={card.id}
            onClick={() => handleFlip(card.id)}
            className={`relative h-24 md:h-28 rounded-lg border-2 font-body text-xs leading-snug
              transition-all cursor-pointer overflow-hidden
              ${card.isMatched
                ? 'border-green-400 bg-green-50 cursor-default'
                : card.isFlipped
                ? 'border-gold bg-cream'
                : 'border-sepia/30 bg-parchment hover:border-gold hover:bg-parchment/80'}`}
            whileHover={!card.isFlipped && !card.isMatched ? { scale: 1.03 } : {}}
            whileTap={!card.isFlipped && !card.isMatched ? { scale: 0.97 } : {}}
          >
            <AnimatePresence mode="wait">
              {card.isFlipped || card.isMatched ? (
                <motion.div
                  key="front"
                  initial={{ rotateY: 90 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: 90 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute inset-0 flex items-center justify-center p-2 text-center
                    ${card.isMatched ? 'text-green-700' : 'text-ink'}`}
                >
                  {card.text}
                </motion.div>
              ) : (
                <motion.div
                  key="back"
                  initial={{ rotateY: 90 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-2xl opacity-30">⭐</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
