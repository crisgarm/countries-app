import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css'],
})
export class CountryInputComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  inputSearch: string = '';
  getInputSearch() {
    this.onEnter.emit(this.inputSearch);
  }
}
