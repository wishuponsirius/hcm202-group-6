import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { decisionScenarios } from '../data/games';

interface Props { onWin: () => void; }

export default function DecisionGame({ onWin }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [winCalled, setWinCalled] = useState(false);

  const scenario = decisionScenarios[currentIdx];
  const maxPoints = decisionScenarios.reduce((sum, s) => sum + s.points, 0);

  const handleChoose = (choiceIdx: number) => {
    if (chosen !== null) return;
    setChosen(choiceIdx);
    if (scenario.choices[choiceIdx].isCorrect) {
      setTotalPoints((p) => p + scenario.points);
    }
  };

  const handleNext = () => {
    if (currentIdx < decisionScenarios.length - 1) {
      setCurrentIdx((i) => i + 1);
      setChosen(null);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setTotalPoints(0);
    setChosen(null);
    setFinished(false);
    setWinCalled(false);
  };

  if (finished) {
    // Win condition: ≥ 2/3 correct (40+ pts out of 60)
    const passed = totalPoints >= 40;
    if (passed && !winCalled) {
      setWinCalled(true);
      setTimeout(onWin, 1200);
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8 space-y-4"
      >
        <div className="text-5xl mb-2">{passed ? '⭐' : '📜'}</div>
        <h3 className="font-heading text-2xl font-bold text-ink">
          {passed ? 'Bản lĩnh kiên cường!' : 'Tiếp tục rèn luyện!'}
        </h3>
        <div className="inline-block bg-parchment border-2 border-gold rounded-lg px-8 py-4">
          <div className="text-4xl font-heading font-bold text-sepia">
            {totalPoints} <span className="text-lg font-body text-sepia-light">/ {maxPoints}</span>
          </div>
          <div className="text-sm text-sepia-light font-body mt-1">Điểm Bản Lĩnh</div>
        </div>
        {passed ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-green-700 font-accent italic"
          >
            ✓ Vượt ải thành công! Đang mở khóa ải tiếp theo…
          </motion.p>
        ) : (
          <p className="text-sm text-accent-red font-accent italic">
            Cần ≥ 40 điểm để vượt ải. Thử lại nhé!
          </p>
        )}
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-parchment-dark border border-sepia/30 text-sepia font-body text-sm rounded hover:bg-gold hover:text-ink transition-all cursor-pointer"
        >
          Thử lại từ đầu
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between text-xs font-body text-sepia-light">
        <span>Tình huống {currentIdx + 1} / {decisionScenarios.length}</span>
        <span className="font-heading font-bold text-sepia">{totalPoints} Điểm Bản Lĩnh</span>
      </div>
      <div className="w-full bg-parchment-dark rounded-full h-1.5">
        <motion.div
          className="bg-gold h-1.5 rounded-full"
          animate={{ width: `${(currentIdx / decisionScenarios.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sepia text-parchment-light rounded-full text-xs font-heading font-bold">
            ⏳ {scenario.year}
          </div>

          <div className="station-card p-4 bg-parchment/60">
            <p className="text-sm font-body text-ink-light leading-relaxed italic">
              {scenario.context}
            </p>
          </div>

          <p className="font-heading text-base md:text-lg font-bold text-ink">
            {scenario.question}
          </p>

          <div className="space-y-3">
            {scenario.choices.map((choice, idx) => {
              const isSelected = chosen === idx;
              const showResult = chosen !== null;
              const isCorrect = choice.isCorrect;

              let borderClass = 'border-sepia/30 hover:border-gold';
              let bgClass = 'bg-parchment/40 hover:bg-parchment/80';
              if (showResult && isSelected && isCorrect) { borderClass = 'border-green-500'; bgClass = 'bg-green-50'; }
              else if (showResult && isSelected && !isCorrect) { borderClass = 'border-red-400'; bgClass = 'bg-red-50'; }
              else if (showResult && isCorrect) { borderClass = 'border-green-400'; bgClass = 'bg-green-50/50'; }

              return (
                <button
                  key={idx}
                  onClick={() => handleChoose(idx)}
                  disabled={chosen !== null}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all
                    ${borderClass} ${bgClass}
                    ${chosen === null ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold mt-0.5
                      ${showResult && isCorrect ? 'border-green-500 text-green-700 bg-green-100'
                        : showResult && isSelected && !isCorrect ? 'border-red-400 text-red-700 bg-red-100'
                        : 'border-sepia/40 text-sepia'}`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm font-body text-ink leading-relaxed">{choice.text}</span>
                  </div>
                  {showResult && isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={`mt-3 ml-9 text-xs font-accent italic leading-relaxed
                        ${isCorrect ? 'text-green-700' : 'text-red-700'}`}
                    >
                      {choice.feedback}
                    </motion.div>
                  )}
                  {showResult && !isSelected && isCorrect && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 ml-9 text-xs font-accent italic text-green-700 leading-relaxed"
                    >
                      ✓ Đây là đáp án đúng
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {chosen !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end"
        >
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-sepia text-parchment-light font-heading font-bold text-sm rounded hover:bg-ink transition-all cursor-pointer"
          >
            {currentIdx < decisionScenarios.length - 1 ? 'Tình huống tiếp theo →' : 'Xem kết quả →'}
          </button>
        </motion.div>
      )}
    </div>
  );
}
