import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-app-table",
  templateUrl: "./app-table.component.html",
  styleUrls: ["./app-table.component.css"]
})
export class AppTableComponent implements OnInit {
  @Input() response: any;
  @Output() showFullDescription = new EventEmitter<boolean>();
  @Output() setfullDescriptionInfo = new EventEmitter<any>();

  constructor() {}
  ngOnInit() {}

  checkAge(age: any) {
    return age > 30;
  }
  setFullInformation() {
    this.showFullDescription.emit(true);
  }
  getFullInformation(item: any) {
    this.setfullDescriptionInfo.emit(item);
  }
}
