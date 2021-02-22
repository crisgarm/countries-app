import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  //No quiero retornar la información dentro del servicio sino que quiero mandar la información a quien esté llamando a searchCountry
  searchCountry(query: string): Observable<any> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.http.get(url);
  }
}
