import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { tokenName } from "@angular/compiler";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  login() {
    this.auth.login(this.model).subscribe(
      next => {
        console.log("Logged in successfully");
      },
      error => {
        console.log(error);
      }
    );
  }

  isLoggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }
  logout() {
    localStorage.removeItem("token");
    console.log("user logged out");
  }
}
