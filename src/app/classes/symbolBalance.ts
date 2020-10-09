import { User } from './user'

export class SymbolBalance {
    _id:string
    symbol:string
    avgPriceBought:number
    quantity:number
    user: User
}
