import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IOptions } from '../select/select.component';
import { DashboardService } from './dashboard.service';
import { fetchContriesRequest } from '../store/dashboard/dashboard.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  regionOptions: IOptions[] = [];

  regionTitle = 'Region';

  countriesOptions: IOptions[] = [] as IOptions[];

  countryTitle = 'Countries';

  countryDetails = [];

  tableContent = [];

  selectedCountry = '';
  selectedRegion = '';
  storedRegion = '';
  constructor(private store: Store<any>, private router: Router) {
    this.store.select(state => state.dashboardReducer).subscribe((res: any) => {
      if (this.selectedRegion) {
        if (!res.isLoading && !res.isError) {
          this.countryDetails = res.data[this.selectedRegion];
          this.countriesOptions = res.data[this.selectedRegion] as IOptions[];
        }
      } else {
        this.storedRegion = res.selectedRegion;
        this.regionOptions = res.regions as IOptions[];
      }
    })
  }

  ngOnInit(): void { }
  regionChange(selectedValue: string) {
    this.selectedRegion = selectedValue;
    this.tableContent = [];
    this.selectedCountry = '';
    this.store.dispatch(fetchContriesRequest({
      region: selectedValue
    }));
  }

  countryChange(selectedCountry: string) {
    this.tableContent = [];
    this.selectedCountry = selectedCountry;
  }

  loadCountry() {
    const index = this.countryDetails.findIndex((obj: any) => obj.id === this.selectedCountry);
    if (index !== -1) {
      this.tableContent = [this.countryDetails[index]];
    } else {
      this.tableContent = [];
    }
  }
  rowClickEvent(row: any) {
    this.router.navigate(['display-content'], {
      queryParams: row
    })

  }

}
