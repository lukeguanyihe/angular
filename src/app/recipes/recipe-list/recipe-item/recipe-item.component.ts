import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from "../../recipe.service";
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //get recipe from recipe list component
  @Input() recipe: Recipe;
  @Input() index: number;

  // listen to this event from outside
  // @Output() recipeSelected = new EventEmitter<void>(); //void = none

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
  }

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
