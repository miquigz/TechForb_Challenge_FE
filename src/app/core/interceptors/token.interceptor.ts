import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url);
    if (request.url.includes('auth/signin') || request.url.includes('auth/signup')){
      return next.handle(request);
    }   
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token){
      request = request.clone({
        setHeaders: {
          "x-access-token": token
        }
      });
    }
    return next.handle(request);
  }
}
