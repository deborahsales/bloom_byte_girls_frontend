import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-diamond-button',
  imports: [CommonModule],
  templateUrl: './diamond-button.component.html',
  styleUrl: './diamond-button.component.scss',
})
export class DiamondButtonComponent {
  @Input() texto!: string;
  @Input() imagem!: string;
  @Input() alt!: string;
  @Input() ativo: boolean = false;

  @Output() selecionado = new EventEmitter<void>();

  onClick() {
    this.selecionado.emit();
  }
}
