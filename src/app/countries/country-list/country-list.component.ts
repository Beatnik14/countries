import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/country-api.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  countries = this.apiService.getCountries$;
  ngOnInit(): void {}
}
