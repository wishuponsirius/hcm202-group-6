export interface QuizQuestion {
  id: number;
  stationName: string;
  stationLabel: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    stationName: 'Ải 1',
    stationLabel: 'Bến Nhà Rồng - Trước 1911',
    question: 'Điểm khác biệt căn bản trong phương pháp tìm đường cứu nước của Nguyễn Tất Thành so với các chí sĩ tiền bối là gì?',
    options: [
      'Tìm kiếm sự viện trợ quân sự từ các nước phong kiến châu Á.',
      'Sang phương Tây để tìm hiểu nguồn gốc sức mạnh kẻ thù và học hỏi kinh nghiệm cách mạng thế giới.',
      'Chờ đợi sự trợ giúp kinh tế từ chính quyền bảo hộ Pháp.',
      'Khôi phục chế độ phong kiến độc lập thông qua khởi nghĩa nông dân.'
    ],
    correctIndex: 1,
    explanation: 'Người nhận rõ cầu viện Nhật là "đuổi hổ cửa trước rước beo cửa sau", dựa vào Pháp là "xin giặc rủ lòng thương". Đi sang phương Tây thể hiện tư duy độc lập tự chủ và nhận thức duy vật thực tiễn.'
  },
  {
    id: 2,
    stationName: 'Ải 2',
    stationLabel: 'Ánh sáng Luận cương - 1911–1920',
    question: 'Luận điểm cốt lõi nào trong Luận cương của Lênin đã thuyết phục Nguyễn Ái Quốc đi theo con đường cách mạng vô sản?',
    options: [
      'Khuyên các thuộc địa đi theo con đường cách mạng tư sản kiểu Pháp và Mỹ.',
      'Yêu cầu thuộc địa chờ đợi giai cấp vô sản ở chính quốc giải phóng cho mình.',
      'Khẳng định mối quan hệ khăng khít giữa cách mạng giải phóng dân tộc ở thuộc địa với cách mạng vô sản ở chính quốc.',
      'Chủ trương chỉ dùng đấu tranh ngoại giao nghị trường, bác bỏ khởi nghĩa vũ trang.'
    ],
    correctIndex: 2,
    explanation: 'Đây là chìa khóa giải phóng triệt để con người và dân tộc, gắn độc lập dân tộc với chủ nghĩa xã hội.'
  },
  {
    id: 3,
    stationName: 'Ải 3',
    stationLabel: 'Cương lĩnh 1930 - 1920–1930',
    question: 'Sự sáng tạo phi giáo điều của Nguyễn Ái Quốc trong Cương lĩnh chính trị đầu tiên (2-1930) thể hiện rõ nhất ở điểm nào?',
    options: [
      'Đặt nhiệm vụ đấu tranh giai cấp và cách mạng ruộng đất lên trước nhiệm vụ giải phóng dân tộc.',
      'Xác định công - nông là gốc, đồng thời đoàn kết, tranh thủ mọi tầng lớp, giai cấp yêu nước khác.',
      'Coi toàn bộ giai cấp tư sản và địa chủ đều là kẻ thù cần đánh đổ ngay tức khắc.',
      'Chỉ dựa vào tầng lớp trí thức để lãnh đạo cách mạng vô sản.'
    ],
    correctIndex: 1,
    explanation: 'Xuất phát từ mâu thuẫn chủ yếu ở nước thuộc địa là mâu thuẫn dân tộc, Người chủ trương xây dựng khối đại đoàn kết toàn dân để chống đế quốc xâm lược.'
  },
  {
    id: 4,
    stationName: 'Ải 4',
    stationLabel: 'Chuyển hướng chiến lược - 1930–1941',
    question: 'Quyết định của Hội nghị Trung ương 8 (5-1941) do Nguyễn Ái Quốc chủ trì có ý nghĩa lý luận như thế nào?',
    options: [
      'Tiếp tục thực hiện đường lối đấu tranh giai cấp triệt để của Đại hội VI Quốc tế Cộng sản.',
      'Trở về hoàn toàn với quan điểm độc lập dân tộc đúng đắn, sáng tạo trong Cương lĩnh tháng 2-1930.',
      'Từ bỏ mục tiêu giành độc lập để tập trung cải cách kinh tế điền địa.',
      'Rập khuôn mô hình Xô viết nông dân tại các vùng giải phóng.'
    ],
    correctIndex: 1,
    explanation: 'Khẳng định tính tất thắng của tư duy thực tiễn trước khuynh hướng giáo điều "tả khuynh", mở đường cho thắng lợi Tổng khởi nghĩa Tháng Tám năm 1945.'
  },
  {
    id: 5,
    stationName: 'Ải 5',
    stationLabel: 'Nghệ thuật lãnh đạo - 1941–1969',
    question: 'Phương châm "Dĩ bất biến, ứng vạn biến" được Hồ Chí Minh vận dụng trong giai đoạn 1945–1946 mang bản chất gì?',
    options: [
      'Sẵn sàng nhượng bộ vô điều kiện mục tiêu độc lập chủ quyền để giữ hòa bình.',
      'Kiên quyết giữ vững mục tiêu độc lập dân tộc (bất biến), nhưng linh hoạt mềm dẻo về sách lược đối ngoại (vạn biến).',
      'Đơn phương cắt đứt mọi liên hệ ngoại giao với các nước lớn.',
      'Áp dụng một khuôn mẫu chính sách cố định cho mọi thời kỳ cách mạng.'
    ],
    correctIndex: 1,
    explanation: 'Giúp bảo vệ chính quyền non trẻ trước thế gọng kìm "thù trong giặc ngoài", kéo dài thời gian chuẩn bị cho cuộc kháng chiến trường kỳ.'
  }
];
