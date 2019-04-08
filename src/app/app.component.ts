import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import User from "./models/user";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  user: User = new User();
  router: Router;
  isAuth: Boolean = false;
  constructor(router: Router, private _userService: UserService) {
    this.router = router;
    this.loadUser();

  }
  ngOnInit() {
    this.loadUser();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  loadUser() {
    this.user.token = localStorage.getItem('token');
    this.user.email = localStorage.getItem("email");
    this.user.role_name = localStorage.getItem("role");
    if(this.user.role_name === 'ADMIN'){
      this.user.role_id = 1;
    }else{
      this.user.role_id = 2;
    }
    if(this.user.token){
      this.isAuth = true;
    }
  }
  onLogout(): void {
    this.router.navigate(["./"]);
    localStorage.clear();
    this.isAuth = false;
  }
}
