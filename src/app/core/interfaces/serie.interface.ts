import { Tema } from './tema.interface';
import { Video } from './video.interface';

export interface Serie {
  id: number;
  titulo: string;
  temaId: number;
  tema: Tema;
  videos: Video[];
}
