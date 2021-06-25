import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { TickType } from "../tickTypes";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  tickTypes = TickType;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
