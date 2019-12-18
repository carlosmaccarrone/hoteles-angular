import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoComponent } from './componentes/listado/listado.component'
import { HotelRowComponent } from './componentes/reutilizable/hotel-row/hotel-row.component'
import { DetalleComponent } from './componentes/reutilizable/detalle/detalle.component'
import { ColumnTableComponent } from './componentes/reutilizable/column-table/column-table.component'
import { DatepickerComponent } from './componentes/reutilizable/datepicker/datepicker.component'

export const routes: Routes = [
  { path: 'listado/:tipo', component: ListadoComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HotelRowComponent,
  ListadoComponent,
  DetalleComponent,
  ColumnTableComponent,
  DatepickerComponent,
]