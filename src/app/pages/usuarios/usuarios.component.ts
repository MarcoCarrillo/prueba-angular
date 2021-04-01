import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any;

  constructor() { }

  ngOnInit(): void {
    this.obtenerUsuarios().then(datosUsuarios => {
      this.usuarios = datosUsuarios;
      console.log(this.usuarios);
    });
  }
  obtenerUsuarios() {
    const promesa = new Promise((resolve, reject) => {
     
      fetch('https://servidor-nestjs.herokuapp.com/usuarios')
      .then(res=>res.json())
      .then(res=>resolve(res) )
    });
    return promesa;
  }

}
