import { BACK_URL } from "../../config"
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
	providedIn: "root",
})
export class EstatisticasService {
	private apiUrl = `${BACK_URL}/statistics`; // Modifique para a URL da sua API

	constructor(private http: HttpClient) {}

	getEstatisticas(): Observable<any> {
		return this.http.get<any>(this.apiUrl);
	}
}
