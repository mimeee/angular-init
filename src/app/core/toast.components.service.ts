import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ToastService {
  constructor() { }

  public toastQueue: Array<toastItem> = [];

  show( data: toastItem, time?: number) {
    this.toastQueue.push(data);
    let timer = setInterval(() => {
      if (this.toastQueue.length === 0) {
        clearInterval(timer);
        timer = null;
      }
      this.toastQueue.shift();
    }, time || 5000);
  }

  getToastQueue() {
    return this.toastQueue;
  }
}