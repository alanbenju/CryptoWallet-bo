import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { AppConfigService } from '../services/app-config.service';
import * as moment from 'moment';
import { UserService } from '../services/user.service';
import { SymbolBalance } from '../classes/symbolBalance';
var Promise = require('bluebird');



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cryptoService: CryptoService, private userService: UserService, private config: AppConfigService) { }

  refreshQuoteTime: number

  allCrypto: any[]
  balance: Number
  symbolBalances: SymbolBalance[]


  getAllSymbols() {
    return this.cryptoService.getAll().then((allCrypto)=>{
      this.allCrypto = allCrypto
    })
  }
  getSymbolBalances(){
    return this.userService.getSymbolBalances(localStorage.getItem("userId")).then((balances)=>{
      this.symbolBalances = balances
    })
  }
  getWatchlists(){

  }
  createWatchlist(){

  }
  addSymbolToWatchlist(){

  }


  ngOnInit() {
    this.refreshQuoteTime = this.config.getConfig()["refreshQuoteTime"]
    this.getSymbolBalances()
    this.getWatchlists()
    this.balance = Number(localStorage.getItem("userBalance"))


    /*this.editQuotation().then(() => {
      var self = this
      setInterval(function () {
        self.editQuotation()
      }, this.refreshQuoteTime);
    })*/
  }
}
