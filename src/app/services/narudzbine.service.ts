import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';

@Injectable()
export default class NarudzbineService {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers){
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }

  getNarudzbine(): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(
      environment.url+'/payment/all',
      {
        headers:headers
      }
    )
  }

protected extractData(res: Response) {
  let obj = JSON.parse(res['_body']);
  return obj.narudzbine;
}
}
