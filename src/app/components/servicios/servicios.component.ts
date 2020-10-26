import { Component, OnInit } from "@angular/core";
import { ServiciosService } from "../../services/servicios.service";
import { Servicio } from "../../models/servicio";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDialogService } from "../../services/modal-dialog.service";

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

  FormReg: FormGroup;
  submitted = false;

  constructor(
    private serviciosService: ServiciosService,
    public formBuilder: FormBuilder,
    private modalDialogService: ModalDialogService
  ) {}

  ngOnInit() {
    this.GetServicios();
    this.FormReg = this.formBuilder.group({
      idservicio: [0],
      Descripcion: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(55)]
      ],
      Importe: [null, [Validators.required, Validators.pattern("[0-9]{1,7}")]],
      CantidadHoras: [
        null,
        [Validators.required, Validators.pattern("[0-9]{1,7}")]
      ]
    });
  }

  GetServicios() {
    this.serviciosService.get().subscribe((res: Servicio[]) => {
      this.Items = res;
    });
  }

  Agregar() {
    this.AccionABMC = "A";
    this.FormReg.reset();
    this.submitted = false;
    this.FormReg.markAsUntouched();
  }

  Volver() {
    this.AccionABMC = "L";
  }

  // grabar tanto altas como modificaciones
  Grabar() {
    this.submitted = true;
    // verificar que los validadores esten OK
    if (this.FormReg.invalid) {
      return;
    }

    //hacemos una copia de los datos del formulario para luego enviarlo al servidor
    const itemCopy = { ...this.FormReg.value };

    // agregar post
    if (itemCopy.idservicio == 0 || itemCopy.idservicio == null) {
      itemCopy.idservicio = 0;
      this.serviciosService.post(itemCopy).subscribe((res: any) => {
        this.Volver();
        this.modalDialogService.Alert("Registro agregado correctamente.");
      });
    }
  }
}
