import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  Recipes = [
    {recipeId : 1, recipeName : 'עוף', category : 'מנה עיקרית', preparationTime : '30', difficultyLevel : 'בינוני'},
    {recipeId : 2, recipeName : 'חזה', category : 'מנה עיקרית', preparationTime : '45', difficultyLevel : 'בינוני'},
    {recipeId : 3, recipeName : 'דג', category : 'מנה עיקרית', preparationTime : '20', difficultyLevel : 'קל'},
    {recipeId : 4, recipeName : 'פסטה', category : 'תוספות', preparationTime : '25', difficultyLevel : 'קל'},
    {recipeId : 5, recipeName : 'סלט', category : 'מנות ראשונות', preparationTime : '15', difficultyLevel : 'קל'},
    {recipeId : 6, recipeName : 'מרק', category : 'מנות ראשונות', preparationTime : '20', difficultyLevel : 'קל'},
    {recipeId : 7, recipeName : 'שייק', category : 'מנה אחרונה', preparationTime : '60', difficultyLevel : 'בינוני'},
    {recipeId : 8, recipeName : 'גלידה', category : 'מנה אחרונה', preparationTime : '30', difficultyLevel : 'קל'},
  
  ];
  getAllRecipes() {
    return this.Recipes;
  }
  favoriteRecipes: number[] = [];

  addRecipe(recipeId: number) {
    if (this.favoriteRecipes.includes(recipeId)) {
      return;
    }
    this.favoriteRecipes.push(recipeId);
  }
  removeAllFavoritesRecipes() {
    this.favoriteRecipes = [];
  }
  getAllFavoritesRecipes() {
    return this.Recipes.filter((recipe) => this.favoriteRecipes.includes(recipe.recipeId));
  }
 

}
