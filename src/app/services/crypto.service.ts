import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './app-config.service';
import { Crypto } from '../classes/crypto';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient, private config: AppConfigService) { }

  BASE_URL = this.config.getConfig()["serverUrl"] += "/crypto"

  /**
   * 
   * @param symbol
   */
  getSymbol(symbol: string): Promise<any[]> {
    var url = this.BASE_URL + "/" + symbol
    return this.http.get<any[]>(url).toPromise()
  }

  getAll(): Promise<any[]> {
    var url = this.BASE_URL
    return this.http.get<any[]>(url).toPromise()
  }

  create(crypto: Crypto): Promise<any[]> {
    var url = this.BASE_URL
    return this.http.post<any[]>(url,crypto).toPromise()
  }
}
