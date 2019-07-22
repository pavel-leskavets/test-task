import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-app-details",
  templateUrl: "./app-details.component.html",
  styleUrls: ["./app-details.component.css"]
})
export class AppDetailsComponent implements OnInit {
  @Input() allDetailsArray: any = [];
  @Input() name: string;
  @Input() age: number;
  @Input() position: string;
  @Input() description: string;
  @Output() showFullDescription = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  setVisibilityFullInformation() {
    this.showFullDescription.emit(false);
  }
}
