import { Component, OnInit } from '@angular/core';
import User from '../../models/user';
import Product from '../../models/product';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { KorpaService } from '../../services/korpa.service';
import { UserService } from '../../services/user.service';
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { SharedService } from '../../services/shared.service';
import ProizvodService from 'src/app/services/proizvod.service';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export default class KorpaComponent implements OnInit {
  user : User;
  data: Object[];
  data2: String;
  prKorpa: Product[];
  idKorpe: number;
  totalPrice: number = 0;
  isDone : boolean = false;

  constructor(private http: Http, private router: Router, private cartService: KorpaService, private userService: UserService, private sharedService :SharedService, private productService: ProizvodService) {
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['/']);
        }

    }

    ngOnInit() {
      this.loadCart();
  }


 loadCart(){
  const korpa = JSON.parse(localStorage.getItem('korpa'));
  const products:Product[]= [];
  for (const product of korpa) {
    this.productService.getProizvodById(product.idProduct).subscribe(
      response =>{
        let newProduct: Product;
        newProduct = JSON.parse(response._body);
        newProduct.kolicina = product.quantity;
        products.push(newProduct);
      }
    )
  }
  this.prKorpa = products;
}



remove(idProduct: number) {
 let korpa = JSON.parse(localStorage.getItem('korpa'));
 for (const product of korpa) {
   korpa = korpa.filter(element => element.idProduct !== idProduct);
 }
 localStorage.setItem('korpa', JSON.stringify(korpa));
 this.loadCart();
}

checkout() {
  this.cartService.checkout().subscribe(
    response =>{
      localStorage.removeItem('korpa');
      this.router.navigate(['/']);
    }
  )
}

update(product_id: number, quantity: number) {
  this.cartService.updateInCart(product_id, quantity);
}

postarina(){
  let postarina = 0;
   postarina =  this.getTotal() * 0.1;

  return postarina;
}

getTotal() {

  let total = 0;
  for (var i = 0; i < this.prKorpa.length; i++) {
      if (this.prKorpa[i].price) {
          total += this.prKorpa[i].price * this.prKorpa[i].kolicina;
          this.totalPrice = total;
          this.idKorpe = this.prKorpa[i].idKorpe;
      }
  }

  return total;
}

getUkupno(){


  return this.getTotal() + this.postarina();

}
}
