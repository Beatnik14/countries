import { Component, OnInit } from '@angular/core';
import { ColorModeService } from 'src/app/color-mode.service';
import { ApiService } from '../services/country-api.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class SearchComponent implements OnInit {
  regions: string[] = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  input: string;
  select: string = 'All';
  darkMode: boolean;
  constructor(
    private apiService: ApiService,
    private colorMode: ColorModeService
  ) {}

  ngOnInit() {
    this.colorMode.darkMode.subscribe((mode) => (this.darkMode = mode));
  }

  onSearch() {
    this.apiService.search.next(this.input);
  }
  onSelect() {
    if (this.select == 'All') {
      this.apiService.select.next('');
    } else {
      this.apiService.select.next(this.select);
    }
  }
}
