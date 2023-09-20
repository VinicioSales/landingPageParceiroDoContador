import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class EstatisticasService {
	private apiUrl = "http://localhost:60458/statistics"; // Modifique para a URL da sua API

	constructor(private http: HttpClient) {}

	getEstatisticas(): Observable<any> {
		return this.http.get<any>(this.apiUrl);
	}
}
