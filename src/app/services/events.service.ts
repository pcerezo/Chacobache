import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = BACKEND + "/api/eventos/";

  constructor(private http: HttpClient) { }

  getEventosFuturos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "historialEventosFuturos");
  }

  getEventosPasados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "historialEventosPasados");
  }

  getAllEventos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "historialEventos");
  }

  getEventosPasadosConMultimedia(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "historialEventosPasadosMultimedia")
  }

  enviarEmailProduccion(formulario: any): Observable<any> {
    return this.http.post<any[]>(this.apiUrl + "solicitudProduccionMusical", formulario);
  }
}
