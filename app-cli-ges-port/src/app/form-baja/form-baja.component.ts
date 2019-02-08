import { Component, OnInit } from "@angular/core";
import { PortfoliosService } from "app/portfolios.service";

@Component({
  selector: "app-form-baja",
  templateUrl: "./form-baja.component.html",
  styleUrls: ["./form-baja.component.css"]
  //providers: [PortfoliosService]
})
export class FormBajaComponent implements OnInit {
  nombreIntroducido: string;
  desIntroducido: string;
  fichIntroducido: string;
  constructor(private servPortfolio: PortfoliosService) {}

  ngOnInit() {}
  darDeBaja() {
    this.servPortfolio.baja(this.nombreIntroducido);
  }
}
