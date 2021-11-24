import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.scss']
})
export class IngredientsTableComponent implements OnInit {
  @Input() ingredients: any;
  constructor() { }

  ngOnInit() {
  }

}
