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
export class ServiciosService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = "https://bitgocba.duckdns.org/api/servicios";
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }

  post(obj: Servicio) {
    return this.httpClient.post(this.resourceUrl, obj);
  }
}
