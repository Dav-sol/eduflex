import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstiloAprendizaje } from '../pages/home/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private api = "http://localhost:8000"

  

  obtenerRecursos() : Observable<any>{
    return this.http.get<EstiloAprendizaje>(`${this.api}/plan_completo`);
  }
}
