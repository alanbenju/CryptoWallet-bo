import { User } from './user'

export class Order {
    _id: string
    symbol: string
    price: number
    quantity: number
    type: string
    user: string
    date: Date
}
