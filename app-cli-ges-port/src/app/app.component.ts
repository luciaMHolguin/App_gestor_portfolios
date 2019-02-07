import { Component } from "@angular/core";

@Component({
  // este decorador le da la funcionalidad al modelo (archivo.ts) de conectarse a la vista.
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app works!";
}
