import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient, private _router: Router) {  }

  public loginUserFromRemote(user: User):Observable<any>{
      return this._http.post<any>("http://localhost:8080/sportPartnerlogin", user)
  }
  public registerUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/sportPartnerregister", user)
  }

  //double negate because we want a boolean value
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken(){
    return localStorage.getItem('token')
  }

}