import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BACK_URL } from "src/app/config"

@Injectable({
	providedIn: "root",
})
export class PartnersService {
	private readonly apiUrl = `${BACK_URL}/partners`; // Substitua por sua URL base, se for diferente

	constructor(private http: HttpClient) {}

	// Método para obter todos os parceiros
	getPartners(): Observable<Object> {
		return this.http.get<Object>(`${this.apiUrl}`);
	}
}
