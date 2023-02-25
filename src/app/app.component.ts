import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = 'Joaquim';

  // Compartilhando objeto de pai para filho
  userData = {
    email: 'joaquim@gmail.com',
    role: 'admin',
  }

  profissoes = [
    'design', 'programador', 'administrador'
  ]

  title = 'curso-angular';
}
