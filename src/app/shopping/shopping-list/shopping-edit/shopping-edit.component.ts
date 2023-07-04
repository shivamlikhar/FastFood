import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('inputName') nameInputRef : ElementRef;
  @ViewChild('inputAmount') amountInputRef : ElementRef;


  constructor(private shopListService: shoppingListService){}

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const IngredientAdded = new Ingredient(ingName, ingAmount);
    console.log(" From onAddItem : "+ ingName + ingAmount);
    this.shopListService.onAddIngredient(IngredientAdded);
  }

  onRemoveItem(){
    // To Remove Item From List
  }

  onReset(){
    // To Reset list
  }
}
