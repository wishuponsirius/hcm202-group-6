import { aiLogData } from '../data/aiLog';

export const AiIntegrityAppendix = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 font-['Inter',_sans-serif]">
      <div className="bg-[#FFF8EE] border border-[#C9A84C] rounded-lg p-6 md:p-10 shadow-lg relative overflow-hidden">
        {/* Decorative corner pieces */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8B2500] m-2"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#8B2500] m-2"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#8B2500] m-2"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8B2500] m-2"></div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display',_serif] font-bold text-[#2C1810] mb-2 uppercase tracking-wide">
            Phụ lục minh bạch ứng dụng AI
          </h2>
          <h3 className="text-xl md:text-2xl font-['Playfair_Display',_serif] text-[#8B2500] font-semibold italic mb-6">
            AI Log & Liêm chính học thuật
          </h3>
          
          <div className="max-w-4xl mx-auto bg-[#F5E6C8] p-5 rounded border border-[#C9A84C]">
            <p className="text-[#704214] text-lg leading-relaxed text-justify md:text-center">
              AI được sử dụng cho brainstorming, mô phỏng tranh luận học thuật, thiết kế câu hỏi trắc nghiệm, và hỗ trợ giao diện/code. Toàn bộ nội dung học thuật và nguồn dẫn do sinh viên tự biên soạn và xác thực.
            </p>
          </div>
        </div>

        {/* Mobile View: Cards */}
        <div className="block md:hidden space-y-6">
          {aiLogData.map((entry, idx) => (
            <div key={idx} className="bg-[#F5E6C8] border border-[#704214] rounded-md p-4 shadow-sm">
              <div className="mb-3">
                <span className="font-bold text-[#8B2500] text-sm uppercase">Hạng mục triển khai</span>
                <p className="text-[#2C1810] font-semibold mt-1">{entry.category}</p>
              </div>
              <div className="mb-3">
                <span className="font-bold text-[#8B2500] text-sm uppercase">Nội dung Prompt đưa vào AI</span>
                <p className="text-[#2C1810] mt-1 bg-[#FFF8EE] p-2 rounded text-sm font-['Lora',_serif] italic border border-[#C9A84C]">
                  "{entry.prompt}"
                </p>
              </div>
              <div className="mb-3">
                <span className="font-bold text-[#8B2500] text-sm uppercase">Mô hình AI</span>
                <p className="text-[#2C1810] mt-1 font-mono text-sm bg-white inline-block px-2 py-1 rounded border border-gray-300">
                  {entry.model}
                </p>
              </div>
              <div>
                <span className="font-bold text-[#8B2500] text-sm uppercase">Phương pháp kiểm chứng & Liêm chính</span>
                <p className="text-[#2C1810] mt-1 text-sm leading-relaxed">
                  {entry.verification}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse bg-[#F5E6C8] border-2 border-[#704214] shadow-md">
            <thead>
              <tr className="bg-[#704214] text-[#F5E6C8]">
                <th className="p-4 text-left font-['Playfair_Display',_serif] text-lg w-1/5 border border-[#704214]">Hạng mục triển khai</th>
                <th className="p-4 text-left font-['Playfair_Display',_serif] text-lg w-1/3 border border-[#704214]">Nội dung Prompt đưa vào AI</th>
                <th className="p-4 text-left font-['Playfair_Display',_serif] text-lg w-1/6 border border-[#704214]">Mô hình AI sử dụng</th>
                <th className="p-4 text-left font-['Playfair_Display',_serif] text-lg border border-[#704214]">Phương pháp đối chiếu kiểm chứng & Đảm bảo liêm chính</th>
              </tr>
            </thead>
            <tbody>
              {aiLogData.map((entry, idx) => (
                <tr key={idx} className="border-b border-[#C9A84C] hover:bg-[#FFF8EE] transition-colors">
                  <td className="p-4 text-[#2C1810] font-semibold align-top border-r border-[#C9A84C]">
                    {entry.category}
                  </td>
                  <td className="p-4 align-top border-r border-[#C9A84C]">
                    <div className="bg-[#FFF8EE] p-3 rounded text-sm text-[#2C1810] font-['Lora',_serif] italic border border-[#E5D3B3] shadow-inner">
                      "{entry.prompt}"
                    </div>
                  </td>
                  <td className="p-4 align-top border-r border-[#C9A84C]">
                    <span className="inline-block bg-white text-[#704214] font-mono text-sm px-2 py-1 rounded border border-[#C9A84C] shadow-sm whitespace-nowrap">
                      {entry.model}
                    </span>
                  </td>
                  <td className="p-4 text-[#2C1810] align-top text-sm leading-relaxed">
                    {entry.verification}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
