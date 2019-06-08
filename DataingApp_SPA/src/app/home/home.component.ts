import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isRegistrModeEnbled = false;
  // values: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.getValue();
  }
  togleRegisterMode() {
    this.isRegistrModeEnbled = !this.isRegistrModeEnbled;
  }
  cancelRegistrationMode(modeValue: boolean) {
    this.isRegistrModeEnbled = modeValue;
  }

  // getValue() {
  //   this.http.get("http://localhost:5000/api/values").subscribe(
  //     response => {
  //       this.values = response;
  //       console.log(this.values);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
}
