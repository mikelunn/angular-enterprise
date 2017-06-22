import { Injectable } from '@angular/core';
import {Http, Request, RequestMethod, RequestOptions, RequestOptionsArgs, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {AppState} from "../store/index";
import {HttpStartAction, HttpStopAction} from "../store/http/http.actions";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';

const endpoints = {
  book: 'api/books',
  currency: 'http://api.fixer.io/latest?base=USD'
};


@Injectable()
export class HttpService  {

  constructor(private http: Http) {}

  getEntities(slice: string): Observable<any[]> {
    console.log('calling get entities');
    return this.http.get(`${endpoints[slice]}`)
      .map(res => res.json())
      .catch(this.onError);
  }
  getEntity(id: number | string, slice: string): Observable<any> {
    return this.http.get(`${endpoints[slice]}/${id}`)
      .map(res => res.json())
      .catch(this.onError);
  }
  add(entity: any, slice: string): Observable<any> {
    return this.http.post(`${endpoints[slice]}`, entity)
      .map(res => res.json())
      .catch(this.onError);
  }
  update(entity: any, table): Observable<any> {
    return this.http.put(`${endpoints[table]}`, entity)
      .map(res => res.json())
      .catch(this.onError);
  }

  remove(entity: any, table): Observable<any> {
    return this.http.delete(`${endpoints[table]}/${entity.id}`)
      .map(res => res.json())
      .catch(this.onError);
  }
  get(url: string, body?: Object, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Get, url, body, options);
  };
  post(url: string, body: Object, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Post, url, body, options);
  };
  put(url: string, body: Object, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Put, url, body, options);
  };
  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Delete, url, options);
  };
  private request = (
    method: RequestMethod,
    url: string,
    body?: Object,
    options?: RequestOptionsArgs
  ): Observable<Response> => {
    const requestOptions = new RequestOptions(Object.assign({
      method: method,
      url: url,
      body: JSON.stringify(body)
    }, options));
    // Do interceptor stuff here
    // this.store.dispatch(new HttpStartAction());
    return this.http.request(new Request(requestOptions))
      .map(res => res.json())
      .catch(this.onError);
      // .finally(() => this.store.dispatch(new HttpStopAction()));
  }
  private onError(error: Response | any) {
    // Do stuff with res.status == 401 || 403 ..etc
    return Observable.throw(error);
  }


}
