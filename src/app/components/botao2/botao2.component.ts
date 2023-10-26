import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao2',
  templateUrl: './botao2.component.html',
  styleUrls: ['./botao2.component.css']
})
export class Botao2Component {
  @Input() texto!: string;
  @Input() fontSize: string = '14px';


  @Output() aoClicar: EventEmitter<void> = new EventEmitter<void>();
  onClick() {
    this.aoClicar.emit();
  }
}
