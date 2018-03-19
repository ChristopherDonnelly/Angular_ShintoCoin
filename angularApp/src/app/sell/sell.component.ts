import { Component, Injectable, OnInit } from '@angular/core';

import { ShintoCoinService } from '../shinto-coin.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})

export class SellComponent implements OnInit {

  number: any;

  constructor(
    public shintoCoinService: ShintoCoinService
  ) { }

  ngOnInit() {
    this.shintoCoinService.location = "Buy ShintoCoins";
    this.number = { text: "" }
  }

  sellCoins(){
    console.log(this.number.text)
    this.shintoCoinService.sell(this.number.text);
    this.number = { text: "" }
  }

}
