import { Component, OnInit } from "@angular/core";
import { ServiciosService } from "../../services/servicios.service";
import { Servicio } from "../../models/servicio";

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

  Items: Servicio[] = [];

  AccionABMC = "L";
  constructor(private serviciosService: ServiciosService) {}

  ngOnInit() {
    this.GetServicios();
  }

  GetServicios() {
    this.serviciosService.get().subscribe((res: Servicio[]) => {
      this.Items = res;
    });
  }

  Agregar() {
    this.AccionABMC = "A";
  }
}
