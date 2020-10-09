import { Component, OnInit } from '@angular/core';
import { Crypto } from '../classes/crypto'
import { CryptoService } from '../services/crypto.service'

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css']
})
export class cryptosComponent implements OnInit {

  constructor(private cryptoService:CryptoService) { }
  
  cryptos:Crypto[] = []
  newCrypto: Crypto = new Crypto();
  
  ngOnInit() {
    this.cryptoService.getAll().then((allcryptos)=>{
      this.cryptos = allcryptos
    })
  }


  create(){
    this.cryptoService.create(this.newCrypto).then((response)=>{
      alert("Crypto created")
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
      alert("There was an error creating the Crypto"+err)
    })
  }
}
