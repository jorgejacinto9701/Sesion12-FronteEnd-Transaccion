import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-model-cliente',
  templateUrl: './model-cliente.component.html',
  styleUrls: ['./model-cliente.component.css']
})
export class ModelClienteComponent {

  //Grila
  dataSource:any;


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns = ["idCliente","nombre","apellido",'actions'];

  constructor(private dialogService: MatDialog, private clienteService: ClienteService) {
    this.refreshTable();
  }

  private refreshTable() {
    this.clienteService.consulta("").subscribe(
      x => {
        this.dataSource = new MatTableDataSource<Cliente>(x);
        this.dataSource.paginator = this.paginator; 
      }
    );
  }

}
