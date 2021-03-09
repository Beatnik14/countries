import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ColorModeService } from 'src/app/color-mode.service';
import { ICountryFullInfo } from '../models/full-info.model';
import { ApiService } from '../services/country-api.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  country: ICountryFullInfo;
  alpha3Code: string;
  darkMode: boolean;
  routeParam$ = this.route.params;

  getCountry$ = combineLatest([
    this.apiService.countries$,
    this.routeParam$,
  ]).pipe(
    map(([countries, param]) => {
      return countries.find((country) => country.alpha3Code == param['code']);
    })
  );

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private colorMode: ColorModeService
  ) {}

  ngOnInit(): void {
    this.getCountry$.subscribe((data) => (this.country = data));
    this.colorMode.darkMode.subscribe((mode) => (this.darkMode = mode));
  }
}
