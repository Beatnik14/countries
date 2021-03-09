import { Component, Input, OnInit } from '@angular/core';
import { ColorModeService } from 'src/app/color-mode.service';
import { ICountryFullInfo } from '../models/full-info.model';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.scss'],
})
export class SingleCountryComponent implements OnInit {
  @Input() country: ICountryFullInfo;
  darkMode: boolean;
  constructor(private colorMode: ColorModeService) {}

  ngOnInit(): void {
    this.colorMode.darkMode.subscribe((mode) => (this.darkMode = mode));
  }
}
