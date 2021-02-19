import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrls: ['./promesa.component.css']
})
export class PromesaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const promesa = new Promise((resolve, reject) => {
      // console.log('Esta es una nueva promesa');

      if(true){
        resolve('Esta es una nueva promesa');
      }
      else{
        reject('Ocurrio un error');
      }

      
    });
    
    promesa.then((datos) => {
      console.log(datos);
    });
    promesa.catch((datos) => {
      console.log(datos);
    });

    console.log('Fin del evento ngOnInit');

    this.obtenerUsuarios().then(usuarios => console.log(usuarios));
  }

  obtenerUsuarios() {
    const promesa = new Promise((resolve, reject) => {
      const url = `https://reqres.in/api/users`
      fetch(url).then(res=>res.json()).then(res=>resolve(res.data) )
    });
    return promesa;

  } 

 

}
