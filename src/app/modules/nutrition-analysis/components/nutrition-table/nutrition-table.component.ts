import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition-table',
  templateUrl: './nutrition-table.component.html',
  styleUrls: ['./nutrition-table.component.scss']
})
export class NutritionTableComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
