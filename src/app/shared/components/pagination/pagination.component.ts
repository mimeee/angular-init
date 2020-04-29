import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface PageDataFormat {
  length: number;
  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[];
  total: number; 
}

@Component({
  selector: 'share-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public t: number = 1;
  public pi: number = 1;
  public ps: number = 10;
  public pso: Array<number> = [10, 50, 100];

  @Input() pageIndex: number;
  @Input()   
  set total(total: number) {
    this.t = total || 1;
  }
  @Input() pageSizeOptions: Array<number>;
  @Output() page = new EventEmitter<object>();
  @Output() change = new EventEmitter<object>();

  constructor() { 
  }


  ngOnInit() {
    this.ps = this.pageSizeOptions[0];
    this.pso = this.pageSizeOptions;
    this.pi = this.pageIndex;
  }

  pageChange() {
    this.page.emit({
      page: this.pi,
      size: this.ps
    })
  }

}
