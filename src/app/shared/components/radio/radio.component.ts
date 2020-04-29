import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { deepClone } from 'src/app/shared/utils/deepClone';

@Component({
  selector: 'share-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  @Input() label: string;
  @Input() data: Array<any>;
  @Input() activeLabel: number;
  @Input() showKey: string;
  @Output() select = new EventEmitter<object>();

  public active: number;
  constructor() { }

  ngOnInit() {
    this.active = this.activeLabel;
  }

  selected(i) {
    this.select.emit(deepClone(this.data[i]));
    this.active = i;
  }

}
