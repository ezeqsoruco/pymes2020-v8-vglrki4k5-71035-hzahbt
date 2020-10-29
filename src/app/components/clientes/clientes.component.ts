import { Component, OnInit } from "@angular/core";
import { ClientesService } from "../../services/clientes.service";
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

  Options = [
    { Id: null, Nombre: "" },
    { Id: true, Nombre: "SI" },
    { Id: false, Nombre: "NO" }
  ];

  AccionABMC = "L";
  Clientes: Cliente[] = [];
  FormReg: FormGroup;
  submitted: false;

  constructor(
    private clientesService: ClientesService,
    public formBuilder: FormBuilder,
    private modalDialogService: ModalDialogService
  ) {}

  ngOnInit() {
    this.GetClientes();
    this.FormReg = this.formBuilder.group({
      IdCliente: [0],
      Nombre: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(100)
        ]
      ],
      NumeroDocumento: [
        null,
        [Validators.required, Validators.pattern("[0-9]{1,7}")]
      ],
      TieneTrabajo: ["", [Validators.required]]
    });
  }

  GetClientes() {
    this.clientesService.get().subscribe((res: Cliente[]) => {
      this.Clientes = res;
    });
  }

  AgregarCliente() {
    this.AccionABMC = "A";
    this.FormReg.reset();
    this.submitted = false;
    this.FormReg.markAsUntouched();
  }
}
