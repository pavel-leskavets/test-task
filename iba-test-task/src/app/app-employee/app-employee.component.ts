import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-app-employee",
  templateUrl: "./app-employee.component.html",
  styleUrls: ["./app-employee.component.css"]
})
export class AppEmployeeComponent implements OnInit {
  response: any;
  showDetails: boolean = false;
  allDetailsArray: any = [];
  name: string = "";
  age: number = 0;
  position: string = "";
  description: string = "";

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.http.get("https://api.myjson.com/bins/n2lex").subscribe(response => {
      this.response = response;
    });
    this.http
      .get(
        "https://jsonstorage.net/api/items/0036043f-9245-42dd-85fb-65b848faf39b"
      )
      .subscribe(response => {
        this.response = response;
      });
  }
  showFullDescription(value: boolean) {
    this.showDetails = value;
  }
  setfullDescriptionInfo(resp: any) {
    this.allDetailsArray.length = 0;
    for (let key in resp) {
      this.allDetailsArray.push(resp[key]);
    }
    [
      this.name,
      this.age,
      this.position,
      this.description
    ] = this.allDetailsArray;
  }
}
