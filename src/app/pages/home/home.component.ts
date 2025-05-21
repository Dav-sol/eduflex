import { Component } from '@angular/core';
import { EstiloAprendizaje } from './estudiante.model';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
  datos: EstiloAprendizaje | null = null

  constructor(private api : ApiService){}

  ObtenerRecomendaciones(){
    this.api.obtenerRecursos().subscribe({
      next: (data) => {
        this.datos = data;
      },
      error: (err) =>{
        console.error('Error no se pudieron mostrar las recomendaciones', err);
      }
    });
  }

}
