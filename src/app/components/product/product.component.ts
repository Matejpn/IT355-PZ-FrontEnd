import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Http } from '@angular/http';
import Product from '../../models/product';
import ProizvodService from '../../services/proizvod.service';
import { KorpaService } from '../../services/korpa.service';
import Korpa from '../../models/korpa';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy {

  data: Object[];
  data2: String;
  proizvodi: Product[];
  http: Http;
  router: Router;
  route: ActivatedRoute;
  isAsd:Boolean;
  id: number;
  
  isAuth: String;
  private sub: any;
  
  korpa : Korpa;
  
  constructor( private proizvodService : ProizvodService,route: ActivatedRoute, http: Http, router: Router,private korpaService : KorpaService) {
    this.http = http;
    this.router = router;
    this.route = route;
    var $:any;
    this.isAuth = localStorage.getItem('token');
    this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
        
    });
    this.router.events.subscribe(() => {
      this.isAsd = localStorage.getItem('token') !== null;

    });
    
    this.router = router;
    

}

ngOnInit(){
  this.route.params.subscribe((params: Params) => {
     let id = params['id'];
    this.proizvodService.getProizvodById(id).subscribe(
      response =>{
        this.proizvodi = JSON.parse(response._body);      },
      error =>{
        this.router.navigate(['./']);
      }
    )
  });
}


dodajUKorpu(id: number, quantity:number) {
  let korpa = [];
  if(localStorage.getItem('korpa') !== null){
    korpa = JSON.parse(localStorage.getItem('korpa'));
  }
  let alreadyExist = false;
  for(let i=0; i<korpa.length;i++){
    if(korpa[i].idProduct === id){
      const num1:number =+korpa[i].quantity;
      const num2:number =+quantity;
      const sum:number =  num1+num2;
      korpa[i].quantity = sum;

      alreadyExist = true;
      break;
    }
  }
  if(!alreadyExist){
    const item = {
      idProduct: id,
      quantity: quantity
    }
    korpa.push(item);
  }
  localStorage.setItem('korpa',JSON.stringify(korpa));
}



ngOnDestroy(){
this.sub.unsubscribe();
}
}
