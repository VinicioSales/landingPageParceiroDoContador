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

	tipoSolucao: string = "";
	hovered: boolean = false;
	sessao: string = "";

	solucoes = [
		{
			tituloSolucao: "AUTOMAÇÕES",
			descricao: "Com o propósito de impulsionar o sucesso de nossos clientes, realizamos um diagnóstico de seus sistemas e processos. Desenvolvemos soluções personalizadas focadas em otimizar a eficiência operacional, com o objetivo de eliminar processos repetitivos, tornando a operação das nossas clientes mais ágil, eficaz e lucrativa.",
			imagem1: "assets/img/cones-verso-azul-211.png",
			imagem2: "/assets/img/Ícones - Versão Azul-17.png",
			buttonColor: 'var(--azul-claro)',
		},
		{
			tituloSolucao: "INTEGRAÇÕES",
			descricao: "Com o propósito de impulsionar o sucesso de nossos clientes, realizamos um diagnóstico de seus sistemas e processos. Desenvolvemos integrações focadas em otimizar a eficiência operacional, com o objetivo de eliminar processos repetitivos, tornando a operação das nossas clientes mais ágil, eficaz e lucrativa.",

			imagem1: "assets/img/Ícones - Versão Laranja-34.png",
			imagem2: "assets/img/Ícones - Versão Laranja-35.png",
			buttonColor: 'var(--amarelo)',
		},
		{
			tituloSolucao: "ANÁLISE DE DADOS",
			descricao:
				"Com o objetivo de aprimorar a análise de resultados e a tomada de decisões dos nossos clientes, realizamos diagnósticos e criamos Dashboards Personalizados (BI's)	que se concentram nos processos e estruturas de software da empresas.",
			imagem1: "assets/img/Ícones - Versão Verde-02.png",
			imagem2: "assets/img/Ícones - Versão Verde-23.png",
			buttonColor: 'var(--verde-claro)',
		},
	];

	openStoreSection(tituloSolucao: string) {
		switch (tituloSolucao) {
			case "AUTOMAÇÕES":
				this.sessao = "2"
				break
			case "INTEGRAÇÕES":
				this.sessao = "3"
				break
			case "ANÁLISE DE DADOS":
				this.sessao = "9"
			}
		window.open(`https://parceirodocontador.com.br/store#page-${this.sessao}`, '_blank');
	}

}
