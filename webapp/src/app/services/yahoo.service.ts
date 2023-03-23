import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../types';
import { map } from 'rxjs';

interface TQuoteFn<T> {
  fn: (n:number[])=>T
}

@Injectable({
  providedIn: 'root'
})
export class YahooService {

  constructor(private http: HttpClient) { }

  obterCotacao(symbol: string, fn?:TQuoteFn<any>) {
    return this.http.get<Result>(`symbol/${symbol}`);
  }
}
