import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/do";
import { apiUrl, getAuthHeaders } from '../constants';
import { Http,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import Product from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable()
export class KorpaService {

  protected urladd = apiUrl + 'korpaaddservice.php';
  protected urlremove = apiUrl + 'korparemoveservice.php';
  protected urlupdate = apiUrl + 'korpaupdateservice.php';
  protected urlcheckout = apiUrl + 'korpacheckoutservice.php';
  protected urlget = apiUrl + 'korpagetservice.php';

  constructor(protected http: Http) { }

  createAuthorizationHeader(headers: Headers){
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }

  addToCart(product_id: number, quantity: number) {
    let data = "product_id=" + product_id + "&quantity=" + quantity;
    let headers = getAuthHeaders();
    this.http.post(this.urladd , data, {headers: headers})
        .map(res => res)
        .subscribe(data => {
            console.log(data)
        })
}



updateInCart(product_id: number, quantity: number) {
  let data = "product_id=" + product_id + "&quantity=" + quantity;
  let headers = getAuthHeaders();
  this.http.post(this.urlupdate, data, {headers: headers})
      .map(res => res)
      .subscribe(data => data)
}

checkout(): Observable<any> {
  const korpa = JSON.parse(localStorage.getItem('korpa'));
  let headers = new Headers();
  this.createAuthorizationHeader(headers);
  return this.http.post(
    environment.url+'/payment/buy',
    {
      items: korpa
    },
    {headers:headers}
  )
}

getCart(): Observable<Product[]> {
  let headers = getAuthHeaders();
  return this.http.get(this.urlget, {headers: headers})
      .map((response: Response) => <Product[]> response.json());
}
}
