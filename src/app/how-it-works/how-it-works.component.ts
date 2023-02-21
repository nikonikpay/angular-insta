import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalConstant} from "src/app/common/constant/global-constant";
import {HowItWorks} from "src/app/how-it-works/types/how-it-works.interface";
import {DataServiceService} from "src/app/service/data-service.service";

@Component({
             selector   : 'app-how-it-works',
             standalone : true,
             imports    : [CommonModule],
             templateUrl: './how-it-works.component.html',
             styleUrls  : ['./how-it-works.component.css']
           })
export class HowItWorksComponent implements OnInit {

  items: HowItWorks[] = []

  constructor(private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.dataService.getProducts<HowItWorks>(GlobalConstant.howWorksURL)
        .subscribe(result => {
          this.items = result
        })
  }


}
