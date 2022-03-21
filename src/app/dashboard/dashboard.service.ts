import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  fetchCountriesBasedOnRegion(region: string) {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    return this.httpClient.get(url).pipe(
      map((regions) => {
        const filterData = (regions as Array<any>).map((region: any) => {
          const currenciesEntires = Object.entries(region.currencies);
          return {
            name: region.name.common,
            currencies: (currenciesEntires[0][1] as any).name,
            population: region.population,
            capital: region.capital,
            flag: region.flag,
            value: region.name.common,
            id: region.cioc
          }
        });
        return filterData;
      }),
      catchError(er => {
        return of([])
      })
    );
  }
}
