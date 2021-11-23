import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NutritionAnalysisComponent} from './nutrition-analysis.component';
import {RecipeComponent , IngredientsAnalysisComponent} from './pages';
const routes: Routes = [{
  path: '',
  component: NutritionAnalysisComponent,
  children: [
    {
      path: '',
      component: RecipeComponent
    },
    {
      path: 'analysis',
      component: IngredientsAnalysisComponent
    },
    {
      path: '**' , redirectTo: ''
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionAnalysisRoutingModule { }
