import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    req: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    const token = this.tokenService.GetToken();
    if (token) {
      headers['Authorization'] = `bearer ${token}`;
    }
    const _req = req.clone({setHeaders: headers})
    return next.handle(_req);
  }
}
