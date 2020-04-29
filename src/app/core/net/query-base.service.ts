import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { sign } from 'src/app/shared/utils/sign';
import { deepClone } from 'src/app/shared/utils/deepClone';
@Injectable({
  providedIn: 'root',
})

export class QueryBaseService {
  constructor(
    private http: HttpClient,
  ) { }


  get(url: string, p: any): Observable<any> {
    let data = sign(deepClone(p));
    let tempP = {
      data: "{" + Object.entries(p).map(e => '"' + e[0] + '"' + ":" + (typeof e[1] === 'string' ? ('"' + e[1] + '"') : e[1])).join(',') + "}",
      _: data.data._,
      sign: data.data.sign
    };
    
    const params = new HttpParams({
      fromObject: tempP
    });
    return this.http.get(url, { params });
  }

  post(url: string, p: any, option: any): Observable<any> {
    let data = sign(deepClone(p));
    const formData = encodeURI(Object.entries({
      _: data.data._,
      sign: data.data.sign,
      data: JSON.stringify(p)
    }).map(e => `${e[0]}=${e[1]}`).join('&'));

    return this.http.post(url, formData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
  }
}