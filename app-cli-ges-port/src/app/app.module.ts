import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { FormAltaComponent } from "./form-alta/form-alta.component";
import { FormBajaComponent } from "./form-baja/form-baja.component";
import { ListaComponent } from "./lista/lista.component";
import { PortfoliosService } from "./portfolios.service"; //el servicio se importa directamente en el app.module y no hace falta importarlo en cada componente

@NgModule({
  declarations: [
    AppComponent,
    FormAltaComponent,
    FormBajaComponent,
    ListaComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [PortfoliosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
