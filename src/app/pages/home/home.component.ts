import { Component } from '@angular/core';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, HeroSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
