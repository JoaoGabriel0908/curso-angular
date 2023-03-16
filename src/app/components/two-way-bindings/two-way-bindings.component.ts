import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Times } from 'src/app/times/Times';

@Component({
  selector: 'app-two-way-bindings',
  templateUrl: './two-way-bindings.component.html',
  styleUrls: ['./two-way-bindings.component.css'],
})
export class TwoWayBindingsComponent implements OnInit {

  constructor(private serviceService :ServiceService){
    this.getTimes();
  }

  times : Times[] = [
    {name: 'Times'}
  ];

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  getTimes() : void {
    this.serviceService.getAll().subscribe((time) => (this.times = time))
  }

  name: string = '';
}
