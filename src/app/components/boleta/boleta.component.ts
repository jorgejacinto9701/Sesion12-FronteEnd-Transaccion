import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelClienteComponent } from '../model-cliente/model-cliente.component';
import { ModelProductoComponent } from '../model-producto/model-producto.component';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent {


  constructor(private dialogService: MatDialog) {}

  ngOnInit(): void {}

  buscaCliente(){
    console.log(">>> buscaCliente  >>");
    const dialogRef = this.dialogService.open(ModelClienteComponent);
  }

  buscaProducto(){
    console.log(">>> buscaProducto  >>");
    const dialogRef = this.dialogService.open(ModelProductoComponent);
  }


}
