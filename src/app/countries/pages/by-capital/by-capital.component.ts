import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent {
  inputSearch: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountriesService) {}

  getInputSearch(inputSearch: string) {
    this.hasError = false;
    this.inputSearch = inputSearch;

    this.countryService.searchCapital(this.inputSearch).subscribe(
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
