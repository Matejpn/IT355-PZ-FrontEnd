import { Component, OnInit, OnDestroy } from '@angular/core';
import Product from '../../models/product';
import ProizvodiService from '../../services/proizvodi.service';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { KorpaService } from '../../services/korpa.service';
import Korpa from '../../models/korpa';
import 'rxjs/Rx';


@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})
export default class ProizvodiComponent implements OnInit, OnDestroy {

  id: String;
  products: Product[];
  isAuth: String;
  private sub: any;
  private router: Router;
  korpa : Korpa;
  
  

  constructor(private http: Http, router: Router,private proizvodiService: ProizvodiService,private korpaService : KorpaService,private route: ActivatedRoute) {
      var $:any;
      this.isAuth = localStorage.getItem('token');
      this.sub = this.route.params.subscribe(params => {
          this.id = params['id'];
          
      });
      this.router = router;
      


  }
  ngOnInit() {
      this.loadProducts();
  }

  loadProducts() {
    this.proizvodiService.getAllProducts().subscribe(
        response =>{
            this.products = JSON.parse(response._body);

        }
    )

  }
  dodajUKorpu(id: number) {
      id = parseFloat(id.toString());
      this.korpaService.addToCart(id, 1);
  }



  ngOnDestroy(){
    this.sub.unsubscribe();
}


public viewProduct(item: Number){
    this.router.navigate(['/product', item]);
    localStorage.setItem('ID_PRODUCT',JSON.stringify(item).replace(/"/g, ""));
    }





}
