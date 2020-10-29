import { Component, OnInit } from "@angular/core";
import { ServiciosService } from "../../services/servicios.service";
import { Servicio } from "../../models/servicio";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDialogService } from "../../services/modal-dialog.service";
import { Cliente } from "../../models/cliente";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.css"]
})
export class ClientesComponent implements OnInit {
  Titulo = "Clientes";
  TituloAccionABMC = {
    A: "(Agregar)",
    L: "(Listado)"
  };

  AccionABMC = "L";
  Clientes: Cliente[] = [];

  constructor(
    private serviciosService: ServiciosService,
    public formBuilder: FormBuilder,
    private modalDialogService: ModalDialogService
  ) {}

  ngOnInit() {}

  GetClientes() {
    this.serviciosService.get().subscribe((res: Cliente[]) => {
      this.Clientes = res;
    });
  }
}
