import { Component, OnInit } from '@angular/core';

import { ShintoCoinService } from '../shinto-coin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    public shintoCoinService: ShintoCoinService
  ) { }

  ngOnInit() {
    this.shintoCoinService.location = "Home";
  }

}
