import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICountryFullInfo } from '../models/full-info.model';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl;
  getAll = this.apiUrl + 'all';
  constructor(private http: HttpClient) {}

  countries$ = this.http.get<ICountryFullInfo[]>(this.getAll);

  getCountry(code: string): Observable<ICountryFullInfo> {
    return this.http.get<ICountryFullInfo>(`${this.apiUrl}alpha/${code}`);
  }

  search = new BehaviorSubject<string>('');
  search$ = this.search.asObservable();

  select = new BehaviorSubject<string>('');
  select$ = this.select.asObservable();

  lastResult = '';

  getCountries$ = combineLatest([
    this.countries$,
    this.search$,
    this.select$,
  ]).pipe(
    map(([countries, search, select]) => {
      if (search != this.lastResult) {
        const result = countries.filter((country) =>
          country.name.includes(search)
        );
        this.lastResult = search;
        return result;
      } else {
        return countries.filter((country) => country.region.includes(select));
      }
    })
  );
}
