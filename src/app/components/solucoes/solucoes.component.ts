import { Component, ViewChild, Input  } from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-solucoes',
  templateUrl: './solucoes.component.html',
  styleUrls: ['./solucoes.component.css']
})
export class SolucoesComponent {
  @Input() imagem1!: string;
  @Input() imagem2!: string;
  @Input() descricao!: string;
  @Input() tituloSolucao!: string;
}
