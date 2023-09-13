import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ProdutosService } from "../../services/produtos.service";

@Component({
	selector: "app-modal-solucoes",
	templateUrl: "./modal-solucoes.component.html",
	styleUrls: ["./modal-solucoes.component.css"],
})
export class ModalSolucoesComponent {
	@Output() closeModal = new EventEmitter<void>();
	@Input() tipoSolucao!: string;

	// produtos = [
	//   {
	//     midia: 'assets/img/dados.png',
	//     descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
	//   },
	//   {
	//     midia: 'assets/img/dados.png',
	//     descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
	//   },
	// ];

	produtos!: any[];

	constructor(private produtosService: ProdutosService) {}

	ngOnInit(): void {
		this.produtosService.getProdutos(this.tipoSolucao).subscribe(
			(data) => {
				console.log(data);
				this.produtos = data.map(
					(produto: { midia: any; descricao: any }) => {
						return {
							midia: produto.midia,
							descricao: produto.descricao,
						};
					}
				);
			},
			(error) => {
				console.error("Erro ao buscar produtos:", error);
			}
		);
	}

	handleWrapperClick(event: MouseEvent) {
		if ((event.target as HTMLElement).classList.contains("modal-wrapper")) {
			this.closeModal.emit();
		}
	}
}
