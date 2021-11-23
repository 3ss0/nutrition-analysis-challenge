import { ErrorService } from './error.service';
import { LoggingService } from './logging.service';
import { RequestService } from './request.service';
import {ToastService} from './toaster.service';

export const services: any[] = [
  ErrorService,
  LoggingService,
  RequestService,
  ToastService,
];

export * from './error.service';
export * from './logging.service';
export * from './request.service';
export * from './toaster.service';