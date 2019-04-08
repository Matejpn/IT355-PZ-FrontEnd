import { Component, OnInit } from '@angular/core';
import Product from '../../models/product';
import User from '../../models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

import ProizvodiService from '../../services/proizvodi.service';
import { UserService } from '../../services/user.service';
import Narudzbina from '../../models/narudzbina';
import NarudzbineService from '../../services/narudzbine.service';
import ProizvodService from 'src/app/services/proizvod.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export default class AdminComponent implements OnInit {
  message = "";
  proizvodi : Product[];
  narudzbine : Narudzbina[];
  user : User;
  addProductForm = new FormGroup({

      name: new FormControl(),
      category: new FormControl(),
      opis: new FormControl(),
      price: new FormControl(),
      url: new FormControl(),
      brand: new FormControl(),
     


  });

   constructor( private http: Http,private router: Router, private adminService: AdminService, private proizvodiService: ProizvodiService, private proizvodService:ProizvodService, private narudzbineService:NarudzbineService, private _userService : UserService) {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/']);

        }

    }

    addProduct(model: Product) {
      this.adminService.addProduct(model).subscribe(
        response =>{
          const listProducts = this.proizvodi;
          listProducts.push(JSON.parse(response._body))
        },
        error => {
          this.message = error.error;

        }
      )
  }
  

  ngOnInit() {
    this.loadProizvodi();
    this.loadNarudzbine();
  }

  loadProizvodi() {
    
    this.proizvodiService.getAllProducts().subscribe(
      response =>{
        this.proizvodi = JSON.parse(response._body);
      }
    )

}

loadNarudzbine() {
  this.narudzbineService.getNarudzbine().subscribe(
    response => {
    this.narudzbine = JSON.parse(response._body);
    console.log(this.narudzbine);
  });

}

remove(idProduct:number){
  this.proizvodService.removeProduct(idProduct).subscribe(
    response =>{ 
      const listProducts = this.proizvodi.filter(proizvod => proizvod.idProduct !== JSON.parse(response._body).idProduct);
      this.proizvodi = listProducts;
    }
  );
  }

}
