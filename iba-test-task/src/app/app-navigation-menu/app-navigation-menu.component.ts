import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-app-navigation-menu",
  templateUrl: "./app-navigation-menu.component.html",
  styleUrls: ["./app-navigation-menu.component.css"]
})
export class AppNavigationMenuComponent implements OnInit {
  showAverageAge: boolean = false;
  averageAge: string = "dfkdkfkdfkdkfkdfk";
  constructor() {}

  ngOnInit() {}
  calculateAverageAge() {
    this.showAverageAge = !this.showAverageAge;
  }
}
