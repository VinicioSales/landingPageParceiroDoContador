import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-modal-solucoes',
  templateUrl: './modal-solucoes.component.html',
  styleUrls: ['./modal-solucoes.component.css']
})
export class ModalSolucoesComponent {
  @Output() closeModal = new EventEmitter<void>();

  // produtos = [
  //   {
  //     imagem: 'assets/img/dados.png',
  //     descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  //   },
  //   {
  //     imagem: 'assets/img/dados.png',
  //     descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  //   },
  // ];


  produtos!: any[];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe(
      data => {
        console.log(data)
        this.produtos = data.map((produto: { imagem: any; descricao: any; }) => {
          return {
            imagem: produto.imagem,
            descricao: produto.descricao
          };
        });
      },
      error => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }

  handleWrapperClick(event: MouseEvent) {
    // Check if the click target is the modal wrapper itself
    if ((event.target as HTMLElement).classList.contains('modal-wrapper')) {
        this.closeModal.emit();
    }
}

}
