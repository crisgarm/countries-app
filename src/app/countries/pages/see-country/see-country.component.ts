import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css'],
})
export class SeeCountryComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountriesService
  ) {}

  ngOnInit(): void {
    //Accedemos al observable donde están los parámetros
    //SwitchMap es un operador de rxjs que nos permite recibir un observable(params) y regresar otro (params.id)
    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.countryService.getCountryByAlpha(params.id))
      )
      .subscribe((resp) => {
        console.log(resp);
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
