import { Component, OnInit } from '@angular/core';
import { Order } from '../classes/order'
import { OrderService } from '../services/order.service'
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderservice:OrderService, private cryptoService:CryptoService) { }
  
  orders:Order[] = []
  newOrder: Order = new Order();
  selectedOrder: Order;
  cryptos:Crypto[] = []
  
  ngOnInit() {
    this.orderservice.getAll().then((allorders)=>{
      this.orders = allorders
    })

    this.cryptoService.getAll().then((allcryptos)=>{
      this.cryptos = allcryptos
      this.newOrder.symbol = allcryptos[0].symbol
    })
  }


  create(){
    this.newOrder.user = localStorage.getItem("userId")
    this.orderservice.create(this.newOrder).then((response)=>{
      alert("ORder created")
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
      alert("There was an error creating the user"+err)
    })
  }
}
