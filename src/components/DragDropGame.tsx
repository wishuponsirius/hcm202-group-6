import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dragCards, milestones } from '../data/games';

interface Props { onWin: () => void; }

export default function DragDropGame({ onWin }: Props) {
  const [dropped, setDropped] = useState<Record<string, string[]>>({});
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [dragOverMilestone, setDragOverMilestone] = useState<string | null>(null);
  const [winCalled, setWinCalled] = useState(false);

  const availableCards = dragCards.filter(
    (c) => !Object.values(dropped).flat().includes(c.id)
  );

  const handleDragStart = (cardId: string) => setDraggingId(cardId);
  const handleDragEnd = () => { setDraggingId(null); setDragOverMilestone(null); };

  const handleDrop = (milestoneId: string) => {
    if (!draggingId) return;
    setDropped((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((k) => {
        updated[k] = updated[k].filter((id) => id !== draggingId);
      });
      updated[milestoneId] = [...(updated[milestoneId] || []), draggingId];
      return updated;
    });
    setDraggingId(null);
    setDragOverMilestone(null);
  };

  const removeFromMilestone = (cardId: string, milestoneId: string) => {
    if (submitted) return;
    setDropped((prev) => ({
      ...prev,
      [milestoneId]: (prev[milestoneId] || []).filter((id) => id !== cardId),
    }));
  };

  const allPlaced = dragCards.every((c) => Object.values(dropped).flat().includes(c.id));

  const getResult = () => {
    let correct = 0;
    dragCards.forEach((card) => {
      if ((dropped[card.correctMilestone] || []).includes(card.id)) correct++;
    });
    return correct;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = getResult();
    // Win condition: ≥ 3/5 correct
    if (correct >= 3 && !winCalled) {
      setWinCalled(true);
      setTimeout(onWin, 1200);
    }
  };

  const handleReset = () => { setDropped({}); setSubmitted(false); setWinCalled(false); };
  const correct = submitted ? getResult() : 0;
  const passed = correct >= 3;

  return (
    <div className="space-y-6">
      <p className="text-sm text-sepia-light font-accent italic text-center">
        Kéo thẻ sự kiện ở dưới, thả vào đúng mốc thời gian tương ứng ở trên.
      </p>

      {/* Milestone drop zones */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {milestones.map((m) => {
          const droppedHere = (dropped[m.id] || []).map(
            (id) => dragCards.find((c) => c.id === id)!
          );
          const isOver = dragOverMilestone === m.id;
          return (
            <div
              key={m.id}
              onDragOver={(e) => { e.preventDefault(); setDragOverMilestone(m.id); }}
              onDragLeave={() => setDragOverMilestone(null)}
              onDrop={() => handleDrop(m.id)}
              className={`min-h-[120px] rounded-lg border-2 border-dashed p-2 flex flex-col gap-2 transition-colors
                ${isOver ? 'border-gold bg-gold/10' : 'border-sepia/30 bg-parchment/40'}`}
            >
              <div className="text-center">
                <span className="text-xs font-heading font-bold text-sepia">{m.label}</span>
                <br />
                <span className="text-[10px] text-sepia-light font-body">{m.period}</span>
              </div>
              {droppedHere.map((card) => {
                const isCorrect = submitted && card.correctMilestone === m.id;
                const isWrong = submitted && card.correctMilestone !== m.id;
                return (
                  <motion.div
                    key={card.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`text-xs p-1.5 rounded text-center leading-snug cursor-pointer select-none
                      ${isCorrect ? 'bg-green-100 border border-green-400 text-green-800'
                      : isWrong ? 'bg-red-100 border border-red-400 text-red-800'
                      : 'bg-cream border border-gold/40 text-ink'}`}
                    onClick={() => removeFromMilestone(card.id, m.id)}
                    title={submitted ? '' : 'Nhấn để gỡ ra'}
                  >
                    {card.event}
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Available draggable cards */}
      {!submitted && (
        <div>
          <p className="text-xs text-sepia-light mb-3 font-body text-center">
            Thẻ chờ — nhấn giữ và kéo:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <AnimatePresence>
              {availableCards.map((card) => (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  draggable
                  onDragStart={() => handleDragStart(card.id)}
                  onDragEnd={handleDragEnd}
                  className={`cursor-grab active:cursor-grabbing station-card p-3 max-w-[200px] text-xs text-center
                    text-ink leading-snug select-none border border-gold/30 hover:border-gold
                    transition-all hover:shadow-md
                    ${draggingId === card.id ? 'opacity-50 scale-95' : ''}`}
                >
                  {card.event}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex justify-center gap-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allPlaced}
            className={`px-6 py-2 font-heading font-bold text-sm rounded transition-all
              ${allPlaced
                ? 'bg-sepia text-parchment-light hover:bg-ink cursor-pointer'
                : 'bg-parchment-dark text-sepia-light cursor-not-allowed'}`}
          >
            {allPlaced ? 'Nộp bài' : `Còn ${availableCards.length} thẻ chưa xếp`}
          </button>
        ) : (
          <div className="text-center space-y-3">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-2xl font-heading font-bold
                ${correct >= 4 ? 'text-green-700' : correct >= 3 ? 'text-gold' : 'text-accent-red'}`}
            >
              {correct}/{dragCards.length} đúng
            </motion.div>
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
                Cần ≥ 3/5 đúng để vượt ải. Thử lại nhé!
              </p>
            )}
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-parchment-dark border border-sepia/30 text-sepia font-body text-sm rounded hover:bg-gold hover:text-ink transition-all cursor-pointer"
            >
              Chơi lại
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
