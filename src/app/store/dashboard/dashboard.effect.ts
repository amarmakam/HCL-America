import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { DashboardService } from "../../dashboard/dashboard.service";
import { fetchContriesRequest, fetchCountriesFailure, fetchCountriesSuccess } from "./dashboard.actions";
import {of} from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DashboardEffects {
    constructor( private actions$: Actions, private dashboardService: DashboardService) {
       
    }

    fetchCountriesBasedOnRegion$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(fetchContriesRequest),
            map((action: {region: string}) => action.region),
            mergeMap((region: any): any => {
                return this.dashboardService.fetchCountriesBasedOnRegion(region).pipe(
                    map((response: any) => fetchCountriesSuccess({payload: response, region: region})),
                    catchError((error: any) => of(fetchCountriesFailure(error)))
                    )
            })
        )
    }, {dispatch: true})
}
