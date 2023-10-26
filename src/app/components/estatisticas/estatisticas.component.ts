import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BACK_URL } from "src/app/config"

@Component({
	selector: "app-estatisticas",
	templateUrl: "./estatisticas.component.html",
	styleUrls: ["./estatisticas.component.css"],
})
export class EstatisticasComponent implements OnInit{
	estatisticas: any;

	// estatisticas =  [
	// 	{
	// 		nome: "100% Automatizado",
	// 		descricao: "Leitura instantânea de dados com integração de BI. Informações agora rápidas e intuitivas.",
	// 		media: "assets/img/Ícones - Versão Laranja-33 (1).png"

	// 	},
	// 	{	
	// 		nome: "",
	// 		descricao: "Revolucionamos a arrecadação e a comunicação financeira. Conclusão da conciliação bancária agora em minutos, não dias.",
	// 		media: "assets/img/Ícones - Versão Laranja-08 (1).png"

	// 	},
	// ]

	constructor(private http: HttpClient) {}
	
	ngOnInit(): void {
		this.fetchStatistics();
	}

	fetchStatistics(): void {
		this.http.get(`${BACK_URL}/statistics`).subscribe(
			(data: any) => {
				this.estatisticas = data;
			},
			(error) => {
				console.error("Erro ao buscar estatísticas:", error);
			}
		);
	}
}
