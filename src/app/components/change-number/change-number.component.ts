// Transmitindo Eventos com EventEmitter e passando de pai para filho com Output
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css'],
})
export class ChangeNumberComponent {
  // Criando um evento com um retorno any(qualquer)
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  // Método que emite o change Number
  handleClick() {
    console.log('Mudou o número');
    // Pssango o evento emitido dentro da função
    this.changeNumber.emit();
  }
}
