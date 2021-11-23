import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {FormsModule} from '@angular/forms';
import {NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import * as fromComponents from "./components";

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    FormsModule,
    NgbToastModule
  ],
  exports: [
    ...fromComponents.components,
    FormsModule
  ]
})
export class SharedModule {}
