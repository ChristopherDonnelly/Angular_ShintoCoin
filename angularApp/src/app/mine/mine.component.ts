import { Component, Injectable, OnInit } from '@angular/core';

import { ShintoCoinService } from '../shinto-coin.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})

export class MineComponent implements OnInit {

  answer: any;

  constructor(
    public shintoCoinService: ShintoCoinService
  ) { }

  ngOnInit() {
    this.shintoCoinService.location = "Mine Coins";
    this.answer = { text: "" }
  }

  mineCoins(){
    console.log(this.answer.text)
    this.shintoCoinService.mine(this.answer.text);
    this.answer = { text: "" }
  }

}
