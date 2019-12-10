import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Produtos } from 'src/model/produtos';
import { Plataforma } from 'src/model/plataforma';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const url = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getUserProducts(id): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(`${url}/usuario/produto/${id}`)
      .pipe(catchError(this.handleError<Produtos[]>(`getUserProducts id= ${id}`)));
  }

  createProdutos(produtos): Observable<Produtos> {
    return this.http.post<Produtos>(`${url}/produto`, produtos, httpOptions)
      .pipe(catchError(this.handleError<Produtos>('createProdutos')));
  }

  getPlataforma(): Observable<Plataforma[]> {
    return this.http.get<Plataforma[]>(`${url}/plataforma`)
      .pipe(catchError(this.handleError<Plataforma[]>('getPlataforma')));
  }

  getAllProdutos(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(`${url}/produto`)
      .pipe(catchError(this.handleError<Produtos[]>('getAllProdutos')));
  }

  getProductsByName(name): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(`${url}/busca/produto/${name}`)
      .pipe(catchError(this.handleError<Produtos[]>(`getProductsByName name= ${name}`)));
  }

  getProductById(id): Observable<Produtos> {
    return this.http.get<Produtos>(`${url}/produto/${id}`)
      .pipe(catchError(this.handleError<Produtos>(`getProductById id = ${id}`)));
  }

  getProductsByPlataforma(plataforma): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(`${url}/produto/plataforma/${plataforma}`)
      .pipe(catchError(this.handleError<Produtos[]>(`getProductByPlataforma plataforma = ${plataforma}`)));
  }

  updateProduct(id, product): Observable<any> {
    return this.http.put(`${url}/produto/${id}`, product, httpOptions)
      .pipe(catchError(this.handleError<Produtos>(`updateProduct id = ${id}`)));
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete(`${url}/produto/${id}`, httpOptions)
      .pipe(catchError(this.handleError<Produtos>(`deleteProduct id = ${id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
