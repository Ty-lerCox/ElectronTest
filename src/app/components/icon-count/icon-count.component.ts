import { Component, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import {
  faHamburger,
  faDumbbell,
  faDog,
  faWater,
  faBriefcase,
  faEraser,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { TickType } from "../../tickTypes";
import { IconCountService } from "./icon-count.service";

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
  count: number = 100;

  @Input() tickType: TickType = TickType.Food;
  @Input() totalBites: number = 1;
  @Input() everyMinutes: number = 60;
  @Input() startHour: number = 12;

  constructor(private iconCountService: IconCountService) {
    let intervalId = setInterval(() => {
      const currentHour = moment(new Date()).local().hour();
      if (currentHour >= this.startHour) {
        if (this.count > 1) {
          this.count = this.count - 1;
          this.iconCountService.updateCount(this.tickType, this.count);
        }
      }
      this.getIcon();
      this.biteTimes = [];
      this.refresh();
    }, 60000);
  }

  ngOnInit(): void {
    this.count = this.everyMinutes;
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
      case TickType.Clean:
        this.faIcon = faEraser;
        break;
      case TickType.Socials:
        this.faIcon = faCity;
        break;
    }
  }

  compareTime(bite: string): boolean {
    return moment(bite).isAfter(moment(this.today));
  }

  getCount(): number {
    const perc = (100 * this.count) / this.everyMinutes;
    if (perc > 50) {
      return 100;
    } else if (perc > 25) {
      return 50;
    } else {
      return perc;
    }
  }

  getPerc(): number {
    const perc = (100 * this.count) / this.everyMinutes;
    return perc;
  }

  resetCount() {
    this.count = this.everyMinutes;
    this.getIcon();
    this.biteTimes = [];
    this.refresh();
  }
}
