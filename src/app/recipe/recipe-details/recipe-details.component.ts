import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { shoppingListService } from 'src/app/shopping/shopping-list/shoppinglist.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  @Input() recipeInfo : Recipe;
  constructor(private recipeService : RecipeService){}

  addToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipeInfo.ingredient);
  }
}
