import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-solucoes',
  templateUrl: './modal-solucoes.component.html',
  styleUrls: ['./modal-solucoes.component.css']
})
export class ModalSolucoesComponent {
  produtos = [
    {
      imagem: 'assets/img/dados.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    // {
    //   imagem: 'assets/img/dados.png',
    //   descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    // }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
