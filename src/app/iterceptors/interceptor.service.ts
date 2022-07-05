import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.info('Request interceptado');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-token': 'Token de acceso'
    });

    const requestClone = req.clone({
      headers,
    });

    return next.handle(requestClone)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => new Error(`codigo de estado: ${error.status} - tipo de error: ${error.statusText}`));
  }
}
