import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../../services/materias.service';

@Component({
  standalone: false,
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {
  materias: any[] = [];
  constructor(
    private materiasService: MateriasService
  ) { }

  ngOnInit() {
    this.cargarMaterias();
  }

  cargarMaterias() {
    this.materiasService.obtenerMaterias()
    .then(materias => {
      console.log('materias-->', materias);
      this.materias = materias;
    })
    .catch(error => {
      console.log('error-->',error);
    })
  }

  actualizarMateria(materia: any){

  }

  eliminarrMateria(materia: any){

  }

}
