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
  // selectedHero?: Hero;

  // define private service
  constructor(private heroService: HeroService) {}

  // original way to get data from service
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  ngOnInit(): void {
    this.getHeroes();
  }
  // observable way to get data from service (it will be wait for response async)
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
