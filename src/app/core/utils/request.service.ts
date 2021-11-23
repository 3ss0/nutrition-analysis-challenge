import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  apiUrlPrefix = environment.baseUrl;

  constructor(private http: HttpClient) {}

  post(url: string, body: any): Observable<any> {
    const fullUrl: string = this.apiUrlPrefix + url;
    return this.http.post(fullUrl, body);
  }

  get(url: string, params?: HttpParams): Observable<any> {
    const fullUrl: string = this.apiUrlPrefix + url;
    const opts = params ? { params } : {};
    return this.http.get(fullUrl, opts);
  }

  put(url: string, body: any): Observable<any> {
    const fullUrl: string = this.apiUrlPrefix + url;
    return this.http.put(fullUrl, body);
  }

  delete(url: string): Observable<any> {
    const fullUrl: string = this.apiUrlPrefix + url;
    return this.http.delete(fullUrl);
  }
}
