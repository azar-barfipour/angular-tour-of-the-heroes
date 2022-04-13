import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // using Hero interface and pass it to hero as a object
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  selectedHero?: Hero;
  // passing from mock-heroes file to heroes variable
  heroes = HEROES;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
