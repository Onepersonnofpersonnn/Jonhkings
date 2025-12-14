import React from 'react';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CoreValues from './components/CoreValues';

const App: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen text-slate-200 selection:bg-fuchsia-500 selection:text-white">
      <Background3D />
      
      <div className="relative">
        <Hero />
        <CoreValues />
        <Projects />
        <Skills />
        
        <footer className="py-12 text-center text-slate-500 text-sm relative z-10 border-t border-white/5 bg-slate-950/50 backdrop-blur-lg">
          <p>© {new Date().getFullYear()} The King of Developers. All Rights Reserved.</p>
          <p className="mt-2">Designed with absolute perfection.</p>
        </footer>
      </div>
    </main>
  );
};

export default App;