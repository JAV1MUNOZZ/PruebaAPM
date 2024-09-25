import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string = 'Usuario1';  // Puedes obtener este dato del login real

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}
