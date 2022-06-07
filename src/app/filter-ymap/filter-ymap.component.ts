import { Component, OnInit } from '@angular/core';
import { filter, from, map, Subscription } from 'rxjs';


@Component({
  selector: 'app-filter-ymap',
  templateUrl: './filter-ymap.component.html',
  styleUrls: ['./filter-ymap.component.scss']
})
export class FilterYMapComponent implements OnInit {


  alumnos = from([
    {
      id: 1,
      Nombre: "Juan",
      Apellido: "Torriani",
      Mail: "juangonzales@gmail.com",
      Curso: "JavaScript",
      Edad: 27
    },
    {
      id: 2,
      Nombre: "Jose",
      Apellido: "Garcia",
      Mail: "josegarcia@outlook.com",
      Curso: "Full Stack",
      Edad: 39
    },
    {
      id: 3,
      Nombre: "Maria",
      Apellido: "Rodriguez",
      Mail: "mariarodriguez@gmail.com",
      Curso: "Angular",
      Edad: 21
    },
    {
      id: 4,
      Nombre: "Leila",
      Apellido: "Pasich",
      Mail: "leila.pasich@mail.com",
      Curso: "MVC System",
      Edad: 24
    },
    {
      id: 5,
      Nombre: "Diego",
      Apellido: "De La Vega",
      Mail: "elzorro@gmail.com",
      Curso: "Frontend developer",
      Edad: 43
    },
    {
      id: 6,
      Nombre: "Micaela Jacqueline",
      Apellido: "Lafuente",
      Mail: "dasdadasd@mail.com",
      Curso: "Doctorado",
      Edad: 27
    }
  ]);

  constructor() { }

  sub:Subscription;

  submitFilter() {
   this.sub= this.alumnos.pipe(filter(val => val.Edad >= 25)).subscribe(
      val => console.log("Se filtran por mayores de 25 años: " + val.Apellido + ", " + val.Nombre + "- edad: " + val.Edad));
  }

  submitMap() {
    this.sub= this.alumnos.pipe(map(val => val.Edad + 5)).subscribe({
      next: (val) => { console.log("Se le agregan 5 años a la edad, mediante un map: " + val) },
      error: (e) => console.error(e)
    });

  }


  ngOnInit(): void {

  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}