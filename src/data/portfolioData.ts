import mpLogo from '../assets/images/regenerated_image_1792176877247.png';
import mpDetailWall from '../assets/images/mp_detail_wall_1792107411267.jpg';
import carReelVertical from '../assets/images/car_reel_vertical_1792104583712.jpg';

import igorSilverLogo from '../assets/images/regenerated_image_1792181249678.jpg';
import igorSalonShowcase from '../assets/images/igor_franca_salon_showcase_1792104552315.jpg';
import barberReelVertical from '../assets/images/barber_reel_vertical_1792104600205.jpg';

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
      label: 'O Logótipo',
      image: mpLogo,
      alt: 'Logótipo MP Car Detail',
    },
    space: {
      id: 'space',
      label: 'O Espaço',
      image: mpDetailWall,
      alt: 'Espaço MP Car Detail com branding na parede',
    },
    reels: {
      id: 'reels',
      label: 'Reels',
      image: carReelVertical,
      videoUrl: '/videos/mp_car_reel.mp4',
      alt: 'Vídeo Reel MP Car Detail produzido por Duarte Menezes',
    },
  },
  {
    id: 'igor-franca',
    clientName: "Igor França Men's Salon",
    category: 'Barbearia & Salão',
    logo: {
      id: 'logo',
      label: 'O Logótipo',
      image: igorSilverLogo,
      alt: "Logótipo Igor França Men's Salon",
    },
    space: {
      id: 'space',
      label: 'O Espaço',
      image: igorSalonShowcase,
      alt: "Espaço Igor França Men's Salon",
    },
    reels: {
      id: 'reels',
      label: 'Reels',
      image: barberReelVertical,
      videoUrl: '/videos/igor_barber_reel.mp4',
      alt: 'Vídeo Reel Barbearia Igor França produzido por Duarte Menezes',
    },
  },
];
