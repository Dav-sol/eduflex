import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  

  

  obtenerRecursos(){
    return this.http.get('http://localhost:8000/plan_completo');
  }
}
