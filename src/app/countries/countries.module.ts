import { NgModule } from "@angular/core";
import { CountriesComponent } from "./countries.component";
import { SingleCountryComponent } from './single-country/single-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountriesRoutingModule } from "./countries-routing.module";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CountryManagementComponent } from './country-management/country-management.component';
import { NumberPipe } from "./pipes/number.pipe";
import { CountryPipe } from './pipes/country.pipe';
import { FormsModule } from "@angular/forms";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations: [
        CountriesComponent,
        SingleCountryComponent,
        CountryListComponent,
        CountryDetailComponent,
        CountryManagementComponent,
        NumberPipe,
        CountryPipe,
        SearchComponent, 
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        FormsModule,       
        CountriesRoutingModule,
    ]
})

export class CountriesModule { }