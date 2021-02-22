import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountriesService) {}

  getCssClass(region: string): string {
    return region === this.activeRegion ? 'btn-active' : 'btn-nonactive';
  }

  activateRegion(region: string) {
    if (region === this.activeRegion) {
      return;
    } //Validamos para que no recargue la página si ya tiene cargados los países de esa región
    this.activeRegion = region;
    this.countries = []; //Para mejorar la velocidad de respuesta cuando cambiemos de región, limpiamos los países
    this.countryService.getCountryByRegion(region).subscribe((resp) => {
      this.countries = resp;
    });
  }
}
