import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  inputSearch: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountriesService) {}

  getInputSearch() {
    this.hasError = false;
    console.log(this.inputSearch);
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
