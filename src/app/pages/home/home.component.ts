import { Component } from '@angular/core';
import { EstiloAprendizaje } from './estudiante.model';
import { ApiService } from '../../services/api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
  datos : EstiloAprendizaje | null = null

  constructor(private api : ApiService){}

  ObtenerRecomendaciones(){
    this.api.getRecomendaciones().subscribe({
      next: (data) => {
        this.datos = data;
      },
      error: (err) =>{
        
      }
    });
  }

}
