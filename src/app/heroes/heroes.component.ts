import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroe: Hero = {
    id: 1,
    name: 'Noe Norberto Guzman Lopez (1147619)'
  };
  constructor() { }

  ngOnInit(): void {
  }

}