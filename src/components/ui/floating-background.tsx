'use client';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Bot, 
  BrainCircuit, 
  Lightbulb, 
  Atom, 
  Sparkles,
  Cpu,
  Gamepad2,
  Code2
} from 'lucide-react';

const ICONS = [
  Rocket, 
  Bot, 
  BrainCircuit, 
  Lightbulb, 
  Atom, 
  Sparkles,
  Cpu,
  Gamepad2,
  Code2
];

const COLORS = [
  'text-indigo-500/60',
  'text-emerald-500/60',
  'text-amber-500/60',
  'text-rose-500/60',
  'text-sky-500/60',
  'text-violet-500/60'
];

const FloatingElement = ({ index }: any) => {
  const Icon = useMemo(() => ICONS[index % ICONS.length], [index]);
  const color = useMemo(() => COLORS[index % COLORS.length], [index]);
  
  // Randomize initial positions and animation parameters
  const initialX = useMemo(() => Math.random() * 100, []);
  const initialY = useMemo(() => Math.random() * 100, []);
  const duration = useMemo(() => 20 + Math.random() * 30, []); // Slower for better visibility
  const delay = useMemo(() => Math.random() * -20, []);
  const size = useMemo(() => 32 + Math.random() * 40, []); // Slightly larger
  const rotation = useMemo(() => Math.random() * 360, []);

  return (
    <motion.div
      className={`absolute ${color} pointer-events-none drop-shadow-sm`}
      initial={{ 
        x: `${initialX}vw`, 
        y: `${initialY}vh`, 
        rotate: rotation,
        scale: 0.8,
        opacity: 0
      }}
      animate={{
        x: [
          `${initialX}vw`, 
          `${(initialX + 15) % 100}vw`, 
          `${(initialX - 15 + 100) % 100}vw`, 
          `${initialX}vw`
        ],
        y: [
          `${initialY}vh`, 
          `${(initialY + 20) % 100}vh`, 
          `${(initialY - 20 + 100) % 100}vh`, 
          `${initialY}vh`
        ],
        rotate: [rotation, rotation + 180, rotation + 360],
        scale: [0.8, 1.2, 0.9, 0.8],
        opacity: [0.4, 0.8, 0.6, 0.4] // Increased opacity
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
      style={{ width: size, height: size }}
    >
      <Icon size={size} strokeWidth={1.5} />
    </motion.div>
  );
};

export function FloatingBackground() {
  // Create a fixed number of floating elements
  const elements = useMemo(() => Array.from({ length: 20 }), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50/50">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: `radial-gradient(#4f46e5 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* Floating Icons */}
      {elements.map((_, i) => (
        <FloatingElement key={i} index={i} />
      ))}

      {/* Soft Colorful Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100/30 blur-[120px] rounded-full" />
      <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-amber-100/20 blur-[100px] rounded-full" />
    </div>
  );
}
