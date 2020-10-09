import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Order } from '../classes/order'
import { SymbolBalance } from '../classes/symbolBalance';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/order"
  symbolBalanceUrl = "http://localhost:3000/symbolBalance/"

  getAll() {
    return this.http.get<Order[]>(this.url).toPromise()//.then((response)=>response.json())
  }

  getById(id: string) {
    return this.http.get<Order>(this.url + '/' + id).toPromise()
  }

  create(Order: Order) {
    return this.http.post(this.url, Order).toPromise()
  }

  update(Order: Order) {
    return this.http.put(this.url + '/' + Order._id, Order).toPromise()
  }

  delete(id: string) {
    return this.http.delete(this.url + '/' + id).toPromise()
  }

  getSymbolBalances(OrderId: string) {
    return this.http.get<SymbolBalance[]>(this.symbolBalanceUrl + "?OrderId="+OrderId).toPromise()
  }
}
