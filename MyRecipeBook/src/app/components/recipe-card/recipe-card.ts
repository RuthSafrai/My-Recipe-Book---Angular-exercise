import { Component, Input } from '@angular/core';
import { Recipe } from '../../services/recipe';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css',
})
export class RecipeCard {

constructor(public s : Recipe){ }

@Input() id!: number;
@Input() recipeName!: string;
@Input() category!: string;
@Input() preparationTime!: string;
@Input() difficultyLevel!: string;


}

