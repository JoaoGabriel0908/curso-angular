import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  someText : string = 'TESTANDO O TEXTO'

  today = new Date();

  money : number = 1000;
}
