import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-asistencias',
  templateUrl: './mis-asistencias.page.html',
  styleUrls: ['./mis-asistencias.page.scss'],
})
export class MisAsistenciasPage {
  asistencias = [
    { asignatura: 'Matemáticas', fecha: '2024-09-22', presente: true },
    { asignatura: 'Historia', fecha: '2024-09-20', presente: false },
    { asignatura: 'Ciencias', fecha: '2024-09-19', presente: true }
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }
}
