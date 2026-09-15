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
    title: 'MỐC 1: TRƯỚC NGÀY 05/06/1911',
    subtitle: 'GIAI ĐOẠN KHỞI NGUỒN',
    timePeriod: '1890 - 1911',
    theme: 'Chủ đề: Hình thành tư tưởng yêu nước và chí hướng tìm đường cứu nước mới',
    historicalData: [
      '**Cội nguồn gia đình & quê hương:** Sinh ra tại vùng đất địa linh nhân kiệt Nghệ An. Thừa hưởng lòng yêu nước thương dân sâu sắc từ thân phụ (cụ Phó bảng Nguyễn Sinh Sắc) và đức tính nhân hậu, tần tảo của thân mẫu (cụ Hoàng Thị Loan).',
      '**Hoạt động thực tiễn ban đầu:** Tham gia phong trào chống thuế Trung Kỳ (1908). Giảng dạy và gieo mầm lý tưởng yêu nước cho học trò tại Trường Dục Thanh, Phan Thiết (1910).',
      '**Bước ngoặt hướng đi mới:** Khâm phục tinh thần các bậc tiền bối (Phan Bội Châu, Phan Chu Trinh, Hoàng Hoa Thám) nhưng nhận thấy hạn chế trong con đường của họ. Quyết định sang phương Tây ngày 05/06/1911 để tìm hiểu nguồn gốc sức mạnh của đối phương và học hỏi phong trào tiến bộ quốc tế.'
    ],
    sources: 'Trong bài báo "Nguyễn Tất Thành và hành trình lịch sử" (tác giả Vũ Trung Kiên, đăng trên Báo Đồng Nai điện tử ngày 04/06/2020)',
    analysis: [
      '"Tôi muốn ra nước ngoài, xem nước Pháp và các nước khác. Sau khi xem xét họ làm như thế nào, tôi sẽ trở về giúp đồng bào ta."'
    ],
    practicalConnection: '',
    images: [
      { src: '/images/phan-boi-chau-phan-chu-trinh.jpg', alt: 'Phan Bội Châu và Phan Chu Trinh' },
      { src: '/images/mot-so-hoc-sinh-phong-trao-dong-du.jpg', alt: 'Học sinh phong trào Đông Du' },
      { src: '/images/ben-cang-nha-rong.webp', alt: 'Bến cảng Nhà Rồng' },
    ],
    interactiveType: 'flip-cards',
  },
  {
    id: 'he-tu-tuong',
    number: 2,
    title: 'MỐC 2: 06/06/1911 – 30/12/1920',
    subtitle: 'BƯỚC NGOẶT THẾ GIỚI QUAN',
    timePeriod: '1911 - 1920',
    theme: 'Chủ đề: Tìm thấy con đường giải phóng dân tộc theo cách mạng vô sản',
    historicalData: [
      '**Khảo sát thực tiễn hoàn cầu (1911 – 1917):** Bôn ba qua nhiều nước tư bản và thuộc địa, nhận rõ bản chất áp bức của chủ nghĩa thực dân. Xác định thế giới quan: Nhân dân lao động toàn cầu đều là anh em; chủ nghĩa thực dân, đế quốc ở đâu cũng là kẻ thù.',
      '**Đấu tranh nghị trường quốc tế (1919):** Gia nhập Đảng Xã hội Pháp. Thay mặt Hội những người Việt Nam yêu nước gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Vécxây đòi quyền tự do, dân chủ bình đẳng.',
      '**Tìm thấy chân lý cứu nước (1920):** Tháng 7/1920: Đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa của V.I. Lênin – tìm ra con đường cứu nước duy nhất đúng đắn: Cách mạng vô sản. Tháng 12/1920: Tham dự Đại hội Tours, bỏ phiếu tán thành Quốc tế III, đồng sáng lập Đảng Cộng sản Pháp; trở thành người cộng sản Việt Nam đầu tiên.'
    ],
    sources: '',
    analysis: [
      'Đánh dấu bước chuyển biến quyết định: Từ một người yêu nước trở thành người chiến sĩ cộng sản.'
    ],
    practicalConnection: '',
    images: [
      { src: '/images/hcm-da-den-nhieu-noi-tren-the-gioi.gif', alt: 'Hành trình khảo sát thực tiễn' },
      { src: '/images/ban-yeu-sach-cua-nguoi-dan-an-nam.jpg', alt: 'Bản Yêu sách của nhân dân An Nam' },
      { src: '/images/chu-tich-tham-gia-dai-hoi-lan-thu-18.jpg', alt: 'Đại hội Tours (1920)' },
    ],
    interactiveType: 'document-viewer',
  },
  {
    id: 'duong-loi',
    number: 3,
    title: 'MỐC 3: 31/12/1920 – 03/02/1930',
    subtitle: 'CHUẨN BỊ LÝ LUẬN & TỔ CHỨC',
    timePeriod: '1920 - 1930',
    theme: 'Chủ đề: Hình thành những nội dung cơ bản tư tưởng về cách mạng Việt Nam',
    historicalData: [
      '**Truyền bá chủ nghĩa Mác – Lênin:** Sáng lập báo Le Paria (Người cùng khổ - 1922) và xuất bản tác phẩm kinh điển Bản án chế độ thực dân Pháp (1925). Khơi dậy ý thức phản kháng và thức tỉnh tinh thần độc lập ở các nước thuộc địa.',
      '**Chuẩn bị nền tảng tổ chức & kim chỉ nam lý luận:** Thành lập Hội Việt Nam Cách mạng Thanh niên (06/1925) và xuất bản báo Thanh niên. Tác phẩm Đường Kách mệnh (1927) định hình nguyên tắc: Cách mạng là sự nghiệp của quần chúng công - nông, và tiên quyết phải có Đảng Cộng sản vững mạnh dẫn đường.',
      '**Thành lập Đảng & Cương lĩnh chính trị đầu tiên:** Đầu năm 1930: Chủ trì Hội nghị hợp nhất các tổ chức cộng sản tại Cửu Long (Hương Cảng). Trực tiếp khởi thảo Chánh cương vắn tắt, Sách lược vắn tắt: Vận dụng sáng tạo chủ nghĩa Mác – Lênin để giải quyết hài hòa bài toán Giai cấp – Dân tộc – Thời đại.'
    ],
    sources: '',
    analysis: [
      '"Cách mệnh trước hết phải có cái gì? Trước hết phải có Đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi." — (Đường Kách mệnh)'
    ],
    practicalConnection: '',
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
    title: 'MỐC 4: 04/02/1930 – 28/01/1941',
    subtitle: 'KIÊN ĐỊNH BẢN LĨNH',
    timePeriod: '1930 - 1941',
    theme: 'Chủ đề: Vượt qua thử thách, kiên định giữ vững đường lối cách mạng đúng đắn, sáng tạo',
    historicalData: [
      '**Thử thách từ nhận thức giáo điều, "tả khuynh":** Tư tưởng ưu tiên độc lập dân tộc của Người bị phê phán là "hữu khuynh", "dân tộc chủ nghĩa" do tác động khuynh hướng tả khuynh từ Đại hội VI Quốc tế Cộng sản. Hội nghị Trung ương tháng 10/1930 thông qua nghị quyết thủ tiêu Chánh cương, Sách lược vắn tắt.',
      '**Bản lĩnh kiên trì bảo vệ chân lý:** Vượt qua chuỗi ngày giam cầm tại Hồng Kông, trở lại Liên Xô học tập và nghiên cứu (1934 – 1938) trong điều kiện bị hạn chế hoạt động trực tiếp. Luôn bền bỉ giữ vững niềm tin, tìm mọi cơ hội để trở về Tổ quốc lãnh đạo đấu tranh.',
      '**Trở về nước và chuyển hướng chiến lược lịch sử:** Ngày 28/01/1941, Người trở về Pác Bó sau 30 năm xa cách. Chủ trì Hội nghị Trung ương 8 (05/1941): Quyết định đặt quyền lợi giải phóng dân tộc lên trên hết, thành lập Mặt trận Việt Minh — hiện thực hóa trọn vẹn tinh thần Cương lĩnh năm 1930.'
    ],
    sources: '',
    analysis: [
      'Bản lĩnh kiên định bảo vệ đường lối độc lập dân tộc gắn liền với chủ nghĩa xã hội trước những quan điểm giáo điều, biệt phái.'
    ],
    practicalConnection: '',
    images: [
      { src: '/images/nha-tu-victoria.jpg', alt: 'Nhà tù Victoria – Hồng Kông' },
      { src: '/images/bac-ho-tro-ve-nuoc-sau-30-nam.jpg', alt: 'Bác Hồ trở về nước sau 30 năm bôn ba' },
    ],
    interactiveType: 'debate-simulation',
  },
  {
    id: 'hien-thuc-hoa',
    number: 5,
    title: 'MỐC 5: 29/01/1941 – 02/09/1969',
    subtitle: 'HOÀN THIỆN & ĐỈNH CAO THỰC TIỄN',
    timePeriod: '1941 - 1969',
    theme: 'Chủ đề: Tư tưởng Hồ Chí Minh tiếp tục phát triển, soi đường cho sự nghiệp cách mạng vẻ vang',
    historicalData: [
      '**Giành và bảo vệ chính quyền (1941 – 1946):** Lập Đội Việt Nam Tuyên truyền Giải phóng quân (1944), lãnh đạo thắng lợi Cách mạng Tháng Tám năm 1945. Đọc Tuyên ngôn Độc lập (02/09/1945); vận dụng nhuần nhuyễn phương châm "Dĩ bất biến, ứng vạn biến" vượt qua giai đoạn "ngàn cân treo sợi tóc".',
      '**Kháng chiến chống thực dân Pháp (1946 – 1954):** Lãnh đạo đường lối toàn dân, toàn diện, trường kỳ, tự lực cánh sinh; làm nên chiến thắng Điện Biên Phủ "lừng lẫy năm châu, chấn động địa cầu".',
      '**Xây dựng CNXH ở miền Bắc & Giải phóng miền Nam (1954 – 1969):** Hoàn thiện lý luận về con đường quá độ lên CNXH phù hợp đặc thù Việt Nam. Năm 1966, đúc kết chân lý thời đại: "Không có gì quý hơn độc lập, tự do".',
      '**Bản Di chúc lịch sử:** Kết tinh trí tuệ, tình cảm và đạo đức cách mạng mẫu mực; để lại lời dặn dò thiêng liêng về tinh thần đoàn kết, xây dựng Đảng và tương lai đất nước.'
    ],
    sources: 'Chủ tịch Hồ Chí Minh (Lời kêu gọi đồng bào và chiến sĩ cả nước, 17/7/1966)',
    analysis: [
      '"Không có gì quý hơn độc lập, tự do!"'
    ],
    practicalConnection: '',
    images: [
      { src: '/images/the-dang-vien-cua-chu-tich.jpg', alt: 'Thẻ đảng viên của Chủ tịch Hồ Chí Minh' },
    ],
    interactiveType: 'aspiration-wall',
  },
];
