import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class LeadsService {
	private apiUrl = "http://192.168.15.113:3000/leads"; // Substitua SEU_BACKEND_URL pela URL do seu backend

	constructor(private http: HttpClient) {}

	createLead(data: any): Observable<any> {
		return this.http.post(this.apiUrl, data);
	}
}
