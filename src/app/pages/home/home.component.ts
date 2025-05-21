import { Component } from '@angular/core';
import { EstiloAprendizaje } from './estudiante.model';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
  datos: EstiloAprendizaje | null = null

  constructor(private api : AuthService){}

  ObtenerRecomendaciones(){
    this.api.obtenerCursos().subscribe({
      next: (data) => {
        this.datos = data;
      },
      error: (err) =>{
        console.error('Error no se pudieron mostrar las recomendaciones', err);
      }
    });
  }

}
