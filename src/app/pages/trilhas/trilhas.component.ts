import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SERIE } from '../../core/data/serie';
import { TEMA } from '../../core/data/tema';
import { Serie } from '../../core/interfaces/serie.interface';
import { Tema } from '../../core/interfaces/tema.interface';
import { ApiService } from '../../core/services/api.service';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { DiamondButtonComponent } from '../../shared/components/diamond-button/diamond-button.component';
import { ProgressSpinnerComponent } from '../../shared/components/progress-spinner/progress-spinner.component';
import { SeriesCardComponent } from '../../shared/components/series-card/series-card.component';

@Component({
  selector: 'app-trilhas',
  imports: [
    ContainerComponent,
    DiamondButtonComponent,
    ProgressSpinnerComponent,
    SeriesCardComponent,
    BannerComponent,
  ],
  templateUrl: './trilhas.component.html',
  styleUrl: './trilhas.component.scss',
})
export class TrilhasComponent {
  selection: number = 1;
  temas: Tema[] = TEMA;
  allSeries: Serie[] = SERIE;
  series!: Serie[];
  isLoading = signal(false);

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.selection = Number(this.route.snapshot.paramMap.get('id')!);
    this.getAllSeries();
  }

  changeSelection(novaSelecao: number) {
    this.isLoading.set(true);
    this.selection = novaSelecao;
    this.getAllSeries();
  }

  // COM API
  // getAllSeries() {
  //   this.isLoading.set(true);

  //   this.apiService.getAll<Serie>(`serie/tema/${this.selection}`).subscribe({
  //     next: (res) => {
  //       this.series = res;
  //       this.isLoading.set(false);
  //     },
  //     error: () => {
  //       this.isLoading.set(false);
  //     },
  //   });
  // }

  getAllSeries() {
    this.isLoading.set(true);
    this.series = this.allSeries.filter((v) => v.tema.id === this.selection);
    this.isLoading.set(false);
  }

  sanitize(title: string) {
    return title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
  }

  onSerieClick(id: number) {
    this.router.navigate([`serie`, id]);
  }
}
