import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-model-producto',
  templateUrl: './model-producto.component.html',
  styleUrls: ['./model-producto.component.css']
})
export class ModelProductoComponent {

  //Grila
  dataSource:any;


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns = ["idProducto","nombre","precio","stock",'actions'];

  constructor(private dialogService: MatDialog, private productoService: ProductoService) {
    this.refreshTable();
  }

  private refreshTable() {
    this.productoService.consulta("").subscribe(
      x => {
        this.dataSource = new MatTableDataSource<Producto>(x);
        this.dataSource.paginator = this.paginator; 
      }
    );
  }

}
