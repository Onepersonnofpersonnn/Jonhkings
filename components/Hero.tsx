import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_IMAGE_URL, BIO_TITLE, BIO_DESCRIPTION } from '../constants';
import { Crown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 overflow-hidden">
      
      {/* Decorative Glow Behind Image */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-fuchsia-600 rounded-full blur-[100px] opacity-40 animate-pulse"></div>

      <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 mb-4 backdrop-blur-md">
              <Sparkles size={16} />
              <span className="text-sm font-bold tracking-wider uppercase">Excellence Incarnate</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-fuchsia-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {BIO_TITLE}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed border-l-4 border-fuchsia-500 pl-6 glass-card p-6 rounded-r-xl shadow-2xl">
              {BIO_DESCRIPTION}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
             <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full font-bold text-white shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:shadow-[0_0_40px_rgba(192,38,211,0.7)] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Crown size={20} />
                Hire the King
             </button>
             <button className="px-8 py-4 bg-transparent border border-cyan-400 text-cyan-400 rounded-full font-bold hover:bg-cyan-950/50 transition-all duration-300">
                View Projects
             </button>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <motion.div 
          className="order-1 lg:order-2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="relative group">
            {/* Rotating border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 rounded-[2rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div className="relative w-80 h-96 md:w-96 md:h-[30rem] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                {/* Note: This assumes the user will replace the URL or the provided placeholder works */}
                <img 
                    src={PROFILE_IMAGE_URL} 
                    alt="The King of Developers" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Web Developer</h3>
                    <p className="text-cyan-400 text-sm">Full Stack Master</p>
                </div>
            </div>

            {/* Floating 3D-ish Elements around image */}
            <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -top-8 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
                <div className="text-cyan-400 font-bold text-xl">100%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Efficiency</div>
            </motion.div>

            <motion.div 
                animate={{ y: [10, -10, 10] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 -bottom-12 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-fuchsia-500/50 shadow-[0_0_15px_rgba(232,121,249,0.3)]"
            >
                <div className="text-fuchsia-400 font-bold text-xl">Top Tier</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Quality</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;