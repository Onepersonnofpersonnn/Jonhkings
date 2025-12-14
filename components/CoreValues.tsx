import React from 'react';
import { motion } from 'framer-motion';

const IMAGES = [
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
];

// Duplicate images to create a seamless infinite loop
const MARQUEE_CONTENT = [...IMAGES, ...IMAGES, ...IMAGES];

const CoreValues: React.FC = () => {
  return (
    <section className="py-24 w-full relative z-10 overflow-hidden flex flex-col justify-center bg-slate-900/50 backdrop-blur-sm border-y border-white/5">
      
      <div className="container mx-auto px-4 mb-12 text-center relative z-20">
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          VISUAL EXCELLENCE
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          A glimpse into the digital future I construct daily.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden rotate-1">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none"></div>
        
        {/* Animated Track moving RIGHT */}
        <motion.div 
          className="flex gap-8 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            ease: "linear", 
            duration: 30, 
            repeat: Infinity 
          }}
        >
          {MARQUEE_CONTENT.map((src, index) => (
            <div 
              key={index} 
              className="relative w-80 h-56 rounded-xl overflow-hidden border-2 border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)] group hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img 
                src={src} 
                alt={`Tech Visual ${index}`} 
                className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <div className="h-1 w-8 bg-fuchsia-500 mb-2"></div>
                <span className="text-xs font-mono text-cyan-300">SYS.IMG.0{index % 6 + 1}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50 absolute top-0"></div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 absolute bottom-0"></div>

    </section>
  );
};

export default CoreValues;