import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";
import { Servicio } from "../models/servicio";

@Injectable({
  providedIn: "root"
})

export class ClientesService {
  resourceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.resourceUrl = "https://demo3151356.mockable.io/clientes";
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }

  post(obj: Servicio) {
    return this.httpClient.post(this.resourceUrl, obj);
  }
}
