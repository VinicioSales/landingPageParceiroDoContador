import { Component, ViewChild  } from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-solucoes',
  templateUrl: './solucoes.component.html',
  styleUrls: ['./solucoes.component.css']
})
export class SolucoesComponent {
  descricao: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  tituloSolucao: string = 'Automações'
}
