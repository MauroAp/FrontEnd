import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private apiServerUrl =  'http://localhost:8080/proyectos/';

  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/proyectos/all`);
  }

  public updateProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.apiServerUrl}/proyectos/update`, proyecto);
  } 

  public addProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.apiServerUrl}/proyectos/add`, proyecto);
  }

  public deleteProyecto(personaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/proyectos/delete/${personaId}`);
  }
}