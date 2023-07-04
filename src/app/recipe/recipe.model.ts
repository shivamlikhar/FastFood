import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public desciption: string;
    public imagePath: string;
    public ingredient: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.desciption = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredients;
    }
}