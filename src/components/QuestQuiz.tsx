import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizData } from '../data/quiz';

export const QuestQuiz = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const question = quizData[currentQuestion];
  const isCorrect = selectedAnswer === question?.correctIndex;

  const handleStart = () => {
    setGameStarted(true);
  };

  const handleSelectAnswer = (index: number) => {
    if (showExplanation) return; // Prevent changing answer after selection
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === question.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(q => q + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRetry = () => {
    // Keep current question, just reset selection
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleRestart = () => {
    setGameStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsComplete(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 font-['Inter',_sans-serif] min-h-[600px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {!gameStarted && !isComplete && (
          <motion.div
            key="start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-[#F5E6C8] border-4 border-double border-[#704214] rounded-lg p-10 text-center shadow-xl"
          >
            <h1 className="text-4xl md:text-6xl font-['Playfair_Display',_serif] font-bold text-[#8B2500] mb-4 tracking-wider">
              THE TURNING POINT QUEST
            </h1>
            <h2 className="text-2xl md:text-3xl font-['Playfair_Display',_serif] text-[#2C1810] mb-8 font-semibold">
              VƯỢT TRẢO BƯỚC NGOẶT
            </h2>
            <p className="text-lg text-[#704214] mb-10 max-w-2xl mx-auto leading-relaxed">
              Hãy kiểm tra kiến thức của bạn về những bước ngoặt lịch sử quan trọng trong hành trình tìm đường cứu nước và lãnh đạo cách mạng của Chủ tịch Hồ Chí Minh.
            </p>
            <button
              onClick={handleStart}
              className="bg-[#704214] hover:bg-[#8B2500] text-[#F5E6C8] font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 font-['Playfair_Display',_serif] text-xl shadow-lg border-2 border-[#C9A84C]"
            >
              BẮT ĐẦU THỬ THÁCH
            </button>
          </motion.div>
        )}

        {gameStarted && !isComplete && question && (
          <motion.div
            key={`q-${currentQuestion}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-[#FFF8EE] border-2 border-[#C9A84C] rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-[#2C1810] p-4 text-[#F5E6C8] flex justify-between items-center border-b-4 border-[#8B2500]">
              <span className="font-['Playfair_Display',_serif] font-bold text-lg">
                {question.stationName} ({currentQuestion + 1}/{quizData.length})
              </span>
              <span className="font-semibold text-[#C9A84C]">
                {question.stationLabel}
              </span>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-['Playfair_Display',_serif] font-bold text-[#2C1810] mb-8 leading-snug">
                {question.question}
              </h3>

              <div className="space-y-4">
                {question.options.map((opt, idx) => {
                  let btnClass = "w-full text-left p-4 rounded border-2 transition-all duration-300 font-medium text-lg ";
                  
                  if (!showExplanation) {
                    btnClass += "bg-[#F5E6C8] border-[#704214] text-[#2C1810] hover:bg-[#C9A84C] hover:text-[#2C1810]";
                  } else {
                    if (idx === question.correctIndex) {
                      btnClass += "bg-green-100 border-green-600 text-green-900";
                    } else if (idx === selectedAnswer) {
                      btnClass += "bg-red-100 border-red-600 text-red-900";
                    } else {
                      btnClass += "bg-gray-100 border-gray-300 text-gray-500 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={showExplanation}
                      onClick={() => handleSelectAnswer(idx)}
                      className={btnClass}
                    >
                      <div className="flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2C1810] text-[#F5E6C8] font-bold mr-4 shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        {opt}
                        {showExplanation && idx === question.correctIndex && (
                          <span className="ml-auto text-green-600 font-bold text-xl">✓</span>
                        )}
                        {showExplanation && idx === selectedAnswer && idx !== question.correctIndex && (
                          <span className="ml-auto text-red-600 font-bold text-xl">✗</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-8"
                  >
                    <div className={`p-4 rounded-md border-l-4 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                      <h4 className={`font-bold mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                        {isCorrect ? '🎉 Chính xác!' : '💡 Chưa chính xác.'}
                      </h4>
                      <p className="text-[#2C1810] italic font-['Lora',_serif]">{question.explanation}</p>
                    </div>

                    <div className="mt-6 flex justify-end">
                      {isCorrect ? (
                        <button
                          onClick={handleNext}
                          className="bg-[#704214] hover:bg-[#8B2500] text-[#F5E6C8] font-bold py-3 px-8 rounded transition-colors"
                        >
                          {currentQuestion < quizData.length - 1 ? 'Tiếp tục ➔' : 'Xem kết quả ➔'}
                        </button>
                      ) : (
                        <button
                          onClick={handleRetry}
                          className="bg-transparent border-2 border-[#704214] text-[#704214] hover:bg-[#704214] hover:text-[#F5E6C8] font-bold py-3 px-8 rounded transition-colors"
                        >
                          ↻ Thử lại
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {isComplete && (
          <motion.div
            key="complete"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center"
          >
            <div className="bg-[#F5E6C8] border-[12px] border-double border-[#C9A84C] p-2 rounded-lg inline-block w-full max-w-2xl mx-auto shadow-2xl relative">
              <div className="border border-[#704214] p-8 md:p-12 bg-[#FFF8EE]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8B2500] text-[#F5E6C8] py-2 px-6 rounded-full font-bold shadow-md border-2 border-[#C9A84C]">
                  Kết quả thử thách
                </div>
                
                <h2 className="text-3xl md:text-5xl font-['Playfair_Display',_serif] font-bold text-[#2C1810] mb-2 uppercase tracking-widest mt-4">
                  CHỨNG NHẬN HOÀN THÀNH
                </h2>
                
                <div className="w-24 h-1 bg-[#C9A84C] mx-auto my-6"></div>
                
                <p className="text-xl text-[#704214] font-['Lora',_serif] mb-6 italic">
                  Đã hoàn thành xuất sắc thử thách THE TURNING POINT QUEST
                </p>
                
                <div className="text-6xl font-bold text-[#8B2500] mb-8 font-['Playfair_Display',_serif]">
                  {score} / {quizData.length}
                </div>

                <div className="bg-[#F5E6C8] border-2 border-[#C9A84C] py-4 px-6 rounded-md inline-block mb-10 shadow-sm">
                  <p className="text-xl font-bold text-[#2C1810]">
                    🏆 Huy hiệu: <span className="text-[#8B2500]">Nhà Nghiên cứu Tư tưởng Trẻ</span>
                  </p>
                </div>
                
                <div>
                  <button
                    onClick={handleRestart}
                    className="bg-transparent hover:bg-[#704214] text-[#704214] hover:text-[#F5E6C8] font-bold py-3 px-8 rounded-full border-2 border-[#704214] transition-all duration-300"
                  >
                    ↻ Làm lại từ đầu
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
