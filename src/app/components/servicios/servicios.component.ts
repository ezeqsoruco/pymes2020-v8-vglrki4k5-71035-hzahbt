import { Component, OnInit } from "@angular/core";
import { ServiciosService } from "../../services/servicios.service";
import { Servicio } from "../../models/servicio";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
  constructor(
    private serviciosService: ServiciosService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.GetServicios();
    this.FormReg = this.formBuilder.group({
      idservicio: [0],
      Descripcion: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(55)]
      ],
      Precio: [null, [Validators.required, Validators.pattern("[0-9]{1,7}")]],
      Stock: [null, [Validators.required, Validators.pattern("[0-9]{1,7}")]],
      CodigoDeBarra: [
        "",
        [Validators.required, Validators.pattern("[0-9]{13}")]
      ],
      IdArticuloFamilia: ["", [Validators.required]],
      FechaAlta: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)[0-9]{2}"
          )
        ]
      ],
      Activo: [true]
    });
  }

  GetServicios() {
    this.serviciosService.get().subscribe((res: Servicio[]) => {
      this.Items = res;
    });
  }

  Agregar() {
    this.AccionABMC = "A";
  }

  Volver() {
    this.AccionABMC = "L";
  }
}
