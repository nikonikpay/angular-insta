import {provideHttpClient} from "@angular/common/http";
import {bootstrapApplication} from "@angular/platform-browser";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {provideRouter, Routes} from "@angular/router";
import {AppComponent} from "src/app/app.component";
import {HomeComponent} from "src/app/home/home.component";


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'cart',
    loadComponent: () => import('./app/shopping-cart/shopping-cart.component').then(m => m.ShoppingCartComponent)
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
})
