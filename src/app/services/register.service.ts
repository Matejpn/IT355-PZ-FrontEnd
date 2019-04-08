import { Injectable } from '@angular/core';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { HttpClient } from '@angular/common/http';
import User from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(user:User): Observable<any> {
    return this.http.post(
      environment.url+'/register',
      {
        email: user.email,
        password: user.password,
        firstname: user.firstname,
        lastname: user.lastname,
        address: user.address,
      }
    )
  }
}