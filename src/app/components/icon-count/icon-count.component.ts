import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import {
  faHamburger,
  faDumbbell,
  faDog,
  faWater,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { TickType } from "../../tickTypes";

@Component({
  selector: "app-icon-count",
  templateUrl: "./icon-count.component.html",
  styleUrls: ["./icon-count.component.scss"],
})
export class IconCountComponent implements OnInit {
  today = {};
  startDate = {};
  biteTimes = [];
  faIcon = faDumbbell;

  @Input() tickType: TickType = TickType.Food;
  @Input() totalBites: number = 1;
  @Input() everyMinutes: number = 60;
  @Input() startHour: number = 12;

  constructor(private router: Router) {
    let intervalId = setInterval(() => {
      this.getIcon();
      this.biteTimes = [];
      this.refresh();
    }, 60000);
  }

  ngOnInit(): void {
    this.getIcon();
    this.biteTimes = [];
    this.refresh();
  }

  refresh(): void {
    var today = moment().format("YYYY-MM-DD");
    const hours = this.startHour;
    const minutes = 0;
    this.today = moment(new Date()).local().format();
    this.startDate = moment(today)
      .set("hour", hours)
      .set("minute", minutes)
      .local()
      .format();
    for (var i = 0; i < this.totalBites; i++) {
      this.biteTimes.push(
        moment(this.startDate).add("minute", i * this.everyMinutes)
      );
    }
  }

  getIcon(): void {
    switch (this.tickType) {
      case TickType.Food:
        this.faIcon = faHamburger;
        break;
      case TickType.Workout:
        this.faIcon = faDumbbell;
        break;
      case TickType.Dog:
        this.faIcon = faDog;
        break;
      case TickType.Water:
        this.faIcon = faWater;
        break;
      case TickType.Work:
        this.faIcon = faBriefcase;
        break;
    }
  }

  compareTime(bite: string): boolean {
    return moment(bite).isAfter(moment(this.today));
  }
}
