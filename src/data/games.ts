// ─── Drag & Drop Game Data ────────────────────────────────────────────────────
export interface DragCard {
  id: string;
  event: string;
  correctMilestone: string;
}

export interface Milestone {
  id: string;
  label: string;
  period: string;
}

export const dragCards: DragCard[] = [
  {
    id: 'dc1',
    event: 'Đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình (02/09/1945)',
    correctMilestone: 'milestone-5',
  },
  {
    id: 'dc2',
    event: 'Bỏ phiếu tán thành Quốc tế III tại Đại hội Tours (12/1920)',
    correctMilestone: 'milestone-2',
  },
  {
    id: 'dc3',
    event: 'Thành lập Hội Việt Nam Cách mạng Thanh niên (6/1925)',
    correctMilestone: 'milestone-3',
  },
  {
    id: 'dc4',
    event: 'Tham gia phong trào chống thuế Trung Kỳ (1908)',
    correctMilestone: 'milestone-1',
  },
  {
    id: 'dc5',
    event: 'Trở về Pác Bó sau 30 năm bôn ba (01/1941)',
    correctMilestone: 'milestone-4',
  },
];

export const milestones: Milestone[] = [
  { id: 'milestone-1', label: 'Mốc 1', period: '1890 – 1911' },
  { id: 'milestone-2', label: 'Mốc 2', period: '1911 – 1920' },
  { id: 'milestone-3', label: 'Mốc 3', period: '1920 – 1930' },
  { id: 'milestone-4', label: 'Mốc 4', period: '1930 – 1941' },
  { id: 'milestone-5', label: 'Mốc 5', period: '1941 – 1969' },
];

// ─── Decision Game Data ───────────────────────────────────────────────────────
export interface DecisionChoice {
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface DecisionScenario {
  id: number;
  year: string;
  context: string;
  question: string;
  choices: DecisionChoice[];
  points: number;
}

export const decisionScenarios: DecisionScenario[] = [
  {
    id: 1,
    year: 'Năm 1911',
    context: 'Phong trào Đông Du (Phan Bội Châu) và Duy Tân (Phan Chu Trinh) đều đang bế tắc. Đất nước chìm trong ách thực dân Pháp.',
    question: 'Để tìm đường cứu nước, bạn chọn hướng đi nào?',
    choices: [
      {
        text: 'Sang Nhật Bản xin viện trợ vũ khí đánh Pháp.',
        isCorrect: false,
        feedback: 'Dựa vào đế quốc khác là "đuổi hổ cửa trước, rước beo cửa sau". Con đường này đã thất bại với phong trào Đông Du.',
      },
      {
        text: 'Sang phương Tây tìm hiểu cội nguồn sức mạnh đối phương và học hỏi các trào lưu tiến bộ.',
        isCorrect: true,
        feedback: 'Đúng! Đây là tư duy độc lập, sáng tạo: muốn đánh bại kẻ thù thì phải hiểu rõ kẻ thù. (+20 Điểm Bản Lĩnh)',
      },
    ],
    points: 20,
  },
  {
    id: 2,
    year: 'Năm 1920',
    context: 'Nguyễn Ái Quốc đọc Luận cương của Lênin về vấn đề dân tộc và thuộc địa trên báo L\'Humanité tại Paris.',
    question: 'Đứng trước văn kiện của Lênin về vấn đề dân tộc thuộc địa, bạn chọn con đường nào cho cách mạng Việt Nam?',
    choices: [
      {
        text: 'Đi theo con đường cách mạng vô sản gắn liền giải phóng dân tộc với chủ nghĩa xã hội.',
        isCorrect: true,
        feedback: 'Đúng! Luận cương của Lênin chỉ ra con đường duy nhất đúng đắn: độc lập dân tộc phải gắn liền với chủ nghĩa xã hội. (+20 Điểm Bản Lĩnh)',
      },
      {
        text: 'Chờ đợi cải cách dân chủ từ chính quyền thực dân Pháp.',
        isCorrect: false,
        feedback: 'Sai. Chờ đợi sự "ban phát" từ kẻ thực dân là ảo tưởng. Kinh nghiệm đấu tranh nghị trường đã cho thấy điều này.',
      },
    ],
    points: 20,
  },
  {
    id: 3,
    year: 'Năm 1941',
    context: 'Sau 30 năm bôn ba, Người trở về Pác Bó. Chiến tranh thế giới thứ hai đang leo thang. Tình thế trong nước thay đổi căn bản.',
    question: 'Nhiệm vụ nào cần đặt lên hàng đầu lúc này?',
    choices: [
      {
        text: 'Đấu tranh giai cấp, tịch thu ruộng đất của địa chủ ngay lập tức để giải quyết mâu thuẫn trong nước.',
        isCorrect: false,
        feedback: 'Sai. Đây là tư duy giáo điều "tả khuynh", không phù hợp thực tiễn Việt Nam lúc bấy giờ khi mâu thuẫn dân tộc là chủ yếu.',
      },
      {
        text: 'Tạm gác mâu thuẫn giai cấp, đặt nhiệm vụ giải phóng dân tộc lên trên hết, thành lập Mặt trận Việt Minh.',
        isCorrect: true,
        feedback: 'Đúng! Đây là sự chuyển hướng chiến lược đúng đắn, trở về với tinh thần Cương lĩnh 1930 và dẫn đến thắng lợi Cách mạng Tháng Tám 1945. (+20 Điểm Bản Lĩnh)',
      },
    ],
    points: 20,
  },
];

// ─── Memory Card Game Data ────────────────────────────────────────────────────
export interface MemoryPair {
  pairId: number;
  cardA: string; // Event / Landmark
  cardB: string; // Meaning / Location
}

export const memoryPairs: MemoryPair[] = [
  {
    pairId: 1,
    cardA: 'Trường Dục Thanh (1910)',
    cardB: 'Nơi gieo mầm lý tưởng yêu nước cho học trò',
  },
  {
    pairId: 2,
    cardA: 'Đại hội Tours (12/1920)',
    cardB: 'Trở thành người cộng sản Việt Nam đầu tiên',
  },
  {
    pairId: 3,
    cardA: 'Tác phẩm Đường Kách mệnh (1927)',
    cardB: '"Cách mệnh trước hết phải có Đảng"',
  },
  {
    pairId: 4,
    cardA: 'Cột mốc 108 Pác Bó (01/1941)',
    cardB: 'Trở về Tổ quốc sau 30 năm bôn ba',
  },
  {
    pairId: 5,
    cardA: 'Tuyên ngôn Độc lập (02/09/1945)',
    cardB: 'Khai sinh nước Việt Nam Dân chủ Cộng hòa',
  },
  {
    pairId: 6,
    cardA: 'Báo Le Paria (1922)',
    cardB: 'Thức tỉnh tinh thần đấu tranh của các dân tộc thuộc địa',
  },
];
