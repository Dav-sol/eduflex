import { Component, OnInit } from '@angular/core';
import { EstiloAprendizaje } from './estudiante.model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
   
  datos: EstiloAprendizaje | null = null

  constructor(private api: ApiService){}
  
  ngOnInit(): void {
    this.api.obtenerRecursos().subscribe(data => {
      console.log(data)
    })
  }
  

}
