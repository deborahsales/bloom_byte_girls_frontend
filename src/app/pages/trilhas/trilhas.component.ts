import { Component } from '@angular/core';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { DiamondButtonComponent } from '../../shared/components/diamond-button/diamond-button.component';

@Component({
  selector: 'app-trilhas',
  imports: [ContainerComponent, DiamondButtonComponent],
  templateUrl: './trilhas.component.html',
  styleUrl: './trilhas.component.scss',
})
export class TrilhasComponent {
  selection: string = 'logica';

  changeSelection(novaSelecao: string) {
    this.selection = novaSelecao;
  }
}
