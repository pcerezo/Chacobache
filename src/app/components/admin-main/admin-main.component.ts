import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-main',
  standalone: true,
  imports: [],
  templateUrl: './admin-main.component.html',
  styleUrl: './admin-main.component.css'
})
export class AdminMainComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    // Navegar a la ruta seleccionada
    this.router.navigate([`/admin/${route}`]);
  }
}
