import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DebateSimulation() {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="my-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 mb-8 relative">
        {/* VS Badge */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#2C1810] text-[#C9A84C] rounded-full items-center justify-center font-heading font-bold text-xl z-10 border-4 border-[#FFF8EE]">
          VS
        </div>

        {/* Left Side */}
        <div className="flex-1 bg-[#8B2500]/10 border-2 border-[#8B2500]/30 p-6 rounded-lg shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B2500]/10 rounded-bl-full -z-10"></div>
          <h4 className="text-xl font-bold font-heading text-[#8B2500] mb-4 text-center border-b border-[#8B2500]/20 pb-2">
            Quan điểm "tả khuynh" giáo điều
          </h4>
          <ul className="space-y-4">
            {[
              "Rập khuôn máy móc lý luận đấu tranh giai cấp của phương Tây vào xã hội thuộc địa",
              "Thủ tiêu Chánh cương, Sách lược vắn tắt",
              "Phê phán đường lối của Nguyễn Ái Quốc là 'hữu khuynh', 'dân tộc chủ nghĩa'",
              "Chịu ảnh hưởng từ Đại hội VI Quốc tế Cộng sản"
            ].map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#8B2500] mr-2 mt-1">✗</span>
                <span className="text-[#2C1810]">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex-1 bg-[#C9A84C]/15 border-2 border-[#C9A84C] p-6 rounded-lg shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-[#C9A84C]/20 rounded-br-full -z-10"></div>
          <h4 className="text-xl font-bold font-heading text-[#704214] mb-4 text-center border-b border-[#C9A84C]/30 pb-2">
            Quan điểm biện chứng thực tiễn – Hồ Chí Minh
          </h4>
          <ul className="space-y-4">
            {[
              "Kiên quyết không rập khuôn máy móc, xuất phát từ thực tiễn xã hội thuộc địa",
              "Đặt nhiệm vụ giải phóng dân tộc lên trên hết",
              "Tạm gác khẩu hiệu cách mạng điền địa",
              "Thành lập Mặt trận Việt Minh, đoàn kết toàn dân tộc"
            ].map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#C9A84C] mr-2 mt-1 font-bold">✓</span>
                <span className="text-[#2C1810] font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowResult(!showResult)}
          className="px-6 py-3 bg-[#704214] text-[#FFF8EE] font-bold rounded-full hover:bg-[#2C1810] transition-colors shadow-lg border border-[#C9A84C]"
        >
          {showResult ? "Ẩn phân tích" : "Hiện phân tích"}
        </button>
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-[#FAF3E3] border-l-4 border-[#C9A84C] p-6 rounded-r-lg shadow-inner mt-4">
              <h5 className="font-heading font-bold text-lg text-[#2C1810] mb-2">Kết quả:</h5>
              <p className="text-[#704214] leading-relaxed italic">
                Hội nghị Trung ương 8 (1941) khẳng định tính đúng đắn, tất thắng của Cương lĩnh chính trị đầu tiên năm 1930, mở đường cho thắng lợi Tổng khởi nghĩa Tháng Tám năm 1945.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
