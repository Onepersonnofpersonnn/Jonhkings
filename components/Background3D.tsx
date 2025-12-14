import React from 'react';

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-slate-950 overflow-hidden">
      {/* CSS-based Nebula Effect */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse-fast mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-600/20 rounded-full blur-[100px] animate-pulse mix-blend-screen"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-purple-900/30 rounded-full blur-[80px]"></div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
    </div>
  );
};

export default Background3D;