import { Action, createReducer, on, State } from "@ngrx/store"
import { IOptions } from "src/app/select/select.component";
import { fetchContriesRequest, fetchCountriesFailure, fetchCountriesSuccess } from "./dashboard.actions"

export interface IRegion extends IOptions {

}
export interface IDashboardState {
    data: any,
    isLoading: boolean,
    isError: boolean,
    regions: IOptions[]
  }

const REGIONS_LIST = [
    {
      id: 'europe',
      value: 'Europe'
    },
    {
      id: 'asia',
      value: 'Asia'
    }
  ];
export const countriesInitState: IDashboardState  = {
    data: null,
    isLoading: false,
    isError: false,
    regions: REGIONS_LIST
}

const dashboardReducer = createReducer(countriesInitState,
    on(fetchContriesRequest, (state)=> {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(fetchCountriesSuccess, (state,  result: any)=> {
        const sample: any = {};
        sample[result.region] = result.payload;
        return {
            ...state,
            isLoading: false,
            data: sample
        }
    }),
    on(fetchCountriesFailure, (state)=> {
        return {
            ...state,
            isLoading: false,
            data: [],
            isError: true
        }
    })
);

export function appDashboardReducer(state: IDashboardState | undefined, action: Action): any {
    return dashboardReducer(state, action);
  }
