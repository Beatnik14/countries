import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountriesComponent } from "./countries.component";
import { CountryDetailComponent } from "./country-detail/country-detail.component";
import { CountryManagementComponent } from "./country-management/country-management.component";

const routes: Routes = [
    {
        path:'',
        component:CountriesComponent,
        children: [
            {path: '', component: CountryManagementComponent},
            {path: ':code', component: CountryDetailComponent}
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class CountriesRoutingModule{}