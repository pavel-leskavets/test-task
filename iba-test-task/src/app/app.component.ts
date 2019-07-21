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
  close: boolean = false;
  b: number = 0;
  datePipe: any = new DatePipe("en-US");
  date: any = this.datePipe.transform(new Date(), "dd.MM.yyyy");
  name: string = "";
  age: string = "";
  position: string = "";
  description: string = "";

  constructor(private http: HttpClient) {}

  calculate() {
    this.a = !this.a;

    let averageAge = 0;
    this.response.forEach((element: { age: number }) => {
      averageAge += element.age;
    });
    this.b = averageAge / this.response.length;
  }
  getFullInformation(response: any) {
    this.close = true;
    this.name = response.name;
    this.age = response.age;
    this.position = response.position;
    this.description = response.desc;
  }
  hideDescription() {
    this.close = !this.close;
  }
}
