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
	hovered: boolean = false;
	showModal: boolean = false;

	solucoes = [
		{
			tituloSolucao: "AUTOMAÇÕES",
			descricao:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			imagem1: "assets/img/cones-verso-azul-211.png",
			imagem2: "/assets/img/Ícones - Versão Azul-17.png",
			buttonColor: 'var(--azul-claro)',
		},
		{
			tituloSolucao: "INTEGRAÇÕES",
			descricao:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			imagem1: "assets/img/Ícones - Versão Laranja-34.png",
			imagem2: "assets/img/Ícones - Versão Laranja-35.png",
			buttonColor: 'var(--amarelo)',
		},
		{
			tituloSolucao: "ANÁLISE DE DADOS",
			descricao:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			imagem1: "assets/img/Ícones - Versão Verde-02.png",
			imagem2: "assets/img/Ícones - Versão Verde-23.png",
			buttonColor: 'var(--verde-claro)',
		},
	];

	openModal(tituloSolucao: string) {
		this.showModal = true;
		this.tipoSolucao = tituloSolucao;
	}

	closeModal() {
		this.showModal = false;
	}
}
