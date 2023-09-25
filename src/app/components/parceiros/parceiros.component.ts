import { BACK_URL } from "src/app/config"
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PartnersService } from "src/app/services/partners/partners.service";

@Component({
	selector: "app-parceiros",
	templateUrl: "./parceiros.component.html",
	styleUrls: ["./parceiros.component.css"],
})
export class ParceirosComponent implements OnInit {
	partners: any = [];
	constructor(
		private partnersService: PartnersService,
		private http: HttpClient
	) {}

	ngOnInit(): void {
		this.partnersService.getPartners().subscribe((data) => {
			if (Array.isArray(data)) {
				this.partners = data;
			} else {
				console.error("O retorno não é um array:", data);
			}
		});
	}

	fetchParceiros(): void {
		this.http.get(`${BACK_URL}/partners`).subscribe(
			(data: object) => {
				this.partners = data;
			},
			(error) => {
				console.error("Erro ao buscar parceiros:", error);
			}
		);
	}
}
