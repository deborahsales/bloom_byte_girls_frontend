import { Canal } from './canal.interface';

export interface Video {
  id: number;
  ordem: number;
  titulo: string;
  idYoutube: string;
  serieId: number;
  canalId: number;
  canal: Canal;
}
