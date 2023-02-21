import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {map, Observable, scan, take, tap} from "rxjs";
import {CardInterface} from "src/app/product-list/type/Card-interface";
import {CartService} from "src/app/service/cart.service";
import {LocalStorageService} from "src/app/service/local-storage.service";
import {SecondCartService} from "src/app/service/second-cart.service";
import {CardWithExtraInfo} from "src/app/shopping-cart/type/cardwithextrainfo.interface";

@Component({
             selector   : 'app-shopping-cart',
             standalone : true,
             imports: [
               CommonModule,
               ReactiveFormsModule
             ],
             templateUrl: './shopping-cart.component.html',
             styleUrls  : ['./shopping-cart.component.css']
           })
export class ShoppingCartComponent implements OnInit {



  selectedObjects$!: Observable<CardWithExtraInfo[]>;
  totalPrice$!: Observable<number>;

  constructor(private secondCart: SecondCartService) {
    this.selectedObjects$ = this.secondCart.getSelectedObjects().pipe(
      map(data => {
        return data.map(item => ({
          ...item,
          extraInfo: new FormGroup({
                                     field1: new FormControl('', [Validators.required]),
                                     field2: new FormControl('', [Validators.required])
                                   })
        })) as CardWithExtraInfo[];
      })
    );
  }



  ngOnInit(): void {

    // this.selectedObjects$ = this.secondCart.getSelectedObjects()
    this.totalPrice$ = this.selectedObjects$.pipe(
      scan((total, objects) => {
        return objects.reduce((acc, object) => acc + object.price, 0);
      }, 0)
    );

  }


  // productAndTotal(){
  //   this.cartService.getProducts().subscribe(res=>{
  //     this.products = res
  //     this.grandTotal = this.cartService.getTotalPrice()
  //   })
  // }

  removeProduct(index:number) {
    this.secondCart.removeFromSelectedObjects(index)
  }

  addProduct(product:CardInterface){
    this.secondCart.addToSelectedObjects(product)
  }

  addNewItem(product: CardWithExtraInfo) {
    // Modify the data and send it to the SharedService
    this.selectedObjects$.pipe(
      take(1), // take only the first emission of data$
      map(data => [...data, product]),
      tap(data => this.secondCart.sendUpdatedData(data))
    ).subscribe();
  }


}
