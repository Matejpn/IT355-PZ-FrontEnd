import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";import { Http } from "@angular/http";
import "rxjs/Rx";
import { Router } from "@angular/router";
import User from "../../models/user";
import { RegisterService } from "../../services/register.service";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent  {
  message = "";
  registerForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    address: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private http: Http,
    private router: Router,
    private registerService: RegisterService
  ) {
    if (localStorage.getItem("token") != null) {
      this.router.navigate(["/"]);
    } else {
      this.router.navigate(["/register"]);
    }
  }
  onRegistration(model: User) {
    this.registerService.register(model).subscribe(
      response =>{
        this.router.navigate(['/']);
      },
      error =>{
        this.message = error.error;
        console.log(error)
      }
    )
  }
  
}
