import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountryFullInfo } from '../models/full-info.model';
import { ApiService } from '../services/country-api.service';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  constructor( private apiService: ApiService){}

  transform(value: string):Observable<ICountryFullInfo> {
    return this.apiService.getCountry(value)
    
    
    
  }

}
