import { Injectable } from '@angular/core';

export interface IFechaService {
  getTitulo(): string
  setErrorFecha(): void 
  unsetErrorFecha(): void
  getErrorFecha(): boolean
}

@Injectable({
  providedIn: 'root'
})
export abstract class FechaService implements IFechaService {
  errorFecha: boolean

  constructor() { }

  abstract getTitulo(): string

  setErrorFecha(): void {
  	this.errorFecha = true
  }

  unsetErrorFecha(): void {
  	this.errorFecha = false
  }

  getErrorFecha(): boolean {
  	return this.errorFecha
  }
}
