import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { TickType } from "../tickTypes";
import { IconCountService } from "../components/icon-count/icon-count.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  tickTypes = TickType;
  tickers = [
    {
      tickType: TickType.Workout,
      totalBites: 6,
      everyMinutes: 120,
      startHour: 8,
      count: 0,
    },
    {
      tickType: TickType.Water,
      totalBites: 5,
      everyMinutes: 180,
      startHour: 8,
      count: 0,
    },
    {
      tickType: TickType.Clean,
      totalBites: 3,
      everyMinutes: 240,
      startHour: 8,
      count: 0,
    },
    {
      tickType: TickType.Dog,
      totalBites: 3,
      everyMinutes: 360,
      startHour: 8,
      count: 0,
    },
    {
      tickType: TickType.Food,
      totalBites: 6,
      everyMinutes: 60,
      startHour: 12,
      count: 0,
    },
    {
      tickType: TickType.Work,
      totalBites: 3,
      everyMinutes: 160,
      startHour: 10,
      count: 0,
    },
    {
      tickType: TickType.Socials,
      totalBites: 2,
      everyMinutes: 240,
      startHour: 13,
      count: 0,
    },
  ];
  tickerCounts = [];

  constructor(private iconCountService: IconCountService) {
    this.iconCountService.tickerCounts.subscribe((tickerCounts) => {
      this.tickers.forEach((ticker) => {
        const tickCountIdx = tickerCounts.findIndex(
          (tickerCount) => tickerCount.type === ticker.tickType
        );
        if (tickCountIdx > -1) {
          ticker.count = tickerCounts[tickCountIdx].count;
        }
      });
    });
  }

  ngOnInit(): void {}
}
