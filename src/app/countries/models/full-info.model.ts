export interface ICountryFullInfo {
    flag:string;
    nativeName:string;
    name: string;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string;
    currencies: ICurrencies[];
    languages:ILanguages[];
    borders: ILanguages[]
    alpha3Code:string;
}
interface ICurrencies {
    name:string
}
interface ILanguages {
    name:string
}
