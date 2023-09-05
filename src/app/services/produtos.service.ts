import { Observable } from 'rxjs';
import { BACK_URL } from '../config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<any> {
    console.log("getProdutos");
    return this.http.get(`${BACK_URL}/products`);
  }
}
