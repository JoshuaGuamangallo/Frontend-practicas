import {Component, OnInit} from '@angular/core';

import {Options} from './options.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  static URL = 'home';
  options: Options[];

  constructor() {
    this.options = [
      {value: 'Estudiante', viewValue: 'Estudiante'},
      {value: 'Docente', viewValue: 'Docente'},
      {value: 'Personal administrativo', viewValue: 'Personal administrativo'},
      {value: 'Administrador', viewValue: 'Administrador'}
    ];
  }

  ngOnInit() {
  }

}
