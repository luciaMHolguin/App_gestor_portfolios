import { Component, OnInit } from "@angular/core";
import { PortfoliosService } from "app/portfolios.service";
import { Portfolio } from "app/portfolio";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"]
  //providers: [PortfoliosService]
  //providers: [FormBajaComponent]
})
export class ListaComponent implements OnInit {
  arrayPortfolios: Array<Portfolio>;
  constructor(private servicioPortfolio: PortfoliosService) {}

  ngOnInit() {
    this.actualizar();
  }
  actualizar(): void {
    this.arrayPortfolios = this.servicioPortfolio.listar();
  }
}
