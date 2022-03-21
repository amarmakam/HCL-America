import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit {
  displayedColumns: string[] = ['currencies', 'name', 'population', 'capital', 'flag'];
  @Input()
  dataSource = [];
  constructor() {}

  ngOnInit(): void {
  }

}
