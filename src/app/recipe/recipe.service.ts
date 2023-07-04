import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping/shopping-list/shoppinglist.service";

@Injectable()
export class RecipeService {
    // Service class for recipe Data Center
    recipeSelect = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Ramen',
            'Japanese dish',
            'https://christieathome.com/wp-content/uploads/2021/01/Soy-Chicken-Ramen-Bowl-13-b-2048x2048.jpg',
            [
                new Ingredient('Meat',2),
                new Ingredient('Vegies', 2)
            ]
        ),
        new Recipe('Sushi',
            'Japanese dish',
            'https://th.bing.com/th/id/OIP.mhNhq_sUr_h5axb3YSOgCAHaIK?pid=ImgDet&rs=1',
            [
                new Ingredient('Chili Flex', 2),
                new Ingredient('Origano', 2)
            ]),
        new Recipe('Noodles',
            'Desi Indian dish',
            'https://th.bing.com/th/id/OIP.t7Sg62StM0Aksq3JEsRPhQHaHa?pid=ImgDet&rs=1',
            [
                new Ingredient('Meat',2),
                new Ingredient('Vegies', 2)
            ])
    ];

    constructor(private shoppingService: shoppingListService){}

    getRecipe() {
        return this.recipes;
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppingService.addIngredientToShoppingList(ingredients);
    }

}