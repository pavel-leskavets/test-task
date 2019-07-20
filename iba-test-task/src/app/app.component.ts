import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  response: any;
  a: boolean = false;
  b: number = 0;
  datePipe: any = new DatePipe("en-US");
  date: any = this.datePipe.transform(new Date(), "dd.MM.yyyy");

  constructor(private http: HttpClient) {}
  search() {
    this.http.get("https://api.myjson.com/bins/n2lex").subscribe(response => {
      this.response = response;
      console.log(this.response);
    });
  }
  condition(age: any) {
    return age > 30;
  }
  calculate() {
    this.a = !this.a;

    let averageAge = 0;
    this.response.forEach((element: { age: number }) => {
      averageAge += element.age;
    });
    this.b = averageAge / this.response.length;
  }
  getFullInformation(response: any) {
    console.log(response.name, response.age, response.position, response.desc);
  }
}
