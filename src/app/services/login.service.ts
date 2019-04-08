import { Injectable } from "@angular/core";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import User from "../models/user";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class LoginService{
  constructor(private http: HttpClient) {}

  login(user:User): Observable<any> {
    return this.http.post(
      environment.url+'/login',
      {
        email: user.email,
        password: user.password
      }
    )
  }
}
