import { Injectable } from '@angular/core';
import { apiUrl, getAuthHeaders } from '../constants';
import { Http,Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import Product from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable()
export default class ProizvodiService {
  
  protected url = apiUrl + "getProizvodi.php";

  constructor(protected http: Http) { }

  getProizvodi(): Observable<Product[]> {
    return this.http.get(this.url, {headers: getAuthHeaders() })
        .map(this.extractData)
}

getAllProducts(): Observable<any> {
  return this.http.get(
    environment.url+'/product/all'
  )
}

findByCategory(category:String): Observable<any> {
  return this.http.get(
    environment.url+'/product/category?category='+category
  )
}

protected extractData(res: Response) {
  let obj = JSON.parse(res['_body']);
  return obj.proizvodi;
}
}
