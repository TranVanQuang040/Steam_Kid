import { 
  Code2, 
  Gamepad2, 
  Bot, 
  BrainCircuit, 
  CheckCircle2, 
  Users, 
  Rocket, 
  Lightbulb,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Chương trình', href: '#programs' },
  { name: 'Tại sao chọn chúng tôi', href: '#why-us' },
  { name: 'Lộ trình', href: '#roadmap' },
  { name: 'Cảm nhận', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export const PROGRAMS = [
  {
    id: 'blockly',
    title: 'Lập Trình Khối Cơ Bản',
    subtitle: '(Blockly, Tynker, Scratch)',
    age: '5 - 9 tuổi',
    description: 'Trẻ làm quen với tư duy máy tính thông qua thao tác "kéo-thả" khối lệnh đầy màu sắc. Tự tay thiết kế game, hoạt hình và kể câu chuyện của riêng mình.',
    skills: ['Tư duy logic', 'Thuật toán cơ bản', 'Sáng tạo nghệ thuật'],
    icon: Code2,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    id: 'game3d',
    title: 'Lập Trình Game 3D',
    subtitle: '(Minecraft & Roblox Education)',
    age: '8 - 14 tuổi',
    description: 'Học lập trình (Python, Lua) ngay trên chính tựa game trẻ yêu thích! Xây dựng thế giới kỳ quan trong Minecraft hoặc thiết kế bản đồ trong Roblox.',
    skills: ['Tư duy không gian 3D', 'Thiết kế đồ họa', 'Logic lập trình nâng cao'],
    icon: Gamepad2,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    id: 'robotics',
    title: 'Chế Tạo & Lập Trình Robot',
    subtitle: '(Robotics)',
    age: '6 - 15 tuổi',
    description: 'Kết hợp giữa phần cứng và phần mềm. Trẻ tự tay lắp ráp các mô hình Robot (Lego Education, Arduino...) và lập trình để Robot di chuyển, vượt chướng ngại vật.',
    skills: ['Vận động tinh', 'Kỹ năng cơ khí', 'Cảm biến & Vật lý'],
    icon: Bot,
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-600'
  },
  {
    id: 'ai',
    title: 'Trí Tuệ Nhân Tạo Cho Trẻ Em',
    subtitle: '(AI for Kids)',
    age: '10 - 15 tuổi',
    description: 'Đưa trẻ đón đầu xu hướng tương lai. Tìm hiểu cách máy học (Machine Learning), nhận diện hình ảnh, giọng nói và tạo ứng dụng AI đơn giản.',
    skills: ['Tư duy công nghệ hiện đại', 'Phân tích dữ liệu', 'Ứng dụng AI có đạo đức'],
    icon: BrainCircuit,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600'
  }
];

export const REASONS = [
  {
    title: 'Project-Based Learning',
    description: 'Học qua dự án thực tế, mỗi buổi học là một sản phẩm mang về.',
    icon: Rocket
  },
  {
    title: 'Đội ngũ chuyên gia',
    description: 'Giỏi chuyên môn, am hiểu tâm lý trẻ em, truyền cảm hứng.',
    icon: Users
  },
  {
    title: 'Môi trường sáng tạo',
    description: 'Cơ sở vật chất hiện đại, đầy đủ thiết bị Robotics, máy tính cấu hình cao.',
    icon: Lightbulb
  },
  {
    title: 'Phát triển toàn diện (4C)',
    description: 'Giao tiếp, Hợp tác, Tư duy phản biện và Sáng tạo.',
    icon: CheckCircle2
  }
];

export const ROADMAP = [
  { step: 1, title: 'Khám phá', age: '5-7 tuổi', content: 'Blockly, Tynker, Lắp ráp Robot cơ bản.' },
  { step: 2, title: 'Nền tảng', age: '8-10 tuổi', content: 'Lập trình Scratch, Robotics có điều khiển.' },
  { step: 3, title: 'Ứng dụng', age: '10-12 tuổi', content: 'Minecraft Education, Roblox Coding (Lua).' },
  { step: 4, title: 'Nâng cao', age: '13+ tuổi', content: 'AI for Kids, Python, Robotics tự động hóa.' }
];

export const TESTIMONIALS = [
  {
    quote: "Từ ngày học Scratch và Roblox, bé nhà tôi không còn cắm mặt vào xem Youtube vô bổ nữa, mà toàn rủ ba mẹ chơi game do chính tay bé lập trình.",
    author: "Mẹ bé Nam (9 tuổi)",
    image: "https://picsum.photos/seed/mother-avatar/100/100"
  },
  {
    quote: "Cứ cuối tuần là cháu háo hức đi học Robotics. Rất cảm ơn trung tâm!",
    author: "Bố bé Minh (11 tuổi)",
    image: "https://picsum.photos/seed/father-avatar/100/100"
  }
];

export const FAQS = [
  {
    question: "Bé chưa biết dùng máy tính có học được không?",
    answer: "Hoàn toàn được! Các môn như Blockly, Tynker được thiết kế riêng cho người mới bắt đầu, giúp bé làm quen với chuột và bàn phím rất dễ dàng."
  },
  {
    question: "Chơi game như Minecraft/Roblox thì có giống như học không?",
    answer: "Đây là phiên bản Education (Giáo dục). Trẻ không chơi game đơn thuần mà dùng môi trường game để học các khái niệm lập trình thực thụ như vòng lặp, điều kiện, biến số."
  },
  {
    question: "Cần chuẩn bị gì cho bé khi đi học?",
    answer: "Trung tâm đã trang bị đầy đủ máy tính, robot và giáo cụ. Trẻ chỉ cần mang theo sự tò mò và niềm đam mê sáng tạo!"
  }
];
