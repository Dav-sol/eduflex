import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // Agrega FormsModule a los imports
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials: any = { email: '', password: '' }; // Inicializa para evitar undefined
  errorMessage = '';

  constructor( private router: Router) {}
  /**
   * Maneja el evento de inicio de sesión.
   * Realiza la autenticación y redirige al usuario a la página de inicio si es exitoso.
   */
  onSubmit() : void {
  }
}