import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }


  public getRate(coins: number) {
    return Promise.resolve(0.00003708 * coins)
    
    return this.http.get<{ answer: any }>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
      .pipe(
        map(res => res)
      )

  }

  public shouldAdoptPet() {
    return this.http.get<{ answer: string }>('https://yesno.wtf/api')
      .pipe(
        map(res => res.answer)
      )
  }

  public getMarketPrice() {

  }

  public getConfirmedTransactions() {

  }

}
