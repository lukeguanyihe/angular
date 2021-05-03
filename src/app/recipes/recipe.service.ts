import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable() //inject shopping list service
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipt', 'this is test desc', 'https://cdn2.iconfinder.com/data/icons/bakery-related-line/64/bakery_pastry_cooking-06-512.png',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Shit', 100),
    ]),
    new Recipe('B test recipt', 'this is test desc', 'https://cdn2.iconfinder.com/data/icons/bakery-related-line/64/bakery_pastry_cooking-06-512.png',
    [
      new Ingredient('Apple', 1),
      new Ingredient('Pear', 100),
    ]),
  ];

  constructor(private slService: ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice(); //only get a copy from the outside
  }

  addIngridentsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngridents(ingredients);
  }
}
