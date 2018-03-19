import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ShintoCoinService } from '../shinto-coin.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})

export class LedgerComponent implements OnInit {

  constructor(
    public shintoCoinService: ShintoCoinService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.shintoCoinService.location = "Browse the Ledger";
  }

  showDetails(index){
    console.log("showDetails: "+index)
    this._router.navigateByUrl('/details/'+index);
  }

}
