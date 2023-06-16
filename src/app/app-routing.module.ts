import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletaComponent } from './components/boleta/boleta.component';


const routes: Routes = [
  {path:"boleta", component:BoletaComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
