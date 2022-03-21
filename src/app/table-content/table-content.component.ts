import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit {
  displayedColumns: string[] = ['currencies', 'name', 'population', 'capital', 'flag'];
  @Input()
  dataSource = [];
  
  @Output()
  rowClickEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }
  navigateToDisplayContent(row: any){
    this.rowClickEvent.emit(row);
  }

}
