import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { ContainerComponent } from '../../shared/components/container/container.component';

@Component({
  selector: 'app-projetos',
  imports: [ContainerComponent, BannerComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {}
