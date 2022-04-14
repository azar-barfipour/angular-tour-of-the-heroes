import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';

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

  // passing from mock-heroes file to heroes variable
  // heroes = HEROES;

  // add service here
  heroes: Hero[] = [];

  // declare selectedHero var if it's existing from interface Hero
  selectedHero?: Hero;

  // define private service
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
