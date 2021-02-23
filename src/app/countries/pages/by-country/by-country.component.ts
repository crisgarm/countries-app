import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  inputSearch: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  countriesSuggested: Country[] = [];

  constructor(private countryService: CountriesService) {}

  getInputSearch(inputSearch: string) {
    this.hasError = false;
    this.inputSearch = inputSearch;

    this.countryService.searchCountry(this.inputSearch).subscribe(
      (resp) => {
        this.countries = resp;
        console.log(this.countries);
      },
      (err) => {
        this.hasError = true;
        this.countries = [];
      }
    );
  }
}
