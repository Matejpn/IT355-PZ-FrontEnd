import { Component, OnInit } from "@angular/core";
import User from "../../models/user";
import { FormGroup, FormControl } from "@angular/forms";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  message = "";

  token: User;
  constructor(
    private http: Http,
    private router: Router,
    private loginService: LoginService,
  ) {
    if (localStorage.getItem("token") != null) {
      this.router.navigate(["/"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }

  login(login: User): void {
    localStorage.clear();
    this.token = JSON.parse(localStorage.getItem("token"));
    this.loginService.login(login).subscribe(
      response => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("email", response.email);
        localStorage.setItem("role", response.authorities[0].authority);
        this.router.navigate([""]);
      },
      error=>{
        this.message = "Bad Credentials!"
      }
    )
  }
}
