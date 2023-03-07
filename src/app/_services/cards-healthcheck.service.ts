import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConstants } from '../common/app.constants';
import { Healthcheck } from '../_model/Healthcheck';


@Injectable({
  providedIn: 'root'
})
export class CardsHealthcheckService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(request): Observable<any> {
      const params = request;
      return this.httpClient.get(AppConstants.API_URL + 'cards-healthcheck', {params});
  }

  create(healthCheck:any): Observable<any> {
      return this.httpClient.post(AppConstants.API_URL + 'cards-healthcheck', JSON.stringify(healthCheck), AppConstants.httpOptions)
  }

  find(id:number): Observable<any> {
      return this.httpClient.get<Healthcheck>(AppConstants.API_URL + 'cards-healthcheck/' + id)
  }

  update(id:number, healthCheck:Healthcheck): Observable<any> {
      return this.httpClient.put(AppConstants.API_URL + 'cards-healthcheck/' + id, JSON.stringify(healthCheck), AppConstants.httpOptions)
  }

  delete(id:number){
      return this.httpClient.delete(AppConstants.API_URL + 'cards-healthcheck/' + id)
  }
}
