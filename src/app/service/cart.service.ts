import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CardInterface} from "src/app/product-list/type/Card-interface";

@Injectable({
              providedIn: 'root'
            })
export class CartService {

  public cartItem: CardInterface[] = []
  public productList = new BehaviorSubject<any>([]);

  constructor() {
  }

  getProducts(): Observable<any> {
    return this.productList.asObservable()
  }

  setProduct(product: any) {
    this.cartItem.push(...product);
    this.productList.next(product)

  }

  addToCart(product: any) {
    this.cartItem.push(product)
    this.productList.next(this.cartItem)
    this.getTotalPrice()
    console.log("the cart item is ", this.cartItem)
  }

  getTotalPrice(): number {
    let grandTotal = 0
    this.cartItem.map((a: any) => {
      grandTotal += a.price
    })
    return grandTotal

  }

  // removeCartItem(product: any) {
  //   this.cartItem.map((a: any, index: any) => {
  //     if (product.id == a.id) {
  //       this.cartItem.splice(index, 1)
  //       console.log("the item is deleted is :", a)
  //       console.log("the index is ",index)
  //     }
  //   })
  //   this.productList.next(this.cartItem)
  //
  //   console.log("thw whole array is "+this.cartItem)
  //
  //
  // }

  removeCartItem(product: any) {
    let firstOccurrence = this.cartItem.indexOf(product)
    this.cartItem = this.cartItem.filter((item, index) =>
                                           index !== firstOccurrence
    )
    this.productList.next(this.cartItem)

  }
}
