import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  

  private apiServerUrl = 'http://localhost:8080/estudios/';

  constructor(private http: HttpClient) { }

  public getEstudios(): Observable<Estudios[]> {
    return this.http.get<Estudios[]>(`${this.apiServerUrl}all`);
  }

  public updateEstudios(estudios: Estudios): Observable<Estudios> {
    return this.http.put<Estudios>(`${this.apiServerUrl}update`, estudios);
  } 

  public addEstudios(estudios: Estudios): Observable<Estudios> {
    return this.http.post<Estudios>(`${this.apiServerUrl}add`, estudios);
  }

  public deleteEstudios(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}delete/${id}`);
  }
}
