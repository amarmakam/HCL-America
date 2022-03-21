import { createAction, props } from "@ngrx/store";

export enum CountriesActionTypes {
    FETCH_COUNTRIES_REQUEST = '[Fecth countries REQUEST] based on region',
    FETCH_COUNTRIES_SUCCESS = '[Fecth countries SUCCESS] based on region',
    FETCH_COUNTRIES_FAILURE = '[Fecth countries FAILURE] based on region'
  }
export const fetchContriesRequest = createAction<CountriesActionTypes, {region: string}>(CountriesActionTypes.FETCH_COUNTRIES_REQUEST, props<{region: string}>());

export const fetchCountriesSuccess = createAction(CountriesActionTypes.FETCH_COUNTRIES_SUCCESS,result => {
  return result;
});

export const fetchCountriesFailure = createAction(CountriesActionTypes.FETCH_COUNTRIES_FAILURE, (error) => {
  return {
    payload: 'Something went wrong'
  }
});






