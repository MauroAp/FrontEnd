import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 
  private apiServerUrl = 'http://localhost:8080/persona/';

  constructor(private http: HttpClient) { }

  public getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiServerUrl}all`);
  }

  public addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.apiServerUrl}add`, persona);
  } 

  public updatePersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiServerUrl}update`, persona);
  }

  public deletePersona(personaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}delete/${personaId}`);
  }
}
