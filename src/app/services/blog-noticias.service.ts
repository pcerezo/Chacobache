import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticuloBlog } from '../models/articuloBlog';

@Injectable({
  providedIn: 'root'
})
export class BlogNoticiasService {

  private apiUrl = "http://localhost:5000/api/blog/";

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "articulos");
  }

  getArticuloById(id: number): Observable<ArticuloBlog> {
    return this.http.get<ArticuloBlog>(this.apiUrl + "detallesArticulo/" + id);
  }
}
