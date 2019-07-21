import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-app-table",
  templateUrl: "./app-table.component.html",
  styleUrls: ["./app-table.component.css"]
})
export class AppTableComponent implements OnInit {
  response: any;
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.http.get("https://api.myjson.com/bins/n2lex").subscribe(response => {
      this.response = response;
    });
  }
  condition(age: any) {
    return age > 30;
  }
}
