import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class PartnersService {
	private readonly apiUrl = "http://localhost:60458"; // Substitua por sua URL base, se for diferente

	constructor(private http: HttpClient) {}

	// Método para obter todos os parceiros
	getPartners(): Observable<Object> {
		return this.http.get<Object>(`${this.apiUrl}/partners`);
	}
}
