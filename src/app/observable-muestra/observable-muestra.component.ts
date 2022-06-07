import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Alumnos } from '../alumnos';

@Component({
  selector: 'app-observable-muestra',
  templateUrl: './observable-muestra.component.html',
  styleUrls: ['./observable-muestra.component.scss']
})
export class ObservableMuestraComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  observableFormGroup: FormGroup = this.formBuilder.group({
    Nombre:['', [Validators.required, Validators.maxLength(100)]],
    Apellido:['', [Validators.required, Validators.maxLength(100)]],
    Curso:['', [Validators.required, Validators.maxLength(100)]],
    Mail:['', [Validators.required, Validators.email]],
    Edad:['', [Validators.required, Validators.max(99)]]

  })
  alumno= new Alumnos(1, this.observableFormGroup.get("Nombre")?.value, this.observableFormGroup.get("Apellido")?.value,
  this.observableFormGroup.get("Mail")?.value,this.observableFormGroup.get("Curso")?.value,this.observableFormGroup.get("Edad")?.value,);
  
  sub:Subscription;
  ngOnInit(): void {
  }

  submit(){
  this.sub=this.alumno.obtenerAlumnoObservable().subscribe(
    {
      next: (data)=> console.log(data),
      error: (data)=> console.log(data)
    }
  )
  }

  ngOnDetroy(){
    this.sub.unsubscribe();
  }
}
