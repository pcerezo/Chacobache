import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticuloBlog } from '../models/articuloBlog';
import { BACKEND } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class BlogNoticiasService {

  private apiUrl = BACKEND + "/api/blog/";

  constructor(private http: HttpClient) { }

  getNumArticulos(filtro: string): Observable<number> {
    if (filtro.length > 0) {
      return this.http.get<number>(this.apiUrl + "articulos?filtro=" + filtro);
    }
    else {
      return this.http.get<number>(this.apiUrl + "articulos");
    }
  }

  getArticulosPagina(page: number, filtro: string) {
    if (filtro.length > 0) {
      return this.http.get<any>(this.apiUrl + "articulosPagina/" + page + "?filtro=" + filtro);
    }
    else {
      return this.http.get<any>(this.apiUrl + "articulosPagina/" + page);
    }
  }

  getArticuloById(id: number): Observable<ArticuloBlog> {
    return this.http.get<ArticuloBlog>(this.apiUrl + "detallesArticulo/" + id);
  }
}
