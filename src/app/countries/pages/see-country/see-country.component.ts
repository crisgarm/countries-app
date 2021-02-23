import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
})
export class SeeCountryComponent implements OnInit {
  country!: Country;
  border: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountriesService
  ) {}

  ngOnInit(): void {
    //Accedemos al observable donde están los parámetros
    //SwitchMap es un operador de rxjs que nos permite recibir un observable(params) y regresar otro (params.id)
    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.countryService.getCountryByAlpha(params.id)),
        tap(console.log)
      )
      .subscribe((resp) => {
        this.country = resp;
      });
  }
}

//Otra forma de hacerlo:
//Para saber cuando cambia la URl, nos subscribimos al cambio de la URL mediante un observable y escuchamos ese cambio con activatedRoute
// ngOnInit(): void {
//   this.activatedRoute.params.subscribe((params) => {
//     console.log(params.id);
//     Hacemos otro observable para traer la información del país
//     this.countryService.getCountryByAlpha(params.id).subscribe((country) => {
//       console.log(country);
//     });
//   });
