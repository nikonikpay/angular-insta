import {Injectable} from '@angular/core';
import {BehaviorSubject, map, refCount, share} from "rxjs";
import {CardInterface} from "src/app/product-list/type/Card-interface";

@Injectable({
              providedIn: 'root'
            })
export class SecondCartService {

  private selectedObjects = new BehaviorSubject<CardInterface[]>([]);


  getSelectedObjects() {
    return this.selectedObjects.asObservable();
  }

  addToSelectedObjects(product: CardInterface) {
    const currentObjects = this.selectedObjects.value;
    const newObjects = [
      ...currentObjects,
      product
    ];
    this.selectedObjects.next(newObjects);
  }


  removeFromSelectedObjects(index2: number) {
    const selectedArray = this.selectedObjects.getValue();
    selectedArray.splice(index2, 1)
    this.selectedObjects.next(selectedArray);
  }

  sendUpdatedData(data: CardInterface[]) {
    this.selectedObjects.next(data);
  }


}
