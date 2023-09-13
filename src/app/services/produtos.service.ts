import { Observable } from "rxjs";
import { BACK_URL } from "../config";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class ProdutosService {
	constructor(private http: HttpClient) {}

	getProdutos(categoriaSolucao: any): Observable<any> {
		//FIXME - tratar categoriaSolucao para que fique tudo minusculos e sem espaço
		console.log("getProdutos");
		console.log(categoriaSolucao);
		return this.http.get(
			`${BACK_URL}/products/category/${categoriaSolucao}`
		);
	}
}
