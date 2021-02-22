import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  inputSearch: string = '';

  getInputSearch() {
    console.log(this.inputSearch);
    this.countryService.searchCountry(this.inputSearch).subscribe((resp) => {
      console.log(resp);
    });
  }

  constructor(private countryService: CountriesService) {}
}
