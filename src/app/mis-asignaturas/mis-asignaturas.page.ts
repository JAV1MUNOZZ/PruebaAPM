import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage {
  asignaturas = [
    { nombre: 'Matemáticas', seccion: 'A1' },
    { nombre: 'Historia', seccion: 'B2' },
    { nombre: 'Ciencias', seccion: 'C3' }
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }
}
