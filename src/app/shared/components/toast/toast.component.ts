import { Component, OnInit } from '@angular/core';

import { ToastService } from 'src/app/core/toast.components.service';

@Component({
  selector: 'shared-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  public msgArr: Array<toastItem> = [];

  constructor(
    private ToastService: ToastService
  ) { 
    
  }

  ngOnInit() {
    this.msgArr = this.ToastService.toastQueue;
  } 
}
