import { Component, Injectable, OnInit } from '@angular/core';

import { ShintoCoinService } from '../shinto-coin.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})

export class BuyComponent implements OnInit {

  number: any;

  constructor(
    public shintoCoinService: ShintoCoinService
  ) { }

  ngOnInit() {
    this.shintoCoinService.location = "Buy ShintoCoins";
    this.number = { text: "" }
  }

  buyCoins(){
    console.log(this.number.text)
    this.shintoCoinService.purchase(this.number.text);
    this.number = { text: "" }
  }

}
