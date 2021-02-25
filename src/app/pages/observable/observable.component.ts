import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() {
    
    
    
    this.obtenerObservable().pipe(retry(3)).subscribe(
      valor => console.log('Suscripcion',valor),
      error => console.warn('Error'),
      () => console.info('Se completo la suscripcion')
      );

   }
   
  ngOnInit(): void {
  }

  obtenerObservable():Observable<number>{
    let i = -1
    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() =>{
        
        i++;
        observer.next(i);

        if(i == 10){
          clearInterval(intervalo);
          observer.complete();
        }

        if(i == 2){
          // // console.log("Error en suscripcion 2");
          // i = 0;
          observer.error();

        }

      }, 1000);
    });

    return obs$;
  }

}
