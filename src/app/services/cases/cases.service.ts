// src/app/services/api.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BACK_URL } from "../../config"

@Injectable({
	providedIn: "root",
})
export class ApiService {

	constructor(private http: HttpClient) {}

	getCases(): Observable<any> {
		return this.http.get(`${BACK_URL}/cases`);
	}

}
