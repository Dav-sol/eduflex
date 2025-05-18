import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login'; // Reemplaza con la URL de tu API
  private tokenKey = 'authToken'; // Clave para almacenar el token en el almacenamiento

  constructor(private http: HttpClient) { }

  /**
   * Realiza la petición de inicio de sesión a la API.
   * @param credentials Objeto con las credenciales del usuario (email y password).
   * @returns Observable con la respuesta de la API.
   */
  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap(response => {
        // Almacena el token en el almacenamiento al recibir una respuesta exitosa.
        this.setToken(response.token);
      }),
      catchError(this.handleError<any>('login')) // Maneja los errores de la petición.
    );
  }

  /**
   * Cierra la sesión del usuario, eliminando el token del almacenamiento.
   */
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  /**
   * Obtiene el token de autenticación del almacenamiento.
   * @returns El token o null si no existe.
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Verifica si el usuario está autenticado comprobando la existencia de un token válido.
   * @returns True si el usuario está autenticado, false en caso contrario.
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  /**
   * Almacena el token de autenticación en el almacenamiento (localStorage).
   * @param token El token a almacenar.
   */
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Maneja los errores de las peticiones HTTP.
   * @param operation Nombre de la operación que falló.
   * @param result Valor opcional a devolver como resultado del observable.
   * @returns Función que maneja el error y devuelve un observable con un mensaje de error.
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // Loguea el error en la consola para desarrollo.

      // Transforma el error para que la aplicación pueda seguir ejecutándose.
      return of(result as T);
    };
  }
}
