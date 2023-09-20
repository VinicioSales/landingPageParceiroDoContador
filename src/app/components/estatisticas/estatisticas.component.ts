import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "app-estatisticas",
	templateUrl: "./estatisticas.component.html",
	styleUrls: ["./estatisticas.component.css"],
})
export class EstatisticasComponent implements OnInit {
	estatisticas: any;

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.fetchStatistics();
	}

	fetchStatistics(): void {
		this.http.get("http://localhost:60458/statistics").subscribe(
			(data: any) => {
				this.estatisticas = data[0];
			},
			(error) => {
				console.error("Erro ao buscar estatísticas:", error);
			}
		);
	}
}
