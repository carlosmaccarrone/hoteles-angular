import { Injectable } from '@angular/core';

import { Hotel } from '../../dominio/hotel'
import { HotelService } from '../hotel.service'

export interface IDetalleService {
  getElementos(): []
  getCheckbox(): boolean
  getRadiobox(): boolean
  getTitulo(): string
  cargarMonto(valor:number): void
  restarMonto(valor:number): void
  getConOtroMarco(): boolean
  unsetMarcoRojo(): void
  unsetButtonError(): void
}

@Injectable({
  providedIn: 'root'
})
export abstract class DetalleService implements IDetalleService {
  marcoRojo: boolean = false
  buttonError: boolean = false

  constructor(private hotelService: HotelService) { }

  getHotelService(): HotelService {
    return this.hotelService
  }

  getHotelDetalle(): Hotel {
  	return this.getHotelService().getHotelDetalle()
  }

  abstract getElementos(): []
  abstract getCheckbox(): boolean
  abstract getRadiobox(): boolean
  abstract getTitulo(): string
  
  cargarMonto(valor:number): void {
    this.getHotelService().cargarMonto(valor)
  }  

  restarMonto(valor:number): void {
    this.getHotelService().restarMonto(valor)
  }  

  setMarcoRojo(): void {
    this.marcoRojo = true
  }

  unsetMarcoRojo(): void {
    this.marcoRojo = false
  }

  getConOtroMarco(): boolean {
    return this.marcoRojo
  }

  setButtonError(): void {
    this.buttonError = true
  }

  unsetButtonError(): void {
    this.buttonError = false
  }

  getButtonError(): boolean {
    return this.buttonError
  }
}
