// src/app/services/api.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	private BASE_URL = "http://localhost:3000"; // Altere para a URL do seu backend se for diferente

	constructor(private http: HttpClient) {}

	getCases(): Observable<any> {
		return this.http.get(`${this.BASE_URL}/cases`);
	}

	// Você pode adicionar mais métodos aqui conforme necessário, por exemplo, para buscar parceiros e estatísticas.
}
