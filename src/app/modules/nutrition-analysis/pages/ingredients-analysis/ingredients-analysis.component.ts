import { Component, OnDestroy, OnInit } from '@angular/core';
import { IIngredient, IRecipe } from '@core/models';
import { NutritionService } from '@core/services/nutrition.service';
import { Subscription } from 'rxjs';
import {ToastService} from '@core/utils';
@Component({
  selector: 'app-ingredients-analysis',
  templateUrl: './ingredients-analysis.component.html',
  styleUrls: ['./ingredients-analysis.component.scss']
})
export class IngredientsAnalysisComponent implements OnInit , OnDestroy {
  activeRecipe: Array<string>;
  subscriptions = new Subscription();
  recipeIngredients: IIngredient[] = [];
  isLoading: boolean = false;
  constructor(
    private nutritionService: NutritionService,
    private toaster: ToastService,
  ) { }

  ngOnInit() {
    const subscribtion = this.nutritionService.activeRecipe.subscribe((recipe : Array<string>)=>{
      if(recipe) {
        this.activeRecipe = recipe;
        this.analyzeRecipe();
      }
    });
    this.subscriptions.add(subscribtion);
  }

  analyzeRecipe() {
    let data: IRecipe = {
      ingr: this.activeRecipe
    };
    this.isLoading = true;
    this.nutritionService.analyzeRecipe(data).subscribe((response:any)=>{
      this.parseAnalysisResponse(response);
      this.isLoading = false;
    },(error:any)=>{
      this.isLoading = false;
    });
  }
  parseAnalysisResponse(response: any){
    let parsedIngredients = [];
    for(let i = 0 ; i < response.ingredients.length; i++) {
      let ingredient = response.ingredients[i];
      if(ingredient.parsed) {
        parsedIngredients.push({
          quantity: ingredient.parsed[0].quantity,
          unit: ingredient.parsed[0].measure,
          food: ingredient.parsed[0].foodMatch,
          weight: ingredient.parsed[0].weight,
          calories: ingredient.parsed[0].nutrients.ENERC_KCAL.quantity,
          caloriesUnit: ingredient.parsed[0].nutrients.ENERC_KCAL.unit
        });
      }
    }
    this.recipeIngredients = parsedIngredients;
  }


  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
