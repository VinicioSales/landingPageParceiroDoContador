import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BACK_URL } from "../../config";

@Injectable({
	providedIn: "root",
})
export class LeadsService {
	private apiUrl = `${BACK_URL}/leads`; // Substitua SEU_BACKEND_URL pela URL do seu backend

	constructor(private http: HttpClient) {}

	createLead(data: any): Observable<any> {
		return this.http.post(this.apiUrl, data);
	}
}
