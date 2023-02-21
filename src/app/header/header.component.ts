import {CommonModule} from "@angular/common";
import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CartService} from "src/app/service/cart.service";
import {SecondCartService} from "src/app/service/second-cart.service";

@Component({
             selector   : 'app-header',
             templateUrl: './header.component.html',
             styleUrls  : ['./header.component.css'],
             standalone : true,
             imports: [
               CommonModule,
               RouterLink
             ],
           })
export class HeaderComponent implements OnInit{

  itemCount!:number
  constructor(private secondCartService:SecondCartService) {
  }

  ngOnInit(): void {
    this.secondCartService.getSelectedObjects().subscribe(res=>{
      this.itemCount = res.length
    })
  }





}
