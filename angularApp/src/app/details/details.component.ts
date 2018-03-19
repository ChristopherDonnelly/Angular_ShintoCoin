import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import 'rxjs/add/operator/switchMap';

import { ShintoCoinService } from '../shinto-coin.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  transactionId: number;
  transaction: any;
  action: string;
  amount: number;
  value: number;

  constructor(
    public shintoCoinService: ShintoCoinService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.shintoCoinService.location = "Ledger Transaction Details";
  
    this.transactionId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.transaction = this.shintoCoinService.account.transactions[this.transactionId]
    this.action = this.transaction.action;
    this.amount = this.transaction.amount;
    this.value = this.transaction.value;

    console.log(`Transaction Id: ${this.transactionId}`)
  }

}
