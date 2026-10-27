import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS_DATA, SimpleProject, ProjectCardItem } from '../data/portfolioData';
import {
  Play,
  Pause,
  Maximize2,
  X,
  Sparkles,
  Volume2,
  VolumeX,
  Upload,
  CheckCircle,
  Film,
} from 'lucide-react';
import { saveVideoBlob, getVideoBlob } from '../utils/videoStorage';

export const WorkShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<{
    project: SimpleProject;
    item: ProjectCardItem;
  } | null>(null);

  // Custom user-uploaded videos override stored in IndexedDB per project id
  const [customVideos, setCustomVideos] = useState<Record<string, string>>({});
  const [notification, setNotification] = useState<string | null>(null);
  const videoInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Reels Modal Player state
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  // Drag over states
  const [draggingProjectId, setDraggingProjectId] = useState<string | null>(null);

  // Load custom videos from IndexedDB on component mount
  useEffect(() => {
    async function loadSavedVideos() {
      for (const project of PROJECTS_DATA) {
        const blob = await getVideoBlob(project.id);
        if (blob) {
          const url = URL.createObjectURL(blob);
          setCustomVideos((prev) => ({ ...prev, [project.id]: url }));
        }
      }
    }
    loadSavedVideos();
  }, []);

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.id === activeFilter);

  // When modal opens with a video, reset and autoplay with sound available
  useEffect(() => {
    if (selectedPhoto && selectedPhoto.item.id === 'reels') {
      setIsPlaying(true);
      if (modalVideoRef.current) {
        modalVideoRef.current.currentTime = 0;
        modalVideoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [selectedPhoto]);

  const processVideoFile = async (projectId: string, file: File) => {
    if (!file.type.startsWith('video/')) {
      alert('Por favor, seleciona um ficheiro de vídeo (.mp4 ou similar).');
      return;
    }

    await saveVideoBlob(projectId, file);
    const url = URL.createObjectURL(file);
    setCustomVideos((prev) => ({ ...prev, [projectId]: url }));

    const projectName =
      projectId === 'igor-franca' ? "Igor França Men's Salon" : 'MP Car Detail';
    setNotification(`Vídeo de ${projectName} adicionado com sucesso!`);
    setTimeout(() => setNotification(null), 4000);

    // If modal is open for this project, update it
    if (selectedPhoto && selectedPhoto.project.id === projectId) {
      setSelectedPhoto({
        ...selectedPhoto,
        item: {
          ...selectedPhoto.item,
          videoUrl: url,
        },
      });
    }
  };

  const handleVideoUpload = (
    projectId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      processVideoFile(projectId, file);
    }
  };

  const handleDrop = (projectId: string, e: React.DragEvent) => {
    e.preventDefault();
    setDraggingProjectId(null);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processVideoFile(projectId, file);
    }
  };

  const togglePlay = () => {
    if (modalVideoRef.current) {
      if (modalVideoRef.current.paused) {
        modalVideoRef.current.play();
        setIsPlaying(true);
      } else {
        modalVideoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoRef.current.muted;
      setIsMuted(modalVideoRef.current.muted);
    }
  };

  return (
    <section id="projetos" className="pb-28 pt-6 scroll-mt-20 relative">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 text-xs font-semibold shadow-2xl backdrop-blur-md animate-fadeIn">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{notification}</span>
        </div>
      )}

      <div className="mx-auto max-w-5xl px-6">
        {/* ================= SECTION HEADER ================= */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-blue-400 mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Projetos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Trabalhos que já elaborei
          </h2>

          {/* Clean tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`cursor-pointer px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveFilter('mp-cardetail')}
              className={`cursor-pointer px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'mp-cardetail'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              MP Car Detail
            </button>
            <button
              onClick={() => setActiveFilter('igor-franca')}
              className={`cursor-pointer px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'igor-franca'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Igor França Men's Salon
            </button>
          </div>
        </div>

        {/* ================= PROJECTS LIST ================= */}
        <div className="space-y-16">
          {filteredProjects.map((project) => {
            const hasCustomVideo = !!customVideos[project.id];
            const currentVideoUrl =
              customVideos[project.id] || project.reels.videoUrl;

            const items: ProjectCardItem[] = [
              project.logo,
              project.space,
              {
                ...project.reels,
                videoUrl: currentVideoUrl,
              },
            ];

            return (
              <div
                key={project.id}
                className="rounded-3xl border border-slate-800/90 bg-[#0c1222]/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Project Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-800/80 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {project.clientName}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-blue-400/90 bg-blue-950/60 border border-blue-900/50 px-2.5 py-1 rounded-md self-start sm:self-auto">
                    Logótipo · Espaço · Reels
                  </span>
                </div>

                {/* The 3 Cards: O Logo, O Espaço, Reels */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {items.map((item) => {
                    const isReel = item.id === 'reels';
                    const isDragging = draggingProjectId === project.id;

                    return (
                      <div key={item.id} className="group flex flex-col">
                        {/* Header Label for the card */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-slate-200 tracking-wide">
                            {item.label}
                          </span>
                          {isReel && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-rose-400 bg-rose-950/60 border border-rose-800/40 px-2 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                              REEL VÍDEO
                            </span>
                          )}
                        </div>

                        {/* Card Box */}
                        <div
                          onClick={() => setSelectedPhoto({ project, item })}
                          onDragOver={(e) => {
                            if (isReel) {
                              e.preventDefault();
                              setDraggingProjectId(project.id);
                            }
                          }}
                          onDragLeave={() => {
                            if (isReel) {
                              setDraggingProjectId(null);
                            }
                          }}
                          onDrop={(e) => {
                            if (isReel) {
                              handleDrop(project.id, e);
                            }
                          }}
                          className={`relative aspect-[4/3] rounded-2xl overflow-hidden border bg-[#070b14] shadow-lg transition-all duration-300 group-hover:scale-[1.02] cursor-pointer ${
                            isDragging
                              ? 'border-rose-400 ring-4 ring-rose-500/30'
                              : 'border-slate-700/70 group-hover:border-blue-400/80'
                          }`}
                        >
                          {isReel && item.videoUrl ? (
                            /* Real HTML5 Video element inside the card */
                            <div className="w-full h-full relative bg-black flex items-center justify-center">
                              <video
                                key={item.videoUrl}
                                src={item.videoUrl}
                                poster={item.image}
                                playsInline
                                muted
                                loop
                                onMouseEnter={(e) => {
                                  e.currentTarget.play().catch(() => {});
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.pause();
                                }}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />

                              {/* Reels Play Overlay Button */}
                              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors flex items-center justify-center pointer-events-none">
                                <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                                  <Play className="w-6 h-6 fill-white ml-0.5" />
                                </div>
                              </div>

                              <div className="absolute bottom-2.5 left-2.5 text-[11px] font-mono text-white bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 pointer-events-none">
                                Abrir Reel (Com Som)
                              </div>
                            </div>
                          ) : (
                            /* Image Card for Logo or Space */
                            <>
                              <img
                                src={item.image}
                                alt={item.alt}
                                className={`w-full h-full ${
                                  item.id === 'logo'
                                    ? 'object-contain p-3 sm:p-4'
                                    : 'object-cover'
                                } transition-transform duration-500 group-hover:scale-105`}
                              />
                              {/* Hover expand indicator */}
                              <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-lg bg-black/70 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <Maximize2 className="w-3.5 h-3.5" />
                              </div>
                            </>
                          )}
                        </div>

                        {/* Dedicated video upload button directly under the reel card */}
                        {isReel && (
                          <div className="mt-2.5 flex items-center justify-between text-[11px]">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                videoInputRefs.current[project.id]?.click();
                              }}
                              className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-blue-400 hover:text-blue-300 border border-slate-800 hover:border-slate-700 font-semibold transition-all shadow-sm active:scale-95"
                              title="Carregar ou substituir o vídeo MP4 deste projeto"
                            >
                              <Upload className="w-3.5 h-3.5" />
                              <span>
                                {hasCustomVideo
                                  ? 'Substituir vídeo (.mp4)'
                                  : project.id === 'igor-franca'
                                  ? 'Carregar vídeo Igor França (.mp4)'
                                  : 'Carregar vídeo MP Car Detail (.mp4)'}
                              </span>
                            </button>

                            <input
                              type="file"
                              accept="video/mp4,video/*"
                              ref={(el) => {
                                videoInputRefs.current[project.id] = el;
                              }}
                              onChange={(e) => handleVideoUpload(project.id, e)}
                              className="hidden"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= MODAL LIGHTBOX / VIDEO REELS PLAYER ================= */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-xl animate-fadeIn"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className={`relative w-full rounded-2xl border border-slate-700 bg-[#0d1322] overflow-hidden shadow-2xl flex flex-col ${
                selectedPhoto.item.id === 'reels'
                  ? 'max-w-md max-h-[92vh]'
                  : 'max-w-4xl max-h-[90vh]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Topbar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-[#090d18] shrink-0">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {selectedPhoto.project.clientName}
                  </h4>
                  <p className="text-xs font-mono text-blue-400">
                    {selectedPhoto.item.label}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              {selectedPhoto.item.id === 'reels' && selectedPhoto.item.videoUrl ? (
                /* ================= REAL VERTICAL REELS PLAYER ================= */
                <div className="relative bg-black flex-1 flex flex-col items-center justify-center overflow-hidden">
                  <div className="relative w-full aspect-[9/16] max-h-[70vh] flex items-center justify-center bg-black">
                    <video
                      ref={modalVideoRef}
                      key={selectedPhoto.item.videoUrl}
                      src={selectedPhoto.item.videoUrl}
                      poster={selectedPhoto.item.image}
                      playsInline
                      autoPlay
                      loop
                      muted={isMuted}
                      onTimeUpdate={() => {
                        if (modalVideoRef.current) {
                          setCurrentTime(modalVideoRef.current.currentTime);
                        }
                      }}
                      onLoadedMetadata={() => {
                        if (modalVideoRef.current) {
                          setDuration(modalVideoRef.current.duration);
                        }
                      }}
                      onClick={togglePlay}
                      className="w-full h-full object-cover cursor-pointer"
                    />

                    {/* Play/Pause center overlay when paused */}
                    {!isPlaying && (
                      <button
                        onClick={togglePlay}
                        className="cursor-pointer absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform"
                        aria-label="Reproduzir"
                      >
                        <Play className="w-8 h-8 fill-white ml-1" />
                      </button>
                    )}

                    {/* Video Top Controls Overlay */}
                    <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                      <button
                        onClick={toggleMute}
                        className="cursor-pointer p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-black transition-colors border border-white/20 shadow-lg"
                        title={isMuted ? 'Ativar som' : 'Desativar som'}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-rose-400" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-emerald-400" />
                        )}
                      </button>
                    </div>

                    {/* Video Bottom Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-rose-500 transition-all duration-150"
                        style={{
                          width:
                            duration > 0
                              ? `${(currentTime / duration) * 100}%`
                              : '0%',
                        }}
                      />
                    </div>
                  </div>

                  {/* Reel Player Controls Footer */}
                  <div className="w-full px-5 py-3 border-t border-slate-800 bg-[#090d18] flex items-center justify-between text-xs text-slate-300 shrink-0">
                    <button
                      onClick={togglePlay}
                      className="cursor-pointer inline-flex items-center gap-1.5 font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4" />
                          <span>Pausar</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-white" />
                          <span>Reproduzir</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        videoInputRefs.current[selectedPhoto.project.id]?.click()
                      }
                      className="cursor-pointer inline-flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Substituir vídeo</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* ================= IMAGE DISPLAY FOR LOGO OR SPACE ================= */
                <>
                  <div className="p-3 sm:p-6 bg-black flex items-center justify-center max-h-[75vh]">
                    <img
                      src={selectedPhoto.item.image}
                      alt={selectedPhoto.item.alt}
                      className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                  <div className="px-5 py-3 border-t border-slate-800 bg-[#090d18] flex items-center justify-between text-xs text-slate-400 shrink-0">
                    <span>Duarte Menezes · DU.4RT.M</span>
                    <span className="font-mono text-slate-300">
                      {selectedPhoto.project.clientName} — {selectedPhoto.item.label}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
