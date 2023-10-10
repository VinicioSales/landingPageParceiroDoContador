import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BACK_URL } from "src/app/config"

@Component({
	selector: "app-estatisticas",
	templateUrl: "./estatisticas.component.html",
	styleUrls: ["./estatisticas.component.css"],
})
export class EstatisticasComponent implements OnInit {
	// estatisticas: any;

	
	estatisticas =  {
			nome: "70% de produtividade",
			descricao: "descricao",
			media: "assets/img/celular-1.png"
	}
	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		// this.fetchStatistics();
	}

	// fetchStatistics(): void {
	// 	this.http.get(`${BACK_URL}/statistics`).subscribe(
	// 		(data: any) => {
	// 			this.estatisticas = data[0];
	// 		},
	// 		(error) => {
	// 			console.error("Erro ao buscar estatísticas:", error);
	// 		}
	// 	);
	// }
}
