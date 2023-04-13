import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activeTab: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.activeTab = data.url;
      }
    });
  }

}
