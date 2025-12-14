import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Rocket } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring"
    }
  })
};

const TypewriterText = () => {
  const fullText = "Go TOGETHER";
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100); // Faster when deleting
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Wait at the end before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setDelta(500); // Wait before typing again
    } else if (!isDeleting && updatedText !== fullText) {
        setDelta(200 - Math.random() * 100); // Random typing speed variation
    }
  };

  return (
    <div className="mt-8 text-center relative z-20">
      <style>
        {`
          @keyframes rainbow-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .rainbow-text {
            background: linear-gradient(
              270deg, 
              #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff, #ff0000
            );
            background-size: 400% 400%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: rainbow-move 8s ease infinite;
          }
          .cursor-blink {
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
      <h3 className="text-5xl md:text-7xl font-black tracking-tight">
        <span className="rainbow-text drop-shadow-[0_5px_15px_rgba(255,255,255,0.2)]">
          {text}
        </span>
        <span className="cursor-blink text-white ml-2">|</span>
      </h3>
    </div>
  );
};

const ImposingRocket = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/20 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>
      
      <motion.div
        animate={{ 
           y: [-30, 30, -30],
           rotate: [-1, 1, -1]
        }}
        transition={{
           duration: 6,
           repeat: Infinity,
           ease: "easeInOut"
        }}
        className="relative z-10 w-64 h-64 md:w-96 md:h-96"
      >
         <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_50px_rgba(236,72,153,0.5)]">
           <defs>
             <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
               <stop offset="0%" stopColor="#ec4899" /> {/* Pink */}
               <stop offset="50%" stopColor="#8b5cf6" /> {/* Purple */}
               <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
             </linearGradient>
             <linearGradient id="finGradient" x1="0" y1="0" x2="1" y2="0">
               <stop offset="0%" stopColor="#db2777" />
               <stop offset="100%" stopColor="#7c3aed" />
             </linearGradient>
             <linearGradient id="windowGradient" x1="0" y1="0" x2="0" y2="1">
               <stop offset="0%" stopColor="#22d3ee" />
               <stop offset="100%" stopColor="#0ea5e9" />
             </linearGradient>
             <linearGradient id="fireGradient" x1="0" y1="0" x2="0" y2="1">
               <stop offset="0%" stopColor="#facc15" /> {/* Yellow */}
               <stop offset="50%" stopColor="#f97316" /> {/* Orange */}
               <stop offset="100%" stopColor="#ef4444" /> {/* Red */}
             </linearGradient>
           </defs>

           {/* Left Fin */}
           <path d="M130 320 L40 420 H160 L160 320 Z" fill="url(#finGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
           {/* Right Fin */}
           <path d="M382 320 L472 420 H352 L352 320 Z" fill="url(#finGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
           
           {/* Main Body */}
           <path d="M256 40 C140 160 150 350 150 400 H362 C362 350 372 160 256 40 Z" fill="url(#bodyGradient)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
           
           {/* Window */}
           <circle cx="256" cy="200" r="55" fill="url(#windowGradient)" stroke="rgba(255,255,255,0.8)" strokeWidth="8" />
           <circle cx="275" cy="185" r="18" fill="white" opacity="0.4" />

           {/* Engine Nozzle */}
           <path d="M170 400 H342 L360 430 H152 Z" fill="#334155" />

           {/* Fire - Animated */}
           <motion.path 
               d="M170 430 Q256 550 342 430 Q256 480 170 430 Z" 
               fill="url(#fireGradient)"
               animate={{ 
                   d: [
                       "M170 430 Q256 600 342 430 Q256 500 170 430 Z",
                       "M170 430 Q256 680 342 430 Q256 520 170 430 Z",
                       "M170 430 Q256 580 342 430 Q256 490 170 430 Z"
                   ],
                   opacity: [0.8, 1, 0.9]
               }}
               transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
           />
         </svg>
      </motion.div>
      
      {/* Animated Text Component */}
      <TypewriterText />
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 inline-block mb-4 drop-shadow-lg"
          >
            Royal Creations
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Witness the flawless execution of my full-stack mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              
              <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-white/20 transition-colors shadow-xl">
                
                {/* Header Decoration */}
                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <Rocket className="text-white" size={24} />
                    </div>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* New Imposing Rocket Animation */}
        <ImposingRocket />
        
      </div>
    </section>
  );
};

export default Projects;