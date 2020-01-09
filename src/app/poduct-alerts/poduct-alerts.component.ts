import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-poduct-alerts",
  templateUrl: "./poduct-alerts.component.html",
  styleUrls: ["./poduct-alerts.component.css"]
})
export class PoductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
