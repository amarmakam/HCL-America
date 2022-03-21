import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

export interface IOptions {
  id: string | number,
  value: string | number
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input()
  options: IOptions[] = [] as IOptions[];

  @Input()
  dropdownLabel: string = '';

  @Input()
  isDisabled: boolean = false;

  @Output()
  selectionChangeEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  valueChange(event: MatSelectChange) {
    this.selectionChangeEvent.emit(event.value);
  }
}
