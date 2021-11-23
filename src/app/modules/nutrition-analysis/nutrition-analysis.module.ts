import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionAnalysisRoutingModule } from './nutrition-analysis-routing.module';
import { NutritionAnalysisComponent } from './nutrition-analysis.component';
import {SharedModule} from '@shared/shared.module';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import * as fromPages from './pages';

@NgModule({
  declarations: [NutritionAnalysisComponent, ...fromPages.pages],
  imports: [
    CommonModule,
    SharedModule,
    NutritionAnalysisRoutingModule,
    NgbAlertModule
  ]
})
export class NutritionAnalysisModule { }
