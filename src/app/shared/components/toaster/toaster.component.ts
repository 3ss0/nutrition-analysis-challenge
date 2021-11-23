import {Component, TemplateRef} from '@angular/core';

import {ToastService} from '@core/utils';


@Component({
  selector: 'app-toaster',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToasterComponent {
  constructor(public toastService: ToastService) {
  }
  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}