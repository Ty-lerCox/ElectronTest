import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TickType } from "../../tickTypes";

@Injectable({
  providedIn: "root",
})
export class IconCountService {
  tickerCounts = new BehaviorSubject([]);

  constructor() {}

  updateCount(tickType: TickType, count: number) {
    const tickers = this.tickerCounts.value as any[];
    const tickerIdx = tickers.findIndex((ticker) => ticker.type === tickType);

    if (tickerIdx > -1) {
      tickers[tickerIdx].count = count;
    } else {
      tickers.push({
        type: tickType,
        count: count,
      });
    }

    this.tickerCounts.next(tickers);
  }
}
