import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { deepClone } from 'src/app/shared/utils/deepClone';
@Component({
  selector: 'share-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {


  @Input() label: string;
  @Input() activeTitle: string;
  @Input() data: Array<any>;
  @Input() showKey: string;
  @Output() select = new EventEmitter<object>();

  public defaultActiveTitle:string;
  public showSelect:boolean = false;
  
  constructor() { 
    
   }

  ngOnInit() {
    this.defaultActiveTitle = this.activeTitle;
  }

  selected(i) {
    this.select.emit(deepClone(this.data[i]));
    this.showSelect = false;
    this.activeTitle = this.data[i][this.showKey];
  }

}
