import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-app-main-menu",
  templateUrl: "./app-main-menu.component.html",
  styleUrls: ["./app-main-menu.component.css"]
})
export class AppMainMenuComponent implements OnInit {
  buttonPressed: boolean = true;
  constructor() {}
  onClick() {
    this.buttonPressed = !this.buttonPressed;
  }
  ngOnInit() {}
}
