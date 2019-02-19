import { Auth } from './../models/auth-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(body): Observable<Auth> {
    return this.http.post<Auth>(`${URL}/register`, body);
  }
}
