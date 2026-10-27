import React from 'react';
import videoWorkspace from '../assets/images/video_maker_workspace_1792104568671.jpg';
import { Palette, TrendingUp, Video, Sparkles, ArrowDown, CheckCircle2 } from 'lucide-react';

export const ProfileHeader: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projetos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-12 pb-14 text-center relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-indigo-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-3xl px-6 flex flex-col items-center">
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner mb-6 text-xs text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Disponível para novos projetos e colaborações</span>
        </div>

        {/* Large Profile Photo without camera button */}
        <div className="relative shrink-0 mb-6 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/30 via-slate-600/40 to-indigo-500/30 blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-slate-700/90 bg-[#111827] shadow-2xl shadow-blue-950/60 transition-all duration-300 group-hover:border-slate-400 group-hover:scale-[1.02]">
            <img
              src={videoWorkspace}
              alt="Duarte Menezes - DU.4RT.M"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Name: Duarte Menezes */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Duarte Menezes
        </h1>

        {/* Artistic signature / handle tag */}
        <div className="mt-2 inline-flex items-center gap-2">
          <span className="text-sm sm:text-base font-mono font-bold tracking-widest text-blue-400 bg-blue-950/50 px-3 py-0.5 rounded-full border border-blue-800/50">
            DU.4RT.M
          </span>
        </div>

        {/* Professional Specialties: Graphic Designer · Marketing · Video Maker */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-semibold text-slate-200">
          <span className="text-slate-300">Graphic Designer</span>
          <span className="text-blue-500 font-bold">·</span>
          <span className="text-slate-300">Marketing</span>
          <span className="text-blue-500 font-bold">·</span>
          <span className="text-slate-300">Video Maker</span>
        </div>

        {/* General Overview of What Duarte Menezes does */}
        <div className="mt-5 max-w-2xl text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal">
          <p>
            Desenvolvo identidades visuais de alto impacto, estratégias de marketing consistentes e produções audiovisuais dinâmicas. Uno estética minimalista com narrativa cinematográfica para transformar a presença digital de marcas, negócios locais e marcas de luxo em referências incontornáveis.
          </p>
        </div>

        {/* 3 Core Pillars: Graphic Design, Marketing, Video Maker (Gives Life & Substance) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
          {/* 1. Graphic Design */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300 group shadow-lg">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:bg-blue-500/20 transition-colors">
              <Palette className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-bold text-white mb-1 tracking-tight">Graphic Design</h2>
            <p className="text-xs text-slate-400 leading-normal">
              Logótipos minimalistas, monogramas geométricos, sistemas de identidade visual, tipografia e vetorização de precisão.
            </p>
          </div>

          {/* 2. Marketing */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300 group shadow-lg">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3 group-hover:bg-purple-500/20 transition-colors">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-bold text-white mb-1 tracking-tight">Marketing</h2>
            <p className="text-xs text-slate-400 leading-normal">
              Estratégia visual de marca, posicionamento de autoridade, comunicação coesa e atração do público ideal.
            </p>
          </div>

          {/* 3. Video Maker */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300 group shadow-lg">
            <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-3 group-hover:bg-rose-500/20 transition-colors">
              <Video className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-bold text-white mb-1 tracking-tight">Video Maker</h2>
            <p className="text-xs text-slate-400 leading-normal">
              Captação cinematográfica e edição dinâmica de Reels, TikToks e vídeos promocionais com ritmo e estética refinada.
            </p>
          </div>
        </div>

        {/* Quick Highlights / Values */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Detalhe Geométrico
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Presença de Marca
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> Reels Verticais Dinâmicos
          </span>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={scrollToProjects}
            className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-900 font-semibold text-sm hover:bg-white transition-all shadow-lg shadow-white/5 active:scale-95"
          >
            <span>Explorar Trabalhos Elaborados</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
