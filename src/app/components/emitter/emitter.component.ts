import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent {
  myNumber: number = 0;

  // Função que recebe a emição do evento de click e faz a lógica aqui
  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
