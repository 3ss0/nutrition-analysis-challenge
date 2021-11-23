import { Injectable, TemplateRef } from '@angular/core';
import {NgbToastConfig} from '@ng-bootstrap/ng-bootstrap';
@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    const toast = { textOrTpl, ...options };
    this.toasts.push(toast);
    this.remove(toast);
  }

  success(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    const toast = { textOrTpl, classname: 'bg-success text-light',...options }; 
    this.toasts.push(toast);
    this.remove(toast);
  }

  error(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    const toast = { textOrTpl, classname: 'bg-danger text-light',...options };
    this.toasts.push(toast);
    this.remove(toast);
  }
  
  remove(toast) {
    setTimeout(()=>{
        this.toasts = this.toasts.filter(t => t !== toast);
    },toast.delay || 5000);    
  }
}