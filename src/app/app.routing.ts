import { HomeComponent } from "./components/home/home.component";
import { Routes, RouterModule } from "@angular/router";
// import { ClothesComponent } from "./components/clothes/clothes.component";



import { NgModule } from "@angular/core";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
// import AdminComponent from "./components/admin/admin.component";
import { AboutusComponent } from "./components/aboutus/aboutus.component";
import ProdavniceComponent from "./components/prodavnice/prodavnice.component";
import ProizvodiComponent from "./components/proizvodi/proizvodi.component";
import KorpaComponent from "./components/korpa/korpa.component";
import AdminComponent from "./components/admin/admin.component";
import { ProductComponent } from "./components/product/product.component";
 



// import KorpaComponent from "./components/korpa/korpa.component";
// import ShoesComponent from "./components/shoes/shoes.component";
// import { AboutusComponent } from "./components/aboutus/aboutus.component";
// import ProdavniceComponent from "./components/prodavnice/prodavnice.component";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent },
  { path: "about", component: AboutusComponent },
  { path: "korpa", component: KorpaComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: "proizvodi/:id", component: ProizvodiComponent },
  

  { path: "prodavnice", component: ProdavniceComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
