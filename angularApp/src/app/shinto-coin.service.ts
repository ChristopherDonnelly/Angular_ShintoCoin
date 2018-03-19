import { Injectable, transition } from '@angular/core';

@Injectable()
export class ShintoCoinService {

  constructor() { 
    this.account.money = 100;
  }

  location = '';

  coin = {
    value: 0
  }

  account = {
    balance: 0,
    money: 0,
    transactions: []
  }

  checkAnswer(val){
    return true;
  }

  mine(val){
    let mined = false;

    if(this.checkAnswer(val)){
      this.coin.value++;
      this.account.balance++;
      this.account.transactions.push(new transaction('Mined', 1, this.coin.value));
      
      console.log(`Action: ${this.account.transactions[this.account.transactions.length-1].action} - Amount: ${this.account.transactions[this.account.transactions.length-1].amount} - Coin Value: ${this.account.transactions[this.account.transactions.length-1].value}`);

      console.log(`Balance: ${this.account.balance} - Money: ${this.account.money}`);
      
      mined = true;
    }

    return mined;
  }
  
  purchase(num){
    let purchased = false;
    num = parseInt(num);

    if(this.account.money >= (num * this.coin.value)){
      this.account.money -= (num * this.coin.value);
      console.log('1. ' + this.coin.value)
      this.coin.value += parseInt(num);
      console.log('2. ' + this.coin.value)
      this.account.balance += num;
      this.account.transactions.push(new transaction('Bought', num, this.coin.value));

      console.log(`Action: ${this.account.transactions[this.account.transactions.length-1].action} - Amount: ${this.account.transactions[this.account.transactions.length-1].amount} - Coin Value: ${this.account.transactions[this.account.transactions.length-1].value}`);

      console.log(`Balance: ${this.account.balance} - Money: ${this.account.money}`);

      purchased = true;
    }

    return purchased;
  }

  sell(num){
    let sold = false;
    num = parseInt(num);

    if(this.account.balance >= num){
      this.account.balance -= num;
      this.account.money += (num * this.coin.value);
      this.coin.value -= num;
      this.account.transactions.push(new transaction('Sold', num, this.coin.value));

      console.log(`Action: ${this.account.transactions[this.account.transactions.length-1].action} - Personal Amount: ${this.account.transactions[this.account.transactions.length-1].amount} - Coin Value: ${this.account.transactions[this.account.transactions.length-1].value}`);

      console.log(`Balance: ${this.account.balance} - Money: ${this.account.money}`);

      sold = false;
    }

    return sold;
  }
}

@Injectable()
class transaction {

  action: string;
  amount: number;
  value: number;

  constructor(act, amt, val) {
    this.action = act;
    this.amount = amt;
    this.value = val;
  }

}