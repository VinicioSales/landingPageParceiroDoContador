import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/cases/cases.service";

@Component({
	selector: "app-cases",
	templateUrl: "./cases.component.html",
	styleUrls: ["./cases.component.css"],
})
export class CasesComponent implements OnInit {
	imgCase1!: string;
	imgCase2!: string;
	imgCase3!: string;
	textoCase1!: string;

	cases: any[] = [];

	constructor(private apiService: ApiService) {} // Injete o serviço

	ngOnInit(): void {
		this.fetchCases();
	}

	fetchCases(): void {
		this.apiService.getCases().subscribe(
			(data) => {
				this.cases = data;
			},
			(error) => {
				console.error("Erro ao buscar cases:", error);
			}
		);
	}
}
