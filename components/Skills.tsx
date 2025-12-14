import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-fuchsia-500">Unmatched</span> Arsenal
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-fuchsia-500 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-fuchsia-500/50 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-fuchsia-600 to-purple-700 text-white shadow-lg group-hover:shadow-fuchsia-500/25 transition-shadow">
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-200">{skill.name}</h3>
              </div>
              
              <div className="relative h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400"
                ></motion.div>
              </div>
              <div className="mt-2 text-right text-xs font-mono text-cyan-400">
                {skill.level}% MASTERY
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;