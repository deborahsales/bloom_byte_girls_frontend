import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Serie } from '../../../core/interfaces/serie.interface';

@Component({
  selector: 'app-series-card',
  imports: [],
  templateUrl: './series-card.component.html',
  styleUrl: './series-card.component.scss',
})
export class SeriesCardComponent {
  @Input() serie!: Serie;
  @Output() clickCard = new EventEmitter<number>();

  onClick() {
    this.clickCard.emit(this.serie.id);
  }
}
