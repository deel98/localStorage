import { Component, OnInit } from '@angular/core';
interface Clientes {
  nombre: string;
  apellido: string;
  edad: number;
}

interface Productos {
  nombre: string;
  precio: number;
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  clientes: Array<Clientes> = new Array<Clientes>();
  productos: Array<Productos> = new Array<Productos>();
  constructor() {}

  ngOnInit(): void {
    // this.clientes.push(
    //   {
    //     nombre: 'David',
    //     apellido: 'Cantú',
    //     edad: 22,
    //   },
    //   { nombre: 'Juan', apellido: 'Arriaga', edad: 21 }
    // );
    // this.productos.push(
    //   {
    //     nombre: 'Maiz',
    //     precio: 35,
    //   },
    //   {
    //     nombre: 'Frijol',
    //     precio: 40,
    //   }
    // );
  }

  guardarCliente() {
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  guardarProductos() {
    localStorage.setItem('productos', JSON.stringify(this.productos));
  }

  leer() {
    //   this.clientes = JSON.parse( localStorage.getItem('clientes'));
    // this.productos = JSON.parse(localStorage.getItem(this.productos));
  }

  eliminarClientes() {
    localStorage.removeItem('clientes');
  }

  eliminarProductos() {
    localStorage.removeItem('productos');
  }

  eliminarTodo() {
    localStorage.clear();
  }
}
