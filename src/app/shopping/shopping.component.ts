import { Component,OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from './shopping-list/shoppinglist.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  Ingredients: Ingredient[];
  constructor(private shoppinglist: shoppingListService){}
  ngOnInit(): void {
    this.Ingredients = this.shoppinglist.getIngredients();
    this.shoppinglist.IngredientChanged
    .subscribe((ingredient: Ingredient[])=>{
      this.Ingredients = ingredient;
    })
  }

}
