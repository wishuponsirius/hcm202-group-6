import { useState } from 'react';
import { flipCardData } from '../data/stations';

export default function FlipCard() {
  const [flippedIndices, setFlippedIndices] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedIndices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold font-heading text-[#2C1810] text-center mb-6">So sánh phương pháp cứu nước</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {flipCardData.map((item, index) => {
          const isFlipped = flippedIndices[index];
          return (
            <div 
              key={index}
              className={`flip-card h-[200px] cursor-pointer ${item.isHighlighted ? 'ring-2 ring-[#C9A84C] rounded-lg shadow-lg' : ''}`}
              onClick={() => toggleFlip(index)}
            >
              <div className={`flip-card-inner w-full h-full transition-transform duration-500 ${isFlipped ? 'flipped' : ''}`}>
                <div className={`flip-card-front rounded-lg flex flex-col items-center justify-center p-4 border border-[#704214]/20 ${item.isHighlighted ? 'bg-[#FFF8EE]' : 'parchment-bg'}`}>
                  <h4 className="text-xl font-bold font-heading text-[#704214] text-center">{item.name}</h4>
                  <p className="text-sm text-[#2C1810]/60 mt-2 italic">Nhấn để xem</p>
                </div>
                <div className={`flip-card-back rounded-lg flex flex-col items-center justify-center p-6 border border-[#704214]/20 ${item.isHighlighted ? 'bg-[#FFF8EE]' : 'bg-[#F5E6C8]'}`}>
                  <h5 className="font-bold text-[#2C1810] mb-2 text-center text-sm sm:text-base">{item.approach}</h5>
                  <p className="text-xs sm:text-sm italic text-[#704214] text-center">"{item.limitation}"</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
