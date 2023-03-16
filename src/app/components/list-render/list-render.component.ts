import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/animals/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  constructor(private listService: ListService) {
    this.getAnimals();
  };

  // Criando um lista de objetos(animais)
  animals : Animal[] = [];

  animalDetails : string = "";

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  showAge(animal : Animal) {
    this.animalDetails = `O ${animal.type} ${animal.name} tem ${animal.age}`
  }

  removeAnimal(animal : Animal) {
    console.log('Removendo animal');
    this.animals = this.listService.remove(this.animals, animal);
  }

  // subscribe = await
  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
