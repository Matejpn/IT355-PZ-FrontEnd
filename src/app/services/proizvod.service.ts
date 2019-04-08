import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {apiUrl, getAuthHeaders} from "../constants";
import Product from '../models/product';
import { environment } from 'src/environments/environment';


@Injectable()
export default class ProizvodService {
  
  
  
  protected url = apiUrl + "getproizvod.php?id=";

  constructor (protected http: Http) {}

  createAuthorizationHeader(headers: Headers){
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }

  getProizvodById(idProizvod:number): Observable<any> {
    return this.http.get(
      environment.url+'/product/'+idProizvod
    )
  }

  removeProduct(productId): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(
      environment.url+'/product/remove/'+productId,
      {
      },
      {headers:headers}
    )
  }


  protected extractData(res: Response) {
    let obj = JSON.parse(res['_body']);
    return obj.proizvodi;
  }

  


}
