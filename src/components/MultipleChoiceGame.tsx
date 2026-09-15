import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

const QUESTIONS = [
  {
    id: 1,
    question: 'Điền từ còn thiếu vào lời kêu gọi thiêng liêng của Chủ tịch Hồ Chí Minh (năm 1966): "Không có gì quý hơn [...], [...]"',
    options: ['Tiền tài, danh vọng', 'Độc lập, tự do', 'Hòa bình, hạnh phúc', 'Ấm no, hạnh phúc'],
    correctAnswer: 'Độc lập, tự do'
  },
  {
    id: 2,
    question: 'Trong tác phẩm Đường Kách mệnh (1927), Bác khẳng định: "Cách mệnh trước hết phải có cái gì? Trước hết phải có [...]"',
    options: ['Quân đội tinh nhuệ', 'Vũ khí hiện đại', 'Đảng cách mệnh', 'Sự giúp đỡ quốc tế'],
    correctAnswer: 'Đảng cách mệnh'
  },
  {
    id: 3,
    question: 'Ngày 05/06/1911, Bác Hồ đã ra đi tìm đường cứu nước tại địa danh nào?',
    options: ['Bến cảng Hải Phòng', 'Bến cảng Tiên Sa', 'Bến cảng Nhà Rồng', 'Bến cảng Cam Ranh'],
    correctAnswer: 'Bến cảng Nhà Rồng'
  }
];

export default function MultipleChoiceGame({ onComplete }: Props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  
  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isFinished = currentQuestionIndex >= QUESTIONS.length;

  const handleSelect = (option: string) => {
    if (selectedAnswer !== null) return; // Prevent clicking multiple times while animating
    
    setSelectedAnswer(option);

    if (option === currentQuestion.correctAnswer) {
      setIsError(false);
      setTimeout(() => {
        setSelectedAnswer(null);
        if (currentQuestionIndex === QUESTIONS.length - 1) {
          onComplete();
        } else {
          setCurrentQuestionIndex(prev => prev + 1);
        }
      }, 1000);
    } else {
      setIsError(true);
      setTimeout(() => {
        setSelectedAnswer(null);
        setIsError(false);
      }, 1000);
    }
  };

  if (isFinished) {
    return (
      <div className="text-center p-8">
        <h3 className="font-heading text-2xl text-ink font-bold mb-4">Tuyệt vời!</h3>
        <p className="font-body text-ink-light">Bạn đã trả lời đúng tất cả câu hỏi.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center">
      {/* Progress */}
      <div className="flex gap-2 mb-6">
        {QUESTIONS.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-2 w-12 rounded-full transition-colors duration-300 ${
              idx < currentQuestionIndex ? 'bg-gold' : 
              idx === currentQuestionIndex ? 'bg-gold/50 animate-pulse' : 'bg-sepia/20'
            }`} 
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full bg-parchment-light border-2 border-sepia/20 p-6 md:p-8 rounded-lg shadow-sm"
        >
          <span className="text-sm font-accent text-gold italic mb-2 block text-center">
            Câu hỏi {currentQuestionIndex + 1} / {QUESTIONS.length}
          </span>
          <h3 className="text-lg md:text-xl font-heading text-ink font-bold mb-8 text-center leading-relaxed">
            {currentQuestion.question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = isSelected && !isError;
              const isWrong = isSelected && isError;

              let btnClass = "p-4 rounded border-2 font-body text-sm md:text-base transition-all duration-200 text-left cursor-pointer ";
              
              if (!selectedAnswer) {
                btnClass += "border-sepia/30 bg-parchment hover:border-gold hover:bg-gold/10 text-ink";
              } else if (isCorrect) {
                btnClass += "border-green-600 bg-green-100 text-green-900";
              } else if (isWrong) {
                btnClass += "border-red-600 bg-red-100 text-red-900 animate-shake";
              } else {
                btnClass += "border-sepia/10 bg-parchment/50 text-ink/40 cursor-not-allowed";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(option)}
                  disabled={selectedAnswer !== null}
                  className={btnClass}
                >
                  <span className="inline-block w-6 font-heading font-bold text-sepia-light/70 mr-2">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {option}
                  
                  {isCorrect && (
                    <span className="float-right text-green-600 font-bold">✓</span>
                  )}
                  {isWrong && (
                    <span className="float-right text-red-600 font-bold">✗</span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 text-sm font-accent italic text-sepia-light">
        Chọn đáp án đúng nhất để vượt qua thử thách này.
      </div>
    </div>
  );
}
