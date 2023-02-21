import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "src/app/footer/footer.component";
import {HeaderComponent} from "src/app/header/header.component";
import {HowItWorksComponent} from "src/app/how-it-works/how-it-works.component";
import {ProductListComponent} from "src/app/product-list/product-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
               imports: [
                   CommonModule,
                   ProductListComponent,
                   HowItWorksComponent,
                   FooterComponent
               ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
