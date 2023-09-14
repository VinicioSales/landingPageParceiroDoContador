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
		//REVIEW - Verificar como fazer um De/Para mais consistente

		this.tipoSolucao = this.normalizeString(this.tipoSolucao);

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

	normalizeString(str: string): string {
		const map: { [key: string]: string } = {
			á: "a",
			à: "a",
			ã: "a",
			â: "a",
			é: "e",
			ê: "e",
			í: "i",
			ó: "o",
			ô: "o",
			õ: "o",
			ú: "u",
			Á: "A",
			À: "A",
			Ã: "A",
			Â: "A",
			É: "E",
			Ê: "E",
			Í: "I",
			Ó: "O",
			Ô: "O",
			Õ: "O",
			Ú: "U",
			ç: "c",
			Ç: "C",
		};

		return str
			.replace(/[áàãâéêíóôõúÁÀÃÂÉÊÍÓÔÕÚçÇ]/g, (match) => map[match])
			.toLowerCase()
			.replace(/\s+/g, "_");
	}

	handleWrapperClick(event: MouseEvent) {
		if ((event.target as HTMLElement).classList.contains("modal-wrapper")) {
			this.closeModal.emit();
		}
	}
}
