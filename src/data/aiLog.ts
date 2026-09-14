export interface AiLogEntry {
  category: string;
  prompt: string;
  model: string;
  verification: string;
}

export const aiLogData: AiLogEntry[] = [
  {
    category: "Brainstorm khung bước ngoặt",
    prompt: "Hãy đóng vai trò chuyên gia lịch sử Đảng, phản biện cấu trúc 5 giai đoạn để làm bật trục 'bước ngoặt lý luận' thay vì chỉ kể niên biểu sự kiện",
    model: "ChatGPT / Gemini",
    verification: "Sinh viên tự đối chiếu khung gợi ý với Giáo trình Tư tưởng Hồ Chí Minh (Bộ GD&ĐT), loại bỏ các diễn dịch mang tính võ đoán."
  },
  {
    category: "Phản biện học thuật (Red Teaming)",
    prompt: "Đóng vai đại biểu Quốc tế Cộng sản Đại hội VI chỉ trích Cương lĩnh 1930 của Nguyễn Ái Quốc để tìm lỗ hổng lập luận phản bác",
    model: "Gemini",
    verification: "Dùng để tái hiện mâu thuẫn lý luận giữa giáo điều và thực tiễn, xác thực lại văn bản từ Văn kiện Đảng Toàn tập (Tập 2 và 7)."
  },
  {
    category: "Thiết kế Game trắc nghiệm",
    prompt: "Gợi ý 5 câu hỏi trắc nghiệm tình huống tập trung vào ý nghĩa bước ngoặt lịch sử, kèm giải thích lý luận sâu sắc",
    model: "Claude / ChatGPT",
    verification: "Sinh viên hiệu đính lại câu từ, tự tra cứu chính xác số tập, số trang theo bộ Hồ Chí Minh: Toàn tập (Nxb. Chính trị quốc gia Sự thật) làm nguồn dẫn."
  },
  {
    category: "Dựng giao diện & Code mẫu",
    prompt: "Tạo cấu trúc component HTML/Tailwind CSS cho dạng hiển thị scrollytelling và flip card tương tác",
    model: "v0 / DeepSeek",
    verification: "Toàn bộ văn bản và tư liệu học thuật do sinh viên tự biên soạn và đưa vào mã nguồn, AI chỉ đóng vai trò hỗ trợ định dạng hiển thị."
  }
];
