import { Ingredient } from "src/app/shared/ingredient.model";
import { EventEmitter } from "@angular/core"

export class shoppingListService{
    IngredientChanged = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Chilli Flex', 10),
        new Ingredient('Tomato Sause', 5),
    // Updatting/Refereshing with .slice() Function
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      onAddIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
        this.IngredientChanged.emit(this.ingredients.slice())
      }

      addIngredientToShoppingList(ingredient : Ingredient[]){
        this.ingredients.push(...ingredient);
        this.IngredientChanged.emit(this.ingredients.slice());
      }
}