import { Component, OnInit, Input } from "@angular/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-app-navigation-menu",
  templateUrl: "./app-navigation-menu.component.html",
  styleUrls: ["./app-navigation-menu.component.css"]
})
export class AppNavigationMenuComponent implements OnInit {
  @Input() response: any;
  showAverageAge: boolean = false;
  averageAgeOfEmployee: number = 0;
  datePipe: any = new DatePipe("en-US");
  date: any = this.datePipe.transform(new Date(), "dd.MM.yyyy");
  constructor() {}

  ngOnInit() {}

  calculateAverageAge() {
    this.showAverageAge = !this.showAverageAge;
    let averageAge = 0;
    this.response.forEach((element: { age: number }) => {
      averageAge += element.age;
    });
    this.averageAgeOfEmployee = averageAge / this.response.length;
  }
}
