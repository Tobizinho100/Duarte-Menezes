import mpLogo from '../assets/images/regenerated_image_1792176877247.png';
import mpDetailWall from '../assets/images/mp_detail_wall_1792107411267.jpg';
import carReelVertical from '../assets/videos/Reel_MP.mp4';

import igorSilverLogo from '../assets/images/igor_franca_silver_1792107393375.jpg';
import igorSalonShowcase from '../assets/images/igor_franca_salon_showcase_1792104552315.jpg';
import barberReelVertical from '../assets/videos/Reel_Igor.mov';

export interface ProjectCardItem {
  id: 'logo' | 'space' | 'reels';
  label: string;
  image: string;
  videoUrl?: string;
  alt: string;
}

export interface SimpleProject {
  id: string;
  clientName: string;
  category: string;
  logo: ProjectCardItem;
  space: ProjectCardItem;
  reels: ProjectCardItem;
}

export const PROJECTS_DATA: SimpleProject[] = [
  {
    id: 'mp-cardetail',
    clientName: 'MP Car Detail',
    category: 'Estética Automóvel',
    logo: {
      id: 'logo',
      label: 'Logótipo',
      image: mpLogo,
      alt: 'Logótipo MP Car Detail',
    },
    space: {
      id: 'space',
      label: 'Espaço',
      image: mpDetailWall,
      alt: 'Espaço MP Car Detail com branding na parede',
    },
    reels: {
      id: 'reels',
      label: 'Reel',
      image: carReelVertical,
      videoUrl: '/videos/Reel_MP.mp4',
      alt: 'Vídeo Reel MP Car Detail produzido por Duarte Menezes',
    },
  },
  {
    id: 'igor-franca',
    clientName: "Igor França Men's Salon",
    category: 'Barbearia & Salão',
    logo: {
      id: 'logo',
      label: 'Logótipo',
      image: igorSilverLogo,
      alt: "Logótipo Igor França Men's Salon",
    },
    space: {
      id: 'space',
      label: 'Espaço',
      image: igorSalonShowcase,
      alt: "Espaço Igor França Men's Salon",
    },
    reels: {
      id: 'reels',
      label: 'Reel',
      image: barberReelVertical,
      videoUrl: '/videos/Reel_Igor.mov',
      alt: 'Vídeo Reel Barbearia Igor França produzido por Duarte Menezes',
    },
  },
];
