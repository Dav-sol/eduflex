import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  Api_url = "http://127.0.0.1:8000"

  getRecomendaciones(): Observable<any[]>{
    return this.http.get<any[]>(`${this.Api_url}/plan_completo`)
  }
}
