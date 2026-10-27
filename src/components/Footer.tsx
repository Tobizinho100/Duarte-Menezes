import React from 'react';
import { Mail, Instagram, Sparkles, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#080d19] py-12 text-slate-400">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-white">Duarte Menezes</span>
            <span className="text-xs font-mono font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-950/50 border border-blue-900/60">
              DU.4RT.M
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Graphic Designer · Marketing Digital · Video Maker
          </p>
          <p className="mt-0.5 text-[11px] text-slate-500">
            Projetos em destaque: MP Car Detail · Igor França Men's Salon
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href="mailto:duartedx10@gmail.com"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>duartedx10@gmail.com</span>
          </a>

          <button
            onClick={scrollToTop}
            className="cursor-pointer p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
            title="Voltar ao topo"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
