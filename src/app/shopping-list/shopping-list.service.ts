import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
export class ShoppingListService {
  //ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  getIngredients() {
    return this.ingredients.slice(); //return the copy of ingredient
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngridents(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    //this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
