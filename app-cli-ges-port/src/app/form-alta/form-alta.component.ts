import { Component, OnInit } from "@angular/core";
import { PortfoliosService } from "../portfolios.service"; //aquí importamos nuestro service.
@Component({
  //lo que esta dentro del componente son los metadatos, la inf de como va a funcionar el componente //la info entre corchetes esta en JSON es un objeto de javaScript.
  selector: "app-form-alta", //<app-form-alta>ESta es la etqueta de nuestro componente form </app-form-alta>
  templateUrl: "./form-alta.component.html",
  styleUrls: ["./form-alta.component.css"]
  //providers: [PortfoliosService] //esto llama a nuestro servicio cuando la app de angular se carga
})
//tenemos una classe con nuestro comp, que implementa la interfaz OnInIt (al inicio del componente hz esto) de la que podemos usar todos los metodos
export class FormAltaComponent implements OnInit {
  //este es el modelo, la clase en typeScript que lleva la lógica de la interfaz de ususario.
  //clase componente
  etiqueta_nombre: string; //variables miembro de la clase componente
  titulo: string;
  placeholder_nombre: string;
  nombreIntroducido: string;
  placeholder_des: string;
  desIntroducido: string;
  placeholder_fich: string;
  fichIntroducido: string;
  servPortfolio: PortfoliosService; //esta es nuestro variable para el servicio

  constructor(sp: PortfoliosService) {
    //inyecta la clase portfoliosService como paramentro del constructor de nuestro componente.
    this.servPortfolio = sp;
  }
  //ngOnInit Metodo conrrespondiente al evento "al inicializar componente", recibe una llamada automatica por parte del motor de angular.
  ngOnInit() {
    this.titulo = "alta de portfolios";
    this.etiqueta_nombre = "nombre";
    this.placeholder_nombre = "introduzca nombre y apellidos";
    this.placeholder_des = "introduzca descripcion";
    this.placeholder_fich = "cargue fichero";

    //this.nombreIntroducido = "el Innombrable";
  }
  limpiar() {
    this.nombreIntroducido = "";
    this.desIntroducido = "";
    this.fichIntroducido = "";
  }
  darDeAlta() {
    //método del componente
    this.servPortfolio.alta(
      this.nombreIntroducido,
      this.desIntroducido,
      this.fichIntroducido
    );
  }
}
