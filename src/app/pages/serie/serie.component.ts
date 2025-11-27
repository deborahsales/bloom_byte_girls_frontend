import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SERIE } from '../../core/data/serie';
import { Serie } from '../../core/interfaces/serie.interface';
import { Video } from '../../core/interfaces/video.interface';
import { ApiService } from '../../core/services/api.service';
import { ContainerComponent } from '../../shared/components/container/container.component';

@Component({
  selector: 'app-serie',
  imports: [YouTubePlayerModule, ContainerComponent, RouterModule],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.scss',
})
export class SerieComponent {
  isLoading = signal(false);
  id!: number;
  allSeries: Serie[] = SERIE;
  serie!: Serie;
  selectedVideo!: Video;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id')!);

    this.getSerie();
  }

  // COM API
  // getSerie() {
  //   this.isLoading.set(true);

  //   this.apiService.getOne<Serie>(`serie`, this.id).subscribe({
  //     next: (res) => {
  //       this.serie = res;
  //       this.selectedVideo = this.serie.videos[0];
  //       this.isLoading.set(false);
  //     },
  //     error: (err) => {
  //       this.isLoading.set(false);
  //     },
  //   });
  // }

  getSerie() {
    this.isLoading.set(true);
    this.serie = this.allSeries.find((v) => v.id === this.id)!;
    this.selectedVideo = this.serie.videos[0];
    this.isLoading.set(false);
  }

  onClick(id: number) {
    this.selectedVideo = this.serie.videos.find((v) => v.id === id)!;
  }
}
