import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject('LOCAL_STORAGE') private storage: Storage) {}

  setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const value = this.storage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }
}
