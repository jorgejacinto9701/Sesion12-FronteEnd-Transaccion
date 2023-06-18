import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';

const baseUrl =  AppSettings.API_ENDPOINT + "/boleta";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  constructor(private http:HttpClient) { }
 
  consulta(filtro:string):Observable<Producto[]>{
      return  this.http.get<Producto[]>(baseUrl +"/listaProducto"); 
  }  
}
