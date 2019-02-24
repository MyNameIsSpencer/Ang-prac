import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:3000/api/auth/'

interface IForgotPassword {
  email: string;
}

interface IResetPassword {
  password: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  // forgotPassword(email): Observable<IForgotPassword> {   <<<  can do it this way or below way
  forgotPassword(email: IForgotPassword): Observable<any> {    //   <<<  this way, must send email of type IForgotPassword but BE can send of type any
    return this.http.post<IForgotPassword>(`${URL}/forgot-password`, {
      email    //   <<<<  same as saying   email: email
    })
  }

  resetPassword(password, token): Observable<IResetPassword> {
    return this.http.post<IResetPassword>(`${URL}/reset-password/${token}`, {
      password,
      token
    });
  }
}
