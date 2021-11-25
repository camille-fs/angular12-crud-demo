import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit, ProduitIn} from "../model/produit";

const API_PRODUITS_URL: string = 'http://localhost:8080/api/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(API_PRODUITS_URL);
  }

  getById(id: number): Observable<Produit> {
    return this.http.get<Produit>(API_PRODUITS_URL + '/' + id);
  }

  create(produit: ProduitIn): Observable<Produit[]> {
    return this.http.post<Produit[]>(API_PRODUITS_URL, produit, this.httpOptions);
  }

  update(id: number, produit: Produit): Observable<Produit[]> {
    return this.http.put<Produit[]>(API_PRODUITS_URL + '/' + id, produit, this.httpOptions);
  }

  delete(id: number): Observable<Produit[]> {
    return this.http.delete<Produit[]>(API_PRODUITS_URL + '/' + id, this.httpOptions);
  }
}
