import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import ProdavniceComponent from './components/prodavnice/prodavnice.component';
import { RegisterComponent } from './components/register/register.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import ProdavniceService from './services/prodavnice.service';
import { SharedService } from './services/shared.service';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routing';
import ProizvodiComponent from './components/proizvodi/proizvodi.component';
import ProizvodiService from './services/proizvodi.service';
import KorpaComponent from './components/korpa/korpa.component';
import { KorpaService } from './services/korpa.service';
import AdminComponent from './components/admin/admin.component';
import { AdminService } from './services/admin.service';
import NarudzbineService from './services/narudzbine.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProductComponent } from './components/product/product.component';
import ProizvodService from './services/proizvod.service';
import { SearchPipeName } from './pipes/searchname.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

const toastrConfig = {
  timeOut: 2000
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProdavniceComponent,
    RegisterComponent,
    CarouselComponent,
    AboutusComponent,
    ProizvodiComponent,
    KorpaComponent,
    AdminComponent,
    ProductComponent,
    SearchPipeName,
    

    
 

    

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot(toastrConfig),
    BrowserAnimationsModule
  
  ],
  providers: [
    LoginService,
    RegisterService,
    ProdavniceService,
    SharedService,
    UserService,
    ProizvodiService,
    KorpaService,
    AdminService,
    NarudzbineService,
    ProizvodService,
    
    
    
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
