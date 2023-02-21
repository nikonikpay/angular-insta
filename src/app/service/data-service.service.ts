import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CardInterface} from "src/app/product-list/type/Card-interface";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {



  constructor(private httpClient: HttpClient) { }


  getProducts<T>(url:string):Observable<T[]>{
    return this.httpClient.get<T[]>(url)
  }

}
