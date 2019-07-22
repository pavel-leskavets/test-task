import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-app-employee",
  templateUrl: "./app-employee.component.html",
  styleUrls: ["./app-employee.component.css"]
})
export class AppEmployeeComponent implements OnInit {
  response: any;
  buttonPressed: boolean = false;
  arrayToFullDescription: any = [];
  name: string = "";
  age: number = 0;
  position: string = "";
  description: string = "";

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.http.get("https://api.myjson.com/bins/n2lex").subscribe(response => {
      this.response = response;
    });
  }
  showFullDescription(value: boolean) {
    this.buttonPressed = value;
  }
  fullDescriptionInfo(resp: any) {
    this.arrayToFullDescription.length = 0;
    for (let key in resp) {
      this.arrayToFullDescription.push(resp[key]);
    }
    this.name = this.arrayToFullDescription[0];
    this.age = this.arrayToFullDescription[1];
    this.position = this.arrayToFullDescription[2];
    this.description = this.arrayToFullDescription[3];
  }
}
