import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipt', 'this is test desc', 'https://cdn2.iconfinder.com/data/icons/bakery-related-line/64/bakery_pastry_cooking-06-512.png')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
