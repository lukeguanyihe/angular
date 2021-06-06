import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable() //inject shopping list service
export class RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();
  //recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('A test recipt', 'this is test desc', 'https://cdn2.iconfinder.com/data/icons/bakery-related-line/64/bakery_pastry_cooking-06-512.png',
  //   [
  //     new Ingredient('Meat', 1),
  //     new Ingredient('Shit', 100),
  //   ]),
  //   new Recipe('B test recipt', 'this is test desc', 'https://cdn2.iconfinder.com/data/icons/bakery-related-line/64/bakery_pastry_cooking-06-512.png',
  //   [
  //     new Ingredient('Apple', 1),
  //     new Ingredient('Pear', 100),
  //   ]),
  // ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice(); //only get a copy from the outside
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngridentsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngridents(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
