import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService, ErrorService, ToastService } from '@core/utils';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingService);
    const toaster = this.injector.get(ToastService);
    let message;
    let stackTrace;
    let errorType: string;
    if (error instanceof HttpErrorResponse) {
      // Server error
      message = errorService.getServerErrorMessage(error);
      // stackTrace = errorService.getServerErrorStackTrace(error);
      errorType = 'Server Side Error';
      toaster.error(message);
    } else {
      // Client Error
      message = errorService.getClientErrorMessage(error);
      errorType = 'Client Side Error';
      toaster.error(message);
    }
    // Always log errors
    logger.logError(message, stackTrace);
  }
}
