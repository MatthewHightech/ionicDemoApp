import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'; 

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [{
    id: '1', 
    title: 'pizza', 
    imageUrl: 'https://storage.googleapis.com/phx2-uat-wordpress-uploads/1/2019/12/Fan-Favourite-640x390.jpg', 
    ingredients: ['dough', 'cheese', 'pepperoni']
  }, 
  {
    id: '2', 
    title: 'burger', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/285px-RedDot_Burger.jpg', 
    ingredients: ['buns', 'patty', 'ketchup']
  }
]
  constructor() { }

  getAllRecipes() {
    return [...this.recipes]; 
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId; 
    })}; 
  }
}
