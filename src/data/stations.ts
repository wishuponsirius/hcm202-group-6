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
      'Cội nguồn gia đình và quê hương: Nguyễn Tất Thành sinh ra tại Nghệ An – một vùng đất địa linh nhân kiệt giàu truyền thống yêu nước. Người chịu ảnh hưởng sâu sắc bởi tinh thần yêu nước, thương dân từ nhân cách của người cha (cụ Nguyễn Sinh Sắc) và tấm lòng nhân hậu, tần tảo của người mẹ (cụ Hoàng Thị Loan).',
      'Hoạt động thực tiễn ban đầu: Người sớm bộc lộ tinh thần yêu nước khi tham gia phong trào chống thuế ở Trung Kỳ (1908) và truyền thụ lòng yêu nước, suy nghĩ về vận mệnh nước nhà cho học sinh khi dạy học tại Trường Dục Thanh, Phan Thiết (1910).',
      'Bước ngoặt hướng đi mới: Trước sự thất bại của các phong trào yêu nước chống Pháp đương thời, Người rất khâm phục các vị tiền bối như Phan Bội Châu, Phan Chu Trinh, Hoàng Hoa Thám nhưng sáng suốt phê phán và không tán thành con đường cứu nước của họ. Người quyết định ra đi tìm đường cứu nước mới vào ngày 5-6-1911 với mong muốn tìm hiểu bản chất sức mạnh của kẻ thù và học hỏi kinh nghiệm cách mạng thế giới.',
    ],
    sources: 'Viện Lịch sử Đảng: Hồ Chí Minh – Biên niên tiểu sử, Tập 1, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2016, tr. 28–34; Hồ Chí Minh: Toàn tập, Tập 1, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011.',
    analysis: [
      'Đây là bước đột phá về phương pháp luận nhận thức. Trước sự bế tắc của các phong trào cứu nước đương thời, Người khâm phục tinh thần xả thân của các bậc tiền bối nhưng tỉnh táo phê phán hạn chế của họ: Cầu viện Nhật Bản của cụ Phan Bội Châu là "đuổi hổ cửa trước, rước beo cửa sau"; dựa vào Pháp cải cách của cụ Phan Chu Trinh là "xin giặc rủ lòng thương"; phong trào Yên Thế của cụ Hoàng Hoa Thám tuy dũng cảm nhưng còn mang nặng "cốt cách phong kiến".',
      'Quyết định sang phương Tây là sự lựa chọn duy vật biện chứng xuất phát từ thực tiễn: Muốn đánh bại kẻ thù thì phải đến tận hang ổ của chúng, tìm hiểu tận gốc bản chất của khẩu hiệu "Tự do - Bình đẳng - Bác ái" và học hỏi kinh nghiệm các cuộc cách mạng thế giới.',
    ],
    practicalConnection: 'Bài học về tư duy phản biện, dám bước ra khỏi lối mòn tư duy dành cho thế hệ trẻ ngày nay khi khởi nghiệp và đổi mới sáng tạo.',
    images: [
      { src: '/images/phan-boi-chau-phan-chu-trinh.jpg', alt: 'Phan Bội Châu và Phan Chu Trinh' },
      { src: '/images/mot-so-hoc-sinh-phong-trao-dong-du.jpg', alt: 'Một số học sinh phong trào Đông Du' },
      { src: '/images/ben-cang-nha-rong.webp', alt: 'Bến cảng Nhà Rồng' },
    ],
    interactiveType: 'flip-cards',
  },
  {
    id: 'he-tu-tuong',
    number: 2,
    title: 'BƯỚC NGOẶT HỆ TƯ TƯỞNG',
    subtitle: 'BẾN ĐỖ CỦA CHÂN LÝ THỜI ĐẠI',
    timePeriod: '6-6-1911 đến 30-12-1920',
    theme: 'Hình thành tư tưởng cứu nước, giải phóng dân tộc theo con đường cách mạng vô sản',
    historicalData: [
      'Khảo sát thực tiễn thế giới: Qua hành trình lao động, học tập ở nhiều nước tư bản và thuộc địa từ 1911 đến 1917, Người nhận thức rõ bản chất tội ác của chủ nghĩa thực dân và hình thành thế giới quan mới: nhân dân lao động các nước đều bị áp bức và là bạn của nhau, còn chủ nghĩa đế quốc, thực dân ở đâu cũng là kẻ thù.',
      'Đấu tranh nghị trường: Năm 1919, Người gia nhập Đảng Xã hội Pháp và thay mặt những người Việt Nam yêu nước gửi bản Yêu sách của nhân dân An Nam tới Hội nghị Vécxây đòi các quyền tự do, dân chủ cơ bản cho dân tộc.',
      'Bước ngoặt tư tưởng quyết định: Tháng 7-1920, Người đọc bản Sơ thảo lần thứ nhất những luận cương của Lênin về vấn đề dân tộc thuộc địa, từ đó tìm ra con đường giải phóng dân tộc duy nhất đúng đắn: con đường cách mạng vô sản. Tại Đại hội Tua (12-1920), Người bỏ phiếu tán thành Quốc tế Cộng sản, đồng sáng lập Đảng Cộng sản Pháp và trở thành người cộng sản Việt Nam đầu tiên, đánh dấu bước chuyển từ chủ nghĩa yêu nước sang lập trường cách mạng vô sản.',
    ],
    sources: 'V.I. Lênin: Toàn tập, Tập 41, Nxb. Tiến bộ, Mátxcơva, 1977, tr. 196–203; Hồ Chí Minh: "Con đường dẫn tôi đến chủ nghĩa Lênin", Hồ Chí Minh: Toàn tập, Tập 12, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011, tr. 561–563.',
    analysis: [
      'Đây là bước nhảy vọt về chất trong thế giới quan: Từ một người yêu nước giàu nhiệt huyết trở thành một chiến sĩ cộng sản quốc tế nắm vững vũ khí lý luận.',
      'Người nhận thức rõ cuộc cách mạng tư sản Pháp, Mỹ chỉ là "cách mạng chưa đến nơi", thay thế hình thức bóc lột này bằng hình thức khác. Luận cương của Lênin đã chỉ ra con đường giải phóng duy nhất đúng đắn: Cách mạng giải phóng dân tộc ở thuộc địa phải gắn liền mật thiết với cách mạng vô sản quốc tế; độc lập dân tộc phải gắn liền với chủ nghĩa xã hội.',
    ],
    practicalConnection: 'Tư liệu số hóa tương tác: Bản scan số bài báo L\'Humanité tháng 7-1920 có thể phóng to xem bản dịch và bình chú học thuật.',
    images: [
      { src: '/images/hcm-da-den-nhieu-noi-tren-the-gioi.gif', alt: 'Hành trình khảo sát thực tiễn thế giới' },
      { src: '/images/ban-yeu-sach-cua-nguoi-dan-an-nam.jpg', alt: 'Bản Yêu sách của nhân dân An Nam' },
      { src: '/images/chu-tich-tham-gia-dai-hoi-lan-thu-18.jpg', alt: 'Chủ tịch tham gia Đại hội Tours' },
    ],
    interactiveType: 'document-viewer',
  },
  {
    id: 'duong-loi',
    number: 3,
    title: 'BƯỚC NGOẶT ĐƯỜNG LỐI & TỔ CHỨC',
    subtitle: 'KHAI SINH HỆ THỐNG CƯƠNG LĨNH',
    timePeriod: '31-12-1920 đến 3-2-1930',
    theme: 'Hình thành những nội dung cơ bản tư tưởng về cách mạng Việt Nam',
    historicalData: [
      'Truyền bá chủ nghĩa Mác-Lênin: Người tích cực viết báo (như tờ Le Paria sáng lập năm 1922) và xuất bản tác phẩm Bản án chế độ thực dân Pháp (1925) để thức tỉnh phong trào giải phóng dân tộc ở các nước thuộc địa.',
      'Chuẩn bị về tổ chức và lý luận: Người thành lập tổ chức tiền thân của Đảng Cộng sản là Hội Việt Nam Cách mạng Thanh niên (tháng 6-1925) và ra báo Thanh niên. Năm 1927, Người xuất bản tác phẩm Đường Kách mệnh, vạch rõ các vấn đề cốt lõi về đường lối, lực lượng nòng cốt là liên minh công nông, và khẳng định cách mạng muốn thắng lợi trước hết phải có Đảng Cộng sản lãnh đạo.',
      'Sáng lập Đảng và thông qua Cương lĩnh: Đầu năm 1930, Người chủ trì Hội nghị hợp nhất Đảng và trực tiếp khởi thảo Cương lĩnh chính trị đầu tiên của Đảng. Cương lĩnh vạch rõ phương hướng chiến lược: "làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản", "đánh đổ đế quốc Pháp, phong kiến An Nam và giai cấp tư sản phản cách mạng".',
    ],
    sources: 'Hồ Chí Minh: Đường Kách mệnh, Hồ Chí Minh: Toàn tập, Tập 2, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011, tr. 279–346; Đảng Cộng sản Việt Nam: Văn kiện Đảng Toàn tập, Tập 2, Nxb. Chính trị quốc gia, Hà Nội, 2002, tr. 1–6.',
    analysis: [
      'Đây là bản cương lĩnh thể hiện sự vận dụng sáng tạo chủ nghĩa Mác-Lênin vào giải quyết đúng đắn mối quan hệ giai cấp – dân tộc – quốc tế. Người kết hợp chủ nghĩa Mác-Lênin không chỉ với phong trào công nhân mà còn với phong trào yêu nước Việt Nam.',
      'Giải quyết khoa học mối quan hệ Giai cấp – Dân tộc: Cương lĩnh tháng 2-1930 xác định công nông là gốc của cách mạng, đồng thời chủ trương đoàn kết, liên hiệp với tiểu tư sản, trí thức, trung nông; tranh thủ hoặc trung lập tư sản dân tộc, phú nông, trung tiểu địa chủ. Đường lối này đặt quyền lợi tối cao của dân tộc lên trên hết, tránh biệt phái và cô lập lực lượng cách mạng.',
    ],
    practicalConnection: 'Sơ đồ mạng lưới lực lượng: Biểu đồ mạng tương tác thể hiện hạt nhân lãnh đạo của Đảng và vòng tròn liên minh toàn dân tộc theo Cương lĩnh 1930.',
    images: [
      { src: '/images/ban-an-che-do-thuc-dan-phap.jpg', alt: 'Bản án chế độ thực dân Pháp' },
      { src: '/images/duong-kach-menh.jpg', alt: 'Đường Kách mệnh' },
      { src: '/images/nguyen-ai-quoc-tai-hoi-nghi-thanh-lap-dang-cong-san-vn.jpg', alt: 'Nguyễn Ái Quốc tại hội nghị thành lập Đảng' },
      { src: '/images/nguyen-ai-quoc-giang-bai-tai-lop-huan-luyen.jpg', alt: 'Nguyễn Ái Quốc giảng bài tại lớp huấn luyện' },
    ],
    interactiveType: 'network-diagram',
  },
  {
    id: 'ban-linh',
    number: 4,
    title: 'BƯỚC NGOẶT BẢN LĨNH',
    subtitle: 'KIÊN TRÌ BẢO VỆ CHÂN LÝ THỰC TIỄN',
    timePeriod: '4-2-1930 đến 28-1-1941',
    theme: 'Vượt qua thử thách, giữ vững đường lối phương pháp cách mạng Việt Nam đúng đắn, sáng tạo',
    historicalData: [
      'Thử thách từ sự hiểu lầm: Do ảnh hưởng của khuynh hướng giáo điều, "tả" khuynh xuất hiện từ Đại hội VI của Quốc tế Cộng sản, tư tưởng đặt nhiệm vụ giải phóng dân tộc lên hàng đầu của Người trong Cương lĩnh 1930 bị phê phán sai lầm là "hữu khuynh", "dân tộc chủ nghĩa". Hội nghị Trung ương tháng 10-1930 đã ra án nghị quyết thủ tiêu chánh cương, sách lược này.',
      'Kiên định bảo vệ chân lý: Sau khi thoát khỏi nhà tù Hồng Kông, Người trở lại Liên Xô học tập và nghiên cứu (1934–1938) dưới sự hiểu lầm và tình cảnh không được hoạt động thực tế. Người vẫn luôn giữ vững lập trường, tìm cách liên lạc để xin được trở về nước hoạt động cách mạng.',
      'Trở về nước chỉ đạo chuyển hướng chiến lược: Tháng 1-1941, Người trở về nước trực tiếp chỉ đạo cách mạng. Tại Hội nghị Trung ương Đảng lần thứ 8 (tháng 5-1941) do Người chủ trì, Đảng quyết định đặt nhiệm vụ giải phóng dân tộc lên trên hết, tạm gác khẩu hiệu cách mạng điền địa và thành lập Mặt trận Việt Minh. Sự chuyển hướng chiến lược này thực chất là sự trở về hoàn toàn với quan điểm đúng đắn, sáng tạo trong Cương lĩnh chính trị đầu tiên năm 1930 của Người.',
    ],
    sources: 'Đảng Cộng sản Việt Nam: Văn kiện Đảng Toàn tập, Tập 7 (1940–1945), Nxb. Chính trị quốc gia, Hà Nội, 2000, tr. 110–125; Hội đồng Trung ương biên soạn giáo trình quốc gia: Giáo trình Tư tưởng Hồ Chí Minh, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2021.',
    analysis: [
      'Thể hiện bản lĩnh chính trị kiên cường và lòng trung thành tuyệt đối với chân lý khách quan. Dù chịu sức ép nặng nề từ tổ chức cấp trên, Người kiên quyết không rập khuôn máy móc lý luận đấu tranh giai cấp của phương Tây vào một xã hội thuộc địa.',
      'Hội nghị Trung ương 8 (1941) quyết định đặt nhiệm vụ giải phóng dân tộc lên trên hết, tạm gác khẩu hiệu cách mạng điền địa, thành lập Mặt trận Việt Minh. Đây là sự trở về hoàn toàn và khẳng định tính đúng đắn, tất thắng của Cương lĩnh chính trị đầu tiên năm 1930.',
    ],
    practicalConnection: 'Mô phỏng tranh luận (Debate Simulation): Người dùng đối chiếu giữa quan điểm "tả khuynh" rập khuôn sách vở và quan điểm biện chứng thực tiễn của Hồ Chí Minh.',
    images: [
      { src: '/images/nha-tu-victoria.jpg', alt: 'Nhà tù Victoria – Hồng Kông' },
      { src: '/images/bac-ho-tro-ve-nuoc-sau-30-nam.jpg', alt: 'Bác Hồ trở về nước sau 30 năm bôn ba' },
    ],
    interactiveType: 'debate-simulation',
  },
  {
    id: 'hien-thuc-hoa',
    number: 5,
    title: 'BƯỚC NGOẶT HIỆN THỰC HÓA',
    subtitle: 'ĐỘC LẬP TỰ DO & ĐỊNH HƯỚNG QUÁ ĐỘ',
    timePeriod: '29-1-1941 đến 2-9-1969',
    theme: 'Tư tưởng Hồ Chí Minh tiếp tục phát triển, soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta',
    historicalData: [
      'Giành và bảo vệ chính quyền cách mạng: Người thành lập Mặt trận Việt Minh (1941), sáng lập Đội Việt Nam Tuyên truyền Giải phóng quân (1944) và lãnh đạo Cách mạng Tháng Tám năm 1945 thành công. Ngày 2-9-1945, Người đọc bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa. Trong giai đoạn hiểm nghèo "ngàn cân treo sợi tóc" (1945–1946), Người áp dụng xuất sắc phương châm "Dĩ bất biến ứng vạn biến" để bảo vệ chính quyền non trẻ.',
      'Linh hồn kháng chiến chống Pháp (1946–1954): Người lãnh đạo toàn quốc kháng chiến với đường lối trường kỳ, toàn dân, toàn diện và tự lực cánh sinh, từng bước hoàn thiện lý luận cách mạng dân tộc dân chủ nhân dân.',
      'Xây dựng CNXH và kháng chiến chống Mỹ (1954–1969): Người cùng Đảng lãnh đạo thực hiện đồng thời hai nhiệm vụ chiến lược ở hai miền và từng bước hình thành, hoàn thiện hệ thống quan điểm về chủ nghĩa xã hội cùng con đường quá độ lên chủ nghĩa xã hội ở nước ta. Năm 1966, Người nêu lên chân lý bất hủ của thời đại: "Không có gì quý hơn độc lập, tự do".',
      'Di chúc lịch sử: Trước khi đi xa, Người để lại bản Di chúc – văn kiện lịch sử vô giá kết tinh tinh hoa trí tuệ, tâm hồn, đạo đức cách mạng, định hướng cho toàn Đảng, toàn dân tiếp tục đoàn kết đấu tranh đi đến thắng lợi hoàn toàn.',
    ],
    sources: 'Hồ Chí Minh: Toàn tập, Tập 4, Tập 14, Tập 15, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2011; Di chúc của Chủ tịch Hồ Chí Minh, Nxb. Chính trị quốc gia Sự thật, Hà Nội, 2019.',
    analysis: [
      'Hoàn thiện lý luận về nhà nước của dân, do dân, vì dân và nghệ thuật chỉ đạo chiến lược: Độc lập chủ quyền là nguyên tắc bất di bất dịch (bất biến), nhưng sách lược ngoại giao, sự nhân nhượng và thỏa hiệp có thời điểm thì luôn linh hoạt, mềm dẻo (vạn biến).',
    ],
    practicalConnection: 'Bài học "Dĩ bất biến, ứng vạn biến" là cội nguồn của trường phái "Ngoại giao Cây tre Việt Nam" hiện nay: Vững gốc (độc lập, tự chủ, lợi ích quốc gia – dân tộc), chắc thân (bản lĩnh kiên cường), uyển chuyển cành (linh hoạt, đa phương hóa, đa dạng hóa).',
    images: [
      { src: '/images/the-dang-vien-cua-chu-tich.jpg', alt: 'Thẻ đảng viên của Chủ tịch Hồ Chí Minh' },
    ],
    interactiveType: 'aspiration-wall',
  },
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
    approach: 'Cầu viện Nhật Bản – Phong trào Đông Du',
    limitation: '"Đuổi hổ cửa trước, rước beo cửa sau"',
  },
  {
    name: 'Phan Chu Trinh',
    approach: 'Dựa vào Pháp cải cách – Phong trào Duy Tân',
    limitation: '"Xin giặc rủ lòng thương"',
  },
  {
    name: 'Hoàng Hoa Thám',
    approach: 'Khởi nghĩa vũ trang Yên Thế',
    limitation: 'Còn mang nặng "cốt cách phong kiến"',
  },
  {
    name: 'Nguyễn Tất Thành',
    approach: 'Sang phương Tây tìm hiểu nguồn gốc sức mạnh kẻ thù và học hỏi kinh nghiệm cách mạng thế giới',
    limitation: '',
    isHighlighted: true,
  },
];
