import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const route: Routes = [
    { path: '', redirectTo: '/countries', pathMatch: 'full' },
    {path:'countries', loadChildren: () => import ('./countries/countries.module').then(m => m.CountriesModule)}
]

@NgModule({
    imports: [RouterModule.forRoot(route, {preloadingStrategy:PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule{}