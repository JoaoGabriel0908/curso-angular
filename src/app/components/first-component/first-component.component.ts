import { Component, Input } from '@angular/core';

// Meta configuração dos componentes
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})

// Classe responsável pela lógica (controller) acessível via template
export class FirstComponentComponent {
  name: string = 'João';
  age: number = 19;

  @Input()
  profissao = ['1', '2', '3'];
}
