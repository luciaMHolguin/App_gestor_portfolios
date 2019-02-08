import { Injectable } from "@angular/core";
import { Portfolio } from "./portfolio";
import { ListaComponent } from "./lista/lista.component";

@Injectable() //implementa una funcionalidad que es la capacidad de ser injectable. y tambien implementa el sistema de eventos.
export class PortfoliosService {
  //el servicio es una clase
  lista: Array<Portfolio>;
  constructor() {
    this.lista = new Array<Portfolio>();
    // aqui habria que programar webLocalStorage linea 261 del archivo index_ok.html
  }
  //método de alta en el servicio que enlaza con darDeAlta() en el componente.
  public alta(nombre: string, descripcion: string, fichero: string): void {
    let nuevoPortfolio: Portfolio;
    nuevoPortfolio = new Portfolio(nombre, descripcion, fichero);

    this.lista.push(nuevoPortfolio);
    console.log("<<<ALTA PORTFOLIO: " + nombre + ">>>");
  }
  public baja(nombre: string) {
    for (let i = 0; i < this.lista.length; i++) {
      if (this.lista[i].getNombre() == nombre) {
        this.lista.splice(i, 1);
      }
    }
    console.log("<<<BAJA PORFOLIO: " + nombre + ">>>");
  }
  public listar() {
    return this.lista;
  }
}
