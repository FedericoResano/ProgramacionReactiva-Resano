import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-pipe-async',
  templateUrl: './pipe-async.component.html',
  styleUrls: ['./pipe-async.component.scss']
})
export class PipeAsyncComponent implements OnInit {

  constructor(private servicioAlumnos: AlumnosService) { }

  asyncObservable: Observable<string>;

  ngOnInit(): void {
  
  this.asyncObservable= this.servicioAlumnos.conObservable('El pipe async llegó!');
  
  }


  

}
