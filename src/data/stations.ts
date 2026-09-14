export interface Station {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  timePeriod: string;
  theme: string;
  historicalData: string[];
  sources: string;
  analysis: string[];
  practicalConnection: string;
  images: { src: string; alt: string }[];
  interactiveType: 'flip-cards' | 'document-viewer' | 'network-diagram' | 'debate-simulation' | 'aspiration-wall';
}

export const stations: Station[] = [
  {
    id: 'huong-di',
    number: 1,
    title: 'BƯỚC NGOẶT HƯỚNG ĐI',
    subtitle: 'VƯỢT THOÁT KHỎI LỐI MÒN CỦA CÁC TIỀN BỐI',
    timePeriod: 'Trước ngày 5-6-1911',
    theme: 'Hình thành tư tưởng yêu nước và có chí hướng tìm đường cứu nước mới',
    historicalData: [
      'Sinh ra tại Nghệ An, chịu ảnh hưởng từ nhân cách thanh cao của thân phụ (cụ Nguyễn Sinh Sắc) và tấm lòng nhân hậu của thân mẫu (cụ Hoàng Thị Loan).',
      'Tham gia phong trào chống thuế Trung Kỳ (1908); dạy học truyền lửa yêu nước tại Trường Dục Thanh, Phan Thiết (1910).',
      'Ngày 5-6-1911: Rời bến cảng Nhà Rồng trên tàu Amiral Latouche-Tréville đi sang phương Tây.'
    ],
    sources: 'Viện Lịch sử Đảng: Hồ Chí Minh – Biên niên tiểu sử, Tập 1, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2016, tr. 28–34; Hồ Chí Minh: Toàn tập, Tập 1, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011.',
    analysis: [
      'Đây là bước đột phá về phương pháp luận nhận thức. Trước sự bế tắc của các phong trào cứu nước đương thời, Người khâm phục tinh thần xả thân của các bậc tiền bối nhưng tỉnh táo phê phán hạn chế của họ: Cầu viện Nhật Bản của cụ Phan Bội Châu là "đuổi hổ cửa trước, rước beo cửa sau"; dựa vào Pháp cải cách của cụ Phan Chu Trinh là "xin giặc rủ lòng thương"; phong trào Yên Thế của cụ Hoàng Hoa Thám tuy dũng cảm nhưng còn mang nặng "cốt cách phong kiến".',
      'Quyết định sang phương Tây là sự lựa chọn duy vật biện chứng xuất phát từ thực tiễn: Muốn đánh bại kẻ thù thì phải đến tận hang ổ của chúng, tìm hiểu tận gốc bản chất của khẩu hiệu "Tự do - Bình đẳng - Bác ái" và học hỏi kinh nghiệm các cuộc cách mạng thế giới.'
    ],
    practicalConnection: 'Bài học về tư duy phản biện, dám bước ra khỏi lối mòn tư duy dành cho thế hệ trẻ ngày nay khi khởi nghiệp và đổi mới sáng tạo.',
    images: [
      { src: '/images/ben-cang-nha-rong.webp', alt: 'Bến cảng Nhà Rồng' },
      { src: '/images/phan-boi-chau-phan-chu-trinh.jpg', alt: 'Phan Bội Châu và Phan Chu Trinh' },
      { src: '/images/mot-so-hoc-sinh-phong-trao-dong-du.jpg', alt: 'Một số học sinh phong trào Đông Du' }
    ],
    interactiveType: 'flip-cards'
  },
  {
    id: 'he-tu-tuong',
    number: 2,
    title: 'BƯỚC NGOẶT HỆ TƯ TƯỞNG',
    subtitle: 'BẾN ĐỖ CỦA CHÂN LÝ THỜI ĐẠI',
    timePeriod: '6-6-1911 đến 30-12-1920',
    theme: 'Hình thành tư tưởng cứu nước, giải phóng dân tộc theo con đường cách mạng vô sản',
    historicalData: [
      'Khảo sát thực tiễn xuyên lục địa (1911–1917) qua Pháp, Mỹ, Anh và các thuộc địa châu Phi.',
      'Ngày 18-6-1919: Thay mặt Hội những người An Nam yêu nước gửi bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles.',
      'Tháng 7-1920: Đọc bản Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I. Lênin trên báo L\'Humanité.',
      'Tháng 12-1920: Tại Đại hội Tours, bỏ phiếu tán thành gia nhập Quốc tế III, tham gia sáng lập Đảng Cộng sản Pháp.'
    ],
    sources: 'V.I. Lênin: Toàn tập, Tập 41, Nxb. Tiến bộ, Mátxcơva, 1977, tr. 196–203; Hồ Chí Minh: "Con đường dẫn tôi đến chủ nghĩa Lênin", Hồ Chí Minh: Toàn tập, Tập 12, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011, tr. 561–563.',
    analysis: [
      'Đây là bước nhảy vọt về chất trong thế giới quan: Từ một người yêu nước giàu nhiệt huyết trở thành một chiến sĩ cộng sản quốc tế nắm vững vũ khí lý luận.',
      'Người nhận thức rõ cuộc cách mạng tư sản Pháp, Mỹ chỉ là "cách mạng chưa đến nơi", thay thế hình thức bóc lột này bằng hình thức khác. Luận cương của Lênin đã chỉ ra con đường giải phóng duy nhất đúng đắn: Cách mạng giải phóng dân tộc ở thuộc địa phải gắn liền mật thiết với cách mạng vô sản quốc tế; độc lập dân tộc phải gắn liền với chủ nghĩa xã hội.'
    ],
    practicalConnection: 'Tư liệu số hóa tương tác: Bản scan số bài báo L\'Humanité tháng 7-1920 có thể phóng to xem bản dịch và bình chú học thuật.',
    images: [
      { src: '/images/hcm-da-den-nhieu-noi-tren-the-gioi.gif', alt: 'Hành trình khảo sát thực tiễn' },
      { src: '/images/ban-yeu-sach-cua-nguoi-dan-an-nam.jpg', alt: 'Bản Yêu sách của nhân dân An Nam' },
      { src: '/images/chu-tich-tham-gia-dai-hoi-lan-thu-18.jpg', alt: 'Chủ tịch tham gia Đại hội Tours' }
    ],
    interactiveType: 'document-viewer'
  },
  {
    id: 'duong-loi',
    number: 3,
    title: 'BƯỚC NGOẶT ĐƯỜNG LỐI & TỔ CHỨC',
    subtitle: 'KHAI SINH HỆ THỐNG CƯƠNG LĨNH',
    timePeriod: '31-12-1920 đến 3-2-1930',
    theme: 'Hình thành những nội dung cơ bản tư tưởng về cách mạng Việt Nam',
    historicalData: [
      'Sáng lập báo Le Paria (1922); xuất bản Bản án chế độ thực dân Pháp (1925).',
      'Tháng 6-1925: Thành lập Hội Việt Nam Cách mạng Thanh niên; năm 1927 xuất bản cuốn Đường Kách mệnh.',
      'Đầu năm 1930: Chủ trì Hội nghị hợp nhất các tổ chức cộng sản tại Hương Cảng, trực tiếp khởi thảo Chánh cương vắn tắt và Sách lược vắn tắt.'
    ],
    sources: 'Hồ Chí Minh: Đường Kách mệnh, Hồ Chí Minh: Toàn tập, Tập 2, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011, tr. 279–346; Đảng Cộng sản Việt Nam: Văn kiện Đảng Toàn tập, Tập 2, Nxb. Chính trị quốc gia, Hà Nội, 2002, tr. 1–6.',
    analysis: [
      'Vận dụng sáng tạo, phi giáo điều quy luật hình thành Đảng: Người kết hợp chủ nghĩa Mác-Lênin không chỉ với phong trào công nhân mà còn với phong trào yêu nước Việt Nam.',
      'Giải quyết khoa học mối quan hệ Giai cấp – Dân tộc: Cương lĩnh tháng 2-1930 xác định công nông là gốc của cách mạng, đồng thời chủ trương đoàn kết, liên hiệp với tiểu tư sản, trí thức, trung nông; tranh thủ hoặc trung lập tư sản dân tộc, phú nông, trung tiểu địa chủ. Đường lối này đặt quyền lợi tối cao của dân tộc lên trên hết, tránh biệt phái và cô lập lực lượng cách mạng.'
    ],
    practicalConnection: 'Sơ đồ mạng lưới lực lượng: Biểu đồ mạng tương tác thể hiện hạt nhân lãnh đạo của Đảng và vòng tròn liên minh toàn dân tộc theo Cương lĩnh 1930.',
    images: [
      { src: '/images/ban-an-che-do-thuc-dan-phap.jpg', alt: 'Bản án chế độ thực dân Pháp' },
      { src: '/images/duong-kach-menh.jpg', alt: 'Đường Kách mệnh' },
      { src: '/images/nguyen-ai-quoc-tai-hoi-nghi-thanh-lap-dang-cong-san-vn.jpg', alt: 'Nguyễn Ái Quốc tại hội nghị thành lập Đảng' },
      { src: '/images/nguyen-ai-quoc-giang-bai-tai-lop-huan-luyen.jpg', alt: 'Nguyễn Ái Quốc giảng bài' }
    ],
    interactiveType: 'network-diagram'
  },
  {
    id: 'ban-linh',
    number: 4,
    title: 'BƯỚC NGOẶT BẢN LĨNH',
    subtitle: 'KIÊN TRÌ BẢO VỆ CHÂN LÝ THỰC TIỄN',
    timePeriod: '4-2-1930 đến 28-1-1941',
    theme: 'Vượt qua thử thách, giữ vững đường lối phương pháp cách mạng Việt Nam đúng đắn, sáng tạo',
    historicalData: [
      'Hội nghị Trung ương tháng 10-1930 ra án nghị quyết thủ tiêu Chánh cương, Sách lược vắn tắt; đường lối của Người bị phê phán sai lầm là "hữu khuynh", "dân tộc chủ nghĩa" do ảnh hưởng của khuynh hướng giáo điều "tả khuynh" từ Đại hội VI Quốc tế Cộng sản.',
      'Giai đoạn 1934–1938: Thoát khỏi nhà tù Hồng Kông, trở lại Liên Xô học tập, nghiên cứu trong hoàn cảnh bị nghi ngại và hạn chế hoạt động thực tế.',
      'Ngày 28-1-1941: Về nước trực tiếp chỉ đạo cách mạng; tháng 5-1941 chủ trì Hội nghị Trung ương 8 tại Pác Bó (Cao Bằng).'
    ],
    sources: 'Đảng Cộng sản Việt Nam: Văn kiện Đảng Toàn tập, Tập 7 (1940–1945), Nxb. Chính trị quốc gia, Hà Nội, 2000, tr. 110–125; Hội đồng Trung ương biên soạn giáo trình quốc gia: Giáo trình Tư tưởng Hồ Chí Minh, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2021.',
    analysis: [
      'Thể hiện bản lĩnh chính trị kiên cường và lòng trung thành tuyệt đối với chân lý khách quan. Dù chịu sức ép nặng nề từ tổ chức cấp trên, Người kiên quyết không rập khuôn máy móc lý luận đấu tranh giai cấp của phương Tây vào một xã hội thuộc địa.',
      'Hội nghị Trung ương 8 (1941) quyết định đặt nhiệm vụ giải phóng dân tộc lên trên hết, tạm gác khẩu hiệu cách mạng điền địa, thành lập Mặt trận Việt Minh. Đây là sự trở về hoàn toàn và khẳng định tính đúng đắn, tất thắng của Cương lĩnh chính trị đầu tiên năm 1930.'
    ],
    practicalConnection: 'Mô phỏng tranh luận (Debate Simulation): Người dùng đối chiếu giữa quan điểm "tả khuynh" rập khuôn sách vở và quan điểm biện chứng thực tiễn của Hồ Chí Minh.',
    images: [
      { src: '/images/nha-tu-victoria.jpg', alt: 'Nhà tù Victoria' },
      { src: '/images/bac-ho-tro-ve-nuoc-sau-30-nam.jpg', alt: 'Bác Hồ trở về nước' }
    ],
    interactiveType: 'debate-simulation'
  },
  {
    id: 'hien-thuc-hoa',
    number: 5,
    title: 'BƯỚC NGOẶT HIỆN THỰC HÓA',
    subtitle: 'ĐỘC LẬP TỰ DO & ĐỊNH HƯỚNG QUÁ ĐỘ',
    timePeriod: '29-1-1941 đến 2-9-1969',
    theme: 'Tư tưởng Hồ Chí Minh tiếp tục phát triển, soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta',
    historicalData: [
      'Lãnh đạo thắng lợi Cách mạng Tháng Tám năm 1945; ngày 2-9-1945 đọc bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa.',
      'Giai đoạn hiểm nghèo 1945–1946: Áp dụng phương châm "Dĩ bất biến, ứng vạn biến" (ký Hiệp định Sơ bộ 6-3 và Tạm ước 14-9).',
      'Lãnh đạo hai cuộc kháng chiến chống Pháp và chống Mỹ; hoàn thiện quan điểm về hai nhiệm vụ chiến lược và con đường quá độ lên CNXH ở nước nông nghiệp lạc hậu; nêu cao chân lý "Không có gì quý hơn độc lập, tự do" (1966).',
      'Bản Di chúc lịch sử (1969) đúc kết bài học về củng cố khối đoàn kết trong Đảng, bồi dưỡng thế hệ cách mạng đời sau và kế hoạch tái thiết đất nước.'
    ],
    sources: 'Hồ Chí Minh: Toàn tập, Tập 4, Tập 14, Tập 15, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011; Di chúc của Chủ tịch Hồ Chí Minh, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2019.',
    analysis: [
      'Hoàn thiện lý luận về nhà nước của dân, do dân, vì dân và nghệ thuật chỉ đạo chiến lược: Độc lập chủ quyền là nguyên tắc bất di bất dịch (bất biến), nhưng sách lược ngoại giao, sự nhân nhượng và thỏa hiệp có thời điểm thì luôn linh hoạt, mềm dẻo (vạn biến).'
    ],
    practicalConnection: 'Liên hệ thực tiễn thời sự: Bài học "Dĩ bất biến, ứng vạn biến" là cội nguồn của trường phái "Ngoại giao Cây tre Việt Nam" hiện nay: Vững gốc (độc lập, tự chủ, lợi ích quốc gia - dân tộc), chắc thân (bản lĩnh kiên cường), uyển chuyển cành (linh hoạt, đa phương hóa, đa dạng hóa).\nBức tường Khát vọng 2045: Khung để sinh viên ghi cam kết hành động cụ thể đóng góp cho mục tiêu Việt Nam hùng cường năm 2045.',
    images: [
      { src: '/images/the-dang-vien-cua-chu-tich.jpg', alt: 'Thẻ đảng viên của Chủ tịch' }
    ],
    interactiveType: 'aspiration-wall'
  }
];

export interface FlipCardItem {
  name: string;
  approach: string;
  limitation: string;
  isHighlighted?: boolean;
}

export const flipCardData: FlipCardItem[] = [
  {
    name: 'Phan Bội Châu',
    approach: 'Cầu viện Nhật Bản',
    limitation: '"Đuổi hổ cửa trước, rước beo cửa sau"'
  },
  {
    name: 'Phan Chu Trinh',
    approach: 'Dựa vào Pháp cải cách',
    limitation: '"Xin giặc rủ lòng thương"'
  },
  {
    name: 'Hoàng Hoa Thám',
    approach: 'Khởi nghĩa vũ trang Yên Thế',
    limitation: 'Còn mang nặng "cốt cách phong kiến"'
  },
  {
    name: 'Nguyễn Tất Thành',
    approach: 'Sang phương Tây tìm hiểu nguồn gốc sức mạnh kẻ thù',
    limitation: '',
    isHighlighted: true
  }
];
