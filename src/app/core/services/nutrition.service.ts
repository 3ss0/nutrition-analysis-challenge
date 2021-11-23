import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@env';
import {RequestService} from '@core/utils';
import {IRecipe} from '@core/models';
@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  private appKeysQueryParams = `?force=true&app_id=${environment.app_id}&app_key=${environment.app_key}`;
  public activeRecipe: BehaviorSubject<Array<string>>;

  constructor(
    private requestService: RequestService,
  ) {
    this.activeRecipe = new BehaviorSubject<Array<string>>(null);
  }

  analyzeRecipe(data: IRecipe) {
    const url = `nutrition-details${this.appKeysQueryParams}`;
    return this.requestService.post(url,data);
  }
}
