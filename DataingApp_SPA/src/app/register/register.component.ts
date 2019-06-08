import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  model: any = {};
  // @Input() valuesFromHome: any;
  @Output() cancelRegistrationEvent = new EventEmitter();

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  register() {
    this.auth.register(this.model).subscribe(
      () => {
        console.log(
          "the user " + this.model.username + " register succsesfully"
        );
      },
      error => {
        console.log(error);
      }
    );
  }

  canacel() {
    this.cancelRegistrationEvent.emit(false);
    console.log("you did cancel");
  }
}
