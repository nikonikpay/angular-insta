import {CommonModule} from "@angular/common";
import {Component} from '@angular/core';
import {RouterModule, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "src/app/header/header.component";

@Component({
             selector   : 'app-root',
             templateUrl: './app.component.html',
             styleUrls  : ['./app.component.css'],
             standalone : true,
             imports: [
               CommonModule,
               RouterModule,
               HeaderComponent
             ]
           })
export class AppComponent {
  title = 'insta';
}
