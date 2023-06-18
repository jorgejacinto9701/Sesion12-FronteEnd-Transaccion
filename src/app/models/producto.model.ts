import { Categoria } from "./categoria.model";

export class Producto {

    idProducto ?: number;
    nombre ?: string;
    precio ?: number;
    stock ?: number;
    categoria ?:Categoria;
    
}
