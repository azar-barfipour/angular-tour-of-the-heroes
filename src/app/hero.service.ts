import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // original
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // observable
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  constructor(private messageService: MessageService) {}
}
