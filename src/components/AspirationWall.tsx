import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Commitment {
  id: string;
  name: string;
  message: string;
  rotation: number;
}

const DEFAULT_COMMITMENTS: Commitment[] = [
  {
    id: '1',
    name: 'Sinh viên FPT',
    message: 'Nghiên cứu và ứng dụng công nghệ AI phục vụ phát triển nông nghiệp bền vững.',
    rotation: -2,
  },
  {
    id: '2',
    name: 'Sinh viên FPT',
    message: 'Góp phần xây dựng hệ thống giáo dục số, đưa tri thức đến vùng sâu vùng xa.',
    rotation: 1.5,
  }
];

export const AspirationWall = () => {
  const [commitments, setCommitments] = useState<Commitment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('aspirationWall2045');
    if (saved) {
      try {
        setCommitments(JSON.parse(saved));
      } catch (e) {
        setCommitments(DEFAULT_COMMITMENTS);
      }
    } else {
      setCommitments(DEFAULT_COMMITMENTS);
      localStorage.setItem('aspirationWall2045', JSON.stringify(DEFAULT_COMMITMENTS));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newCommitment: Commitment = {
      id: Date.now().toString(),
      name: name.trim() || 'Người ẩn danh',
      message: message.trim(),
      rotation: Math.random() * 6 - 3, // -3 to 3 degrees
    };

    const updated = [newCommitment, ...commitments];
    setCommitments(updated);
    localStorage.setItem('aspirationWall2045', JSON.stringify(updated));
    setName('');
    setMessage('');
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 font-['Inter',_sans-serif] text-[#2C1810]">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-['Playfair_Display',_serif] font-bold text-[#8B2500] mb-4">
          Bức tường Khát vọng 2045
        </h2>
        <p className="text-lg md:text-xl text-[#704214] font-medium">
          Ghi cam kết hành động cụ thể đóng góp cho mục tiêu Việt Nam hùng cường năm 2045
        </p>
      </div>

      <div className="bg-[#FFF8EE] border-2 border-[#C9A84C] rounded-lg p-6 mb-10 shadow-md">
        <h3 className="text-xl font-['Playfair_Display',_serif] font-bold text-[#704214] mb-3">
          Bài học "Dĩ bất biến, ứng vạn biến"
        </h3>
        <p className="text-[#2C1810] leading-relaxed">
          Bài học "Dĩ bất biến, ứng vạn biến" là cội nguồn của trường phái "Ngoại giao Cây tre Việt Nam" hiện nay: Vững gốc (độc lập, tự chủ, lợi ích quốc gia - dân tộc), chắc thân (bản lĩnh kiên cường), uyển chuyển cành (linh hoạt, đa phương hóa, đa dạng hóa).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <form onSubmit={handleSubmit} className="bg-[#F5E6C8] border border-[#704214] p-6 rounded-md shadow-lg sticky top-8">
            <h3 className="text-2xl font-['Playfair_Display',_serif] font-bold text-[#2C1810] mb-6 border-b border-[#C9A84C] pb-2">
              Gửi cam kết của bạn
            </h3>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold text-[#704214] mb-2">
                Họ và tên (Không bắt buộc)
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#FFF8EE] border border-[#C9A84C] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#8B2500] text-[#2C1810]"
                placeholder="Nhập tên của bạn..."
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-[#704214] mb-2">
                Cam kết hành động *
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full bg-[#FFF8EE] border border-[#C9A84C] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#8B2500] text-[#2C1810] resize-none"
                placeholder="Tôi cam kết..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#704214] hover:bg-[#8B2500] text-[#F5E6C8] font-bold py-3 px-4 rounded transition-colors duration-300 font-['Playfair_Display',_serif] text-lg uppercase tracking-wider"
            >
              Đính lên tường
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 bg-[#2C1810] p-6 md:p-10 rounded-xl shadow-inner relative overflow-hidden min-h-[500px]">
          {/* Wood texture background effect */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#704214] via-[#2C1810] to-[#000000]"></div>
          
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
            <AnimatePresence>
              {commitments.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="relative p-6 shadow-xl"
                  style={{ 
                    backgroundColor: '#F5E6C8',
                    rotate: `${item.rotation}deg`,
                    boxShadow: '3px 5px 10px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Pin decoration */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#8B2500] shadow-sm border border-[#2C1810]">
                    <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full bg-white opacity-40"></div>
                  </div>
                  
                  <p className="mt-4 mb-6 text-[#2C1810] font-['Lora',_serif] text-lg leading-relaxed italic">
                    "{item.message}"
                  </p>
                  
                  <p className="text-right text-[#704214] font-bold text-sm border-t border-[#C9A84C] pt-2">
                    — {item.name}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
