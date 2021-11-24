import { Component, OnInit } from '@angular/core';
import {NutritionService} from '@core/services';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  ingredients: string = '';
  isValid: boolean = false;
  userHasTyped: boolean = false;
  constructor(
    private nutritionService: NutritionService
  ) { }

  ngOnInit() {
  }

  changeHandler(ingredientsValue: string) {
    if(!this.userHasTyped) this.userHasTyped = true;
    // check if user entered ingredients line by line or with , sperator
    const parsedIngredients = ingredientsValue.replace(/,/g,'\n');
    const ingredientsLines = parsedIngredients.split('\n');
    let isValid = false;
    for(let i = 0 ; i < ingredientsLines.length; i++) {
      const line = ingredientsLines[i];
      // check if just one line has Qty , unit and foodname
      if(this.checkSingleIngredient(line)) {
        isValid = true;
        break;
      }else {
        isValid = false;
      }
    }
    this.isValid = isValid;
    if(this.isValid) this.nutritionService.activeRecipe.next(ingredientsLines);
  }

  checkSingleIngredient(ingredient:  string) {
    // check Qty , unit and food
    const [quantity,unit,food] = ingredient.trim().split(' ');
    if(!quantity || !unit || !food ) {
      return false;
    }
    if(isNaN(Number(quantity))) return false;
    return true;
  }

}
