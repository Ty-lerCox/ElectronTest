import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  today = {};
  startDate = {};
  totalBites = 6;
  biteTimes = [];

  constructor(private router: Router) {
    this.refresh();
    let intervalId = setInterval(() => {
      this.biteTimes = [];
      this.refresh();
      console.log("refreshed occured");
    }, 60000);
  }

  ngOnInit(): void {}

  refresh(): void {
    var today = moment().format("YYYY-MM-DD");
    const hours = 12;
    const minutes = 0;
    this.today = moment(new Date()).local().format();
    this.startDate = moment(today)
      .set("hour", hours)
      .set("minute", minutes)
      .local()
      .format();
    for (var i = 0; i < this.totalBites; i++) {
      this.biteTimes.push(moment(this.startDate).add("minute", i * 60));
    }
  }

  compareTime(bite: string): boolean {
    return moment(bite).isAfter(moment(this.today));
  }
}
