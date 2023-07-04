import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
import { dropDownDirective } from './shared/dropdown.directive';
import { shoppingListService } from './shopping/shopping-list/shoppinglist.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    ShoppingComponent,
    RecipeDetailsComponent,
    ShoppingEditComponent,
    RecipeComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    HomeComponent,
    dropDownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [shoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
