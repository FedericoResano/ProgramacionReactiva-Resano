import { Injectable } from '@angular/core';
import { delay, from, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }

  conObservable(value:string): Observable<string> {
    return of(value).pipe(delay(2000));
  }
  


}
