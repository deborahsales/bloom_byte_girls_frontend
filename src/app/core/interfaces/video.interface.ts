import { Canal } from './canal.interface';
import { Serie } from './serie.interface';

export interface Video {
  id: number;
  ordem: number;
  titulo: string;
  idYoutube: string;
  serieId: number;
  canalId: number;
  serie: Serie;
  canal: Canal;
}
