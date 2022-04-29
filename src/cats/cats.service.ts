import { Injectable } from '@nestjs/common';
import { Cat } from './cat';

@Injectable()
export class CatsService {
  public cats: Cat[] = [
    {
      id: 1,
      name: 'Pepe',
      age: 2,
      breed: 'short-haired',
    },
    {
      id: 2,
      name: 'Garfield',
      age: 3,
      breed: 'short-haired',
    },
    {
      id: 3,
      name: 'Misifú',
      age: 2,
      breed: 'short-haired',
    },
  ];

  addCat(cat: Cat) {
    this.cats.push(cat);
  }

  getAll(): Cat[] {
    return this.cats;
  }

  getById(id: number) {
    const cat = this.cats.find((x) => x.id == id);
    console.log(id);
    console.log('cat found: ' + JSON.stringify(cat));
    return cat;
  }

  deleteById(id: number) {
    const index = this.cats
      .map((x) => {
        return x.id;
      })
      .indexOf(id);
    this.cats.splice(index - 1, 1);
  }
}
