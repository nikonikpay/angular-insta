import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalConstant} from "src/app/common/constant/global-constant";
import {ProductCardComponent} from "src/app/product-list/product-card/product-card.component";
import {CartService} from "src/app/service/cart.service";
import {DataServiceService} from "src/app/service/data-service.service";
import {CardInterface} from "src/app/product-list/type/Card-interface";
import {SecondCartService} from "src/app/service/second-cart.service";

@Component({
             selector   : 'app-product-list',
             standalone : true,
               imports: [
                   CommonModule,
                   ProductCardComponent
               ],
             templateUrl: './product-list.component.html',
             styleUrls  : ['./product-list.component.css']
           })
export class ProductListComponent implements OnInit {

  cardData: CardInterface[] = []

  constructor(private dataService: DataServiceService, private secondCartService: SecondCartService) {
  }

  ngOnInit(): void {
    this.dataService.getProducts<CardInterface>(GlobalConstant.priceURL)
        .subscribe(data => this.cardData = data)

  }

  addToCart(product: CardInterface) {
    this.secondCartService.addToSelectedObjects(product)
    console.log("the added product is ",product)
  }


}
