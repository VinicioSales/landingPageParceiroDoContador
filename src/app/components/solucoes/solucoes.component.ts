import { Component, Input } from "@angular/core";

@Component({
	selector: "app-solucoes",
	templateUrl: "./solucoes.component.html",
	styleUrls: ["./solucoes.component.css"],
})
export class SolucoesComponent {
	@Input() imagem1!: string;
	@Input() imagem2!: string;
	@Input() descricao!: string;
	@Input() tituloSolucao!: string;

	tipoSolucao: string = "";
	showModal: boolean = false;

	solucoes = [
		{
			tituloSolucao: "Automações",
			descricao:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			imagem1: "assets/img/engrenagem.png",
			imagem2: "assets/img/cerebro.png",
		},
		// {
		// 	tituloSolucao: "Integrações",
		// 	descricao:
		// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		// 	imagem1: "assets/img/integracao.png",
		// 	imagem2: "assets/img/integracao2.png",
		// },
		// {
		// 	tituloSolucao: "Análise de Dados",
		// 	descricao:
		// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		// 	imagem1: "assets/img/dados.png",
		// 	imagem2: "assets/img/dados2.png",
		// },
	];

	openModal(tituloSolucao: string) {
		this.showModal = true;
		this.tipoSolucao = tituloSolucao;
	}

	closeModal() {
		this.showModal = false;
	}
}
