import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.scss']
})
export class DisplayContentComponent implements OnInit {

  countrydetails : any;
  constructor(private activatedRoute: ActivatedRoute) { 
  this.countrydetails = this.activatedRoute.snapshot.queryParams;
  console.log(this.countrydetails);
  }

  ngOnInit(): void {
  }

}
