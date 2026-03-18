/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MagneticButton } from './components/ui/magnetic-button';
import { DottedSurface } from './components/ui/dotted-surface';
import { FloatingBackground } from './components/ui/floating-background';
import logo from './assets/steam_kid_logo_idea_3_1773843672725.png';
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
  Youtube,
  Menu,
  X,
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react';
import {
  NAV_LINKS,
  PROGRAMS,
  REASONS,
  ROADMAP,
  TESTIMONIALS,
  FAQS
} from './constants';

const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: string | number }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`perspective-1000 preserve-3d ${className}`}
    >
      <div className="preserve-3d h-full">
        {children}
      </div>
    </motion.div>
  );
};

const FloatingElement = ({ children, className = "", delay = 0, duration = 6 }: { children: React.ReactNode, className?: string, delay?: number, duration?: number }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0]
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden relative">
      <FloatingBackground />
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transition-colors ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="STEAM Kids" className="h-12 md:h-14 w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#register" className="px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100">
              Đăng ký ngay
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-700"
                >
                  {link.name}
                </a>
              ))}
              <a href="#register" onClick={() => setIsMenuOpen(false)} className="w-full py-4 bg-indigo-600 text-white text-center font-bold rounded-xl">
                Đăng ký ngay
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FloatingElement className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-indigo-700" />
              <span>Dành cho trẻ từ 5 - 15 tuổi</span>
            </FloatingElement>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-slate-900 mb-6 tracking-tight">
              Biến Đam Mê Chơi Game <br /> Thành <span className="text-indigo-600 relative">
                Kỹ Năng Kiến Tạo
                <motion.svg
                  viewBox="0 0 200 20"
                  className="absolute -bottom-2 left-0 w-full h-3 text-amber-400"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="4" />
                </motion.svg>
              </span> Tương Lai!
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Khám phá thế giới công nghệ qua phương pháp giáo dục STEAM chuẩn quốc tế. Giúp trẻ làm chủ Lập trình, Robotics và AI ngay từ hôm nay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton>
                <motion.a
                  href="#register"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  ĐĂNG KÝ HỌC THỬ MIỄN PHÍ
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </MagneticButton>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-100 rounded-2xl shadow-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/kid${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-slate-900">500+ Học viên</p>
                  <p className="text-slate-500">Đã tham gia học tập</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-slate-500 font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Giáo trình chuẩn Mỹ
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-slate-500 font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Học qua Dự án (Project-Based)
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000"
          >
            <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl border-8 border-white preserve-3d transform hover:rotate-y-12 transition-transform duration-500">
              <img
                src="https://picsum.photos/seed/futuristic-vr-kid-hologram/800/600"
                alt="Trẻ em khám phá công nghệ VR và Hologram"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
            </div>

            {/* Floating 3D Elements */}
            <FloatingElement className="absolute -top-10 -right-10 z-20" delay={0.5}>
              <div className="p-4 bg-white rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="text-amber-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Sáng tạo</p>
                  <p className="text-sm font-bold text-slate-900">Không giới hạn</p>
                </div>
              </div>
            </FloatingElement>

            <FloatingElement className="absolute top-1/2 -translate-y-1/2 -left-12 z-20" delay={1}>
              <div className="p-4 bg-white rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Code2 className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Lập trình</p>
                  <p className="text-sm font-bold text-slate-900">Tư duy logic</p>
                </div>
              </div>
            </FloatingElement>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-200/50 rounded-full -z-10 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6"
          >
            Ba mẹ có đang lo lắng?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Trẻ dành quá nhiều thời gian thụ động xem Youtube, chơi game?",
              "Trẻ thiếu tập trung, chưa có tư duy logic và kỹ năng giải quyết vấn đề?",
              "Lo ngại con sẽ bị tụt hậu trong kỷ nguyên AI và Công nghệ 4.0?"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <X className="text-rose-600 w-6 h-6" />
                </div>
                <p className="text-slate-600 font-medium">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-indigo-600 rounded-4xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Giải pháp của chúng tôi:</h3>
            <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90">
              Đừng cấm trẻ tiếp xúc với công nghệ, hãy dạy trẻ <span className="text-amber-400 font-bold">CÁCH LÀM CHỦ</span> nó! Khóa học STEAM Kids giúp trẻ chuyển từ "Người tiêu thụ nội dung" sang "Người sáng tạo nội dung".
            </p>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-padding relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Mở Khóa Tiềm Năng Công Nghệ</h2>
            <p className="text-xl text-slate-600">Qua các bộ môn đỉnh cao được thiết kế riêng cho từng độ tuổi</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRAMS.map((program, idx) => (
              <TiltCard key={program.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-4xl p-8 shadow-xl shadow-slate-100 border border-slate-100 flex flex-col h-full transform-gpu hover:shadow-2xl transition-shadow"
                >
                  <div className={`w-16 h-16 ${program.lightColor} rounded-3xl flex items-center justify-center mb-6 shadow-inner`}>
                    <program.icon className={`w-8 h-8 ${program.textColor}`} />
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
                      {program.age}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{program.title}</h3>
                  <p className="text-sm text-slate-500 font-medium mb-4 italic">{program.subtitle}</p>
                  <p className="text-slate-600 mb-6 flex-grow">{program.description}</p>
                  <div className="space-y-2 pt-4 border-t border-slate-50">
                    {program.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <div className={`w-1.5 h-1.5 rounded-full ${program.color}`} />
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="section-padding bg-indigo-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Tại sao ba mẹ nên chọn chúng tôi?</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {REASONS.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p className="text-indigo-100/70 leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-indigo-800 rounded-4xl overflow-hidden border-8 border-indigo-700/50 shadow-2xl">
              <img
                src="https://picsum.photos/seed/futuristic-steam-lab/600/600"
                alt="Phòng Lab STEAM hiện đại"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating stats */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl text-slate-900"
            >
              <p className="text-4xl font-bold text-indigo-600">100%</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Học viên có sản phẩm</p>
            </motion.div>
          </motion.div>
        </div>
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-64 h-64 border-4 border-white rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-10 w-96 h-96 border-4 border-white rounded-full"
          />
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="section-padding overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-display font-bold text-slate-900 mb-4"
            >
              Lộ Trình Học Tập Khuyến Nghị
            </motion.h2>
            <p className="text-xl text-slate-600">Đồng hành cùng con từ những bước chân đầu tiên</p>
          </div>

          <div className="relative">
            {/* Desktop Roadmap Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 w-full h-1 bg-indigo-100 -translate-y-1/2 hidden lg:block origin-left"
            />

            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {ROADMAP.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-8 rounded-4xl border-2 border-slate-100 text-center relative hover:border-indigo-200 transition-colors shadow-sm hover:shadow-xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 relative z-10 shadow-lg"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-indigo-600 font-bold text-sm mb-4">{item.age}</p>
                  <p className="text-slate-600">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-slate-900 text-center mb-16"
          >
            Cảm nhận từ phụ huynh
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-10 rounded-4xl shadow-sm border border-slate-100 relative hover:shadow-xl transition-shadow"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Star className="text-white fill-white w-6 h-6" />
                </div>
                <p className="text-xl text-slate-700 italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full border-2 border-indigo-100" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-slate-900">{t.author}</p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Tặng ngay <span className="text-indigo-600">1 BUỔI HỌC THỬ MIỄN PHÍ</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Cùng buổi đánh giá năng lực công nghệ trị giá 500.000đ dành riêng cho bé.
            </p>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-6 bg-amber-50 rounded-3xl border-2 border-amber-200 inline-block mb-8"
            >
              <p className="text-amber-800 font-bold">
                🔥 Chỉ dành cho 50 ba mẹ đăng ký sớm nhất trong tháng này!
              </p>
            </motion.div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Phone className="text-indigo-600 w-5 h-5" />
                </div>
                <span className="text-lg font-bold text-slate-700">0123 456 789</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Mail className="text-indigo-600 w-5 h-5" />
                </div>
                <span className="text-lg font-bold text-slate-700">hello@steamkids.edu.vn</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-4xl shadow-2xl border border-slate-100 relative"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Họ tên Phụ huynh</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none transition-all" placeholder="Nguyễn Văn A" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Số điện thoại</label>
                  <input type="tel" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none transition-all" placeholder="090..." />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Tên và Độ tuổi của bé</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none transition-all" placeholder="Bé Minh - 8 tuổi" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Môn học quan tâm</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none transition-all appearance-none">
                    <option>Chọn môn học</option>
                    <option>Scratch / Blockly</option>
                    <option>Minecraft / Roblox</option>
                    <option>Robotics</option>
                    <option>AI for Kids</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Cơ sở muốn học</label>
                <select className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none transition-all appearance-none">
                  <option>Chọn cơ sở</option>
                  <option>Cơ sở Quận 1</option>
                  <option>Cơ sở Quận 7</option>
                  <option>Học Online</option>
                </select>
              </div>
              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-indigo-600 text-white font-bold text-lg rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
                >
                  NHẬN ƯU ĐÃI VÀ XẾP LỊCH HỌC THỬ
                </motion.button>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full -z-10 -translate-x-1/2 translate-y-1/2" />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding overflow-hidden relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-slate-900 text-center mb-12"
          >
            Câu hỏi thường gặp
          </motion.h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl border border-slate-100 overflow-hidden"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-lg font-bold text-slate-800">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900 text-white pt-20 pb-10 px-6 overflow-hidden">
        <DottedSurface className="opacity-80" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logo} alt="STEAM Kids" className="h-12 md:h-14 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-slate-400 leading-relaxed">
              Khơi dậy niềm đam mê công nghệ và sáng tạo cho thế hệ tương lai Việt Nam.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Liên kết nhanh</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Thông tin liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>hello@steamkids.edu.vn</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Đăng ký nhận tin</h4>
            <p className="text-slate-400 mb-4 text-sm">Nhận thông tin về các khóa học mới và ưu đãi sớm nhất.</p>
            <div className="flex gap-2">
              <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 outline-none focus:border-indigo-500 flex-grow" placeholder="Email của bạn" />
              <button className="p-2 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 text-center text-slate-500 text-sm relative z-10">
          <p>© 2026 STEAM Kids Education. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <MagneticButton distance={0.2}>
          <a href="#register" className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-2xl flex items-center justify-center gap-2">
            ĐĂNG KÝ HỌC THỬ NGAY
            <ArrowRight className="w-5 h-5" />
          </a>
        </MagneticButton>
      </div>
    </div>
  );
}
