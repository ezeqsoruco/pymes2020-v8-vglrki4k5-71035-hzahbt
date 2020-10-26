import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.css"]
})
export class ServiciosComponent implements OnInit {
  Titulo = "Servicios";
  TituloAccionABMC = {
    A: "(Agregar)",
    L: "(Listado)"
  };

  AccionABMC = "L";
  constructor() {}

  ngOnInit() {}
}
