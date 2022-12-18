import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/hardysoft';

@Injectable({
  providedIn: 'root'
})
export class HardysoftService {

  private apiServerUrl = 'https://backend-production-2440.up.railway.app/skills/';

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiServerUrl}all`);
  }

  public addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.apiServerUrl}add`, skill);
  } 

  public editSkill(skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.apiServerUrl}update`, skill);
  }



  public deleteSkill(skillId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}delete/${skillId}`);
  }
}