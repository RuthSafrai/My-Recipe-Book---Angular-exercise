import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeCard } from './components/recipe-card/recipe-card';
import { Recipe } from './services/recipe';
import { CommonModule } from '@angular/common';
import { FavoriteRecipes } from './components/favorite-recipes/favorite-recipes';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeCard, CommonModule, FavoriteRecipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyRecipeBook');
  constructor(public s : Recipe){}

   isShow = false;

  show()
  {
      this.isShow = true;
  }
}
