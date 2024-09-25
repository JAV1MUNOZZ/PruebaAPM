import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage {
  oldPassword: string = '';
  newPassword: string = '';

  constructor(private router: Router) {}

  changePassword() {
    // Aquí puedes agregar la lógica para cambiar la clave.
    alert('Clave cambiada correctamente.');
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
