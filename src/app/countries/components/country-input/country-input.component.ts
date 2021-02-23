import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  //El debouncer se tiene que emitir cuando el usuario deje de escribir. Subject es un observable
  debouncer: Subject<string> = new Subject();

  inputSearch: string = '';

  //Se ejecuta una sola vez cuando el componente es creado
  ngOnInit() {
    //El método pipe me permite transformar la salida del subscribe
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  getInputSearch() {
    this.onEnter.emit(this.inputSearch);
  }

  keyPressed() {
    //Next para mandar el siguiente valor
    this.debouncer.next(this.inputSearch);
  }
}
