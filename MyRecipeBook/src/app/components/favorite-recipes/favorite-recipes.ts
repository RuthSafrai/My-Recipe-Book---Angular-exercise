import { Component, Input } from '@angular/core';
import { Recipe } from '../../services/recipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-recipes',
  imports: [CommonModule],
  templateUrl: './favorite-recipes.html',
  styleUrl: './favorite-recipes.css',
})
export class FavoriteRecipes {
  constructor(public s: Recipe) {}
  
@Input() id!: number;
@Input() recipeName!: string;
@Input() category!: string;
@Input() preparationTime!: string;
@Input() difficultyLevel!: string;
}
