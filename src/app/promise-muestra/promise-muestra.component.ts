
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { filter, from, map, of, Subscriber, Subscription } from 'rxjs';
import { Alumnos } from '../alumnos';

@Component({
  selector: 'app-promise-muestra',
  templateUrl: './promise-muestra.component.html',
  styleUrls: ['./promise-muestra.component.scss']
})
export class PromiseMuestraComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) { }


  
  grillaFormGroup: FormGroup = this.formBuilder.group({
    Nombre:['', [Validators.required, Validators.maxLength(100)]],
    Apellido:['', [Validators.required, Validators.maxLength(100)]],
    Curso:['', [Validators.required, Validators.maxLength(100)]],
    Mail:['', [Validators.required, Validators.email]],
    Edad:['', [Validators.required, Validators.max(99)]]

  })

  

  ngOnInit(): void {
   
  }

  submit(){

    let  pruebaPromise = new Alumnos(1, this.grillaFormGroup.get("Nombre")?.value, this.grillaFormGroup.get("Apellido")?.value,
    this.grillaFormGroup.get("Mail")?.value,this.grillaFormGroup.get("Curso")?.value,this.grillaFormGroup.get("Edad")?.value,);

    pruebaPromise.obtenerAlumnoPromise()
    .then((val)=>console.log(val))
    .catch((error)=>console.log(error.message));
  }

  
}   



 
