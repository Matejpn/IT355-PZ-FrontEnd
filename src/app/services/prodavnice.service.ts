import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/do";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {apiUrl, getAuthHeaders} from "../constants";
import Prodavnica from '../models/prodavnica';


@Injectable()
export default class ProdavniceService {
    protected url = apiUrl + "getProdavnice.php";

    constructor (protected http: Http) {}

    getProdavnice(): Observable<Prodavnica[]> {
        return this.http.get(this.url, {headers: getAuthHeaders() })
            .map(this.extractData)
    }


    protected extractData(res: Response) {
        let obj = JSON.parse(res['_body']);
        return obj.prodavnice;
    }


}
