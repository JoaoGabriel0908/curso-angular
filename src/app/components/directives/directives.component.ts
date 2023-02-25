import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  // Inserindo estilos dinâmicos
  size = 40
  font = 'Arial'

  // Adicionando classe
  classes = ['green-title']
}
