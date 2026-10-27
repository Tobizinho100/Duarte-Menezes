import React from 'react';
import { Sparkles, Layers, Instagram, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projetos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full border-b border-slate-800/80 bg-[#0a0f1d]/85 backdrop-blur-md sticky top-0 z-30">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Brand identity: Duarte Menezes / DU.4RT.M */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-mono font-black text-white text-xs shadow-md shadow-blue-500/20">
            DM
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white leading-none">
              Duarte Menezes
            </span>
            <span className="text-[10px] font-mono tracking-widest text-blue-400 font-semibold mt-0.5">
              DU.4RT.M
            </span>
          </div>
        </div>

        {/* Action nav links */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={scrollToProjects}
            className="cursor-pointer text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Trabalhos Elaborados</span>
            <span className="sm:hidden">Projetos</span>
          </button>

          <a
            href="mailto:duartedx10@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contacto</span>
          </a>
        </div>
      </div>
    </header>
  );
};
