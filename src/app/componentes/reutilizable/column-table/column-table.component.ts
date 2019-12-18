import { Component, OnInit, Input } from '@angular/core';

import { IDetalleService } from '../../../services/detalle/detalle.service'

@Component({
  selector: 'app-column-table',
  templateUrl: './column-table.component.html',
  styleUrls: ['./column-table.component.css']
})
export class ColumnTableComponent implements OnInit {
  @Input() service: IDetalleService
  precioDormitorioSeleccionado: number
  serviciosSeleccionados = new Array()

  constructor() { }

  ngOnInit() {
    this.serviciosSeleccionados = this.getElementos()
    this.serviciosSeleccionados.forEach(array=>array.push(false))
  }

  getService(): IDetalleService {
  	return this.service
  }

  getElementos(): [] {
  	return this.getService().getElementos()
  }

  getCheckbox(): boolean {
  	return this.getService().getCheckbox()
  }

  getRadiobox(): boolean {
  	return this.getService().getRadiobox()
  }

  getTitulo(): string {
    return this.getService().getTitulo()
  }

  isRadioChecked(valor:number): boolean {
    return valor == this.precioDormitorioSeleccionado
  }

  cargarMonto(valor:number): void {
    this.restarMonto(this.precioDormitorioSeleccionado)
    this.getService().cargarMonto(valor)
  }

  restarMonto(valor:number): void {
    this.getService().restarMonto(valor)
  }

  cambiarPrecioDormitorio(valor:number): void {
    this.cargarMonto(valor)
    this.precioDormitorioSeleccionado = valor
    this.unsetMarcoRojo()
    this.unsetButtonError()
    this.getConOtroMarco = () => { return false }
  }

  manejarServicio(valor:number, index:number): void {
    if(!this.isBoxChecked(index)){
      this.checkBox(index)
      this.cargarMonto(valor)
    } else {
      this.uncheckBox(index)
      this.restarMonto(valor)
    }
  }

  unsetMarcoRojo(): void {
    this.getService().unsetMarcoRojo()
  }

  isBoxChecked(index:number): boolean {
    return this.serviciosSeleccionados[index][2] == true
  }

  checkBox(index:number): void {
    this.serviciosSeleccionados[index][2] = true
  }

  uncheckBox(index:number): void {
    this.serviciosSeleccionados[index][2] = false
  }

  getConOtroMarco(): boolean {
    return this.getService().getConOtroMarco()
  }

  unsetButtonError(): void {
    this.getService().unsetButtonError()
  }
}
