import { of, throwError } from "rxjs";


export class Alumnos {
    id: number;
    Nombre: string;
    Apellido: string;
    Mail: string;
    Curso: string;
    Edad: number;

    constructor(id: number, nombre: string, apellido: string, mail: string, curso: string, edad: number) {
        this.id = id,
            this.Nombre = nombre,
            this.Apellido = apellido,
            this.Mail = mail,
            this.Curso = curso,
            this.Edad = edad
    }

    obtenerAlumnoPromise() {
        return new Promise((resolve, reject) =>
            {
                if(this.Nombre){
                    return resolve( [{ nombre: this.Nombre },
                        { apellido: this.Apellido },
                        { edad: this.Edad },
                        { curso: this.Curso },
                        { mail: this.Mail }])
                    }
                    return reject({message: 'Error del promise, falta completar nombre'});
                    
            })
           
    }

    obtenerAlumnoObservable(){
        if(this.Nombre){
            return of([{Alumnos}])
        }else{
            return throwError(()=> new Error ('Error del observable, falta completar el nombre'))
        }
    }
}
