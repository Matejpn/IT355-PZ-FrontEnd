import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import Product from '../models/product';
import { environment } from 'src/environments/environment';
import {Http, Response, Headers} from "@angular/http";

@Injectable()
export class AdminService {
  

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers){
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }

  addProduct(product:Product): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(
      environment.url+'/product/add',
      {
        name: product.name,
        category: product.category,
        price: product.price,
        url: product.url,
        brand: product.brand,
      },
      {
        headers:headers
      }
    )
  }

 
}
