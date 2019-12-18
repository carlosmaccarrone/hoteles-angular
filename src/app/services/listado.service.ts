import { Injectable } from '@angular/core';

import { Hotel } from '../dominio/hotel'
import { UserService } from './user.service'

export interface IListadoService {
  getHoteles(): Hotel[]
  getTitulo(): string
  esListado(): boolean
  esListaDeHoteles(): boolean
  esListaDeReservas(): boolean

// cancelar es de cotillon en hotel.service
  cancelarReserva(hotel_:Hotel): void
// todos éstos de abajo son de cotillon en user.service 
  hoteles: Hotel[]
  hotelDetalle: Hotel
  precioTotal: number
  multiplicador: number
  getHotelDetalle(): Hotel
  setHotelDetalle(hotel_:Hotel): void
  setNullHotelDetalle(): void
  resetPrecioTotal(): void
  getPrecioTotal(): number
  cargarMonto(valor:number): void
  getMultiplicador(): number
  setMultiplicador(valor:number): void
  restarMonto(valor:number): void
  mapearHoteles(hoteles:Hotel[]): void
  buscarHoteles(): Promise<Hotel[]>
}

@Injectable({
  providedIn: 'root'
})
export abstract class ListadoService implements IListadoService {
  hoteles: Hotel[]
  hotelDetalle: Hotel
  precioTotal: number
  multiplicador: number
  constructor(){ }

  abstract getHoteles(): Hotel[]
  abstract getTitulo(): string
  abstract esListado(): boolean
  abstract esListaDeHoteles(): boolean
  abstract esListaDeReservas(): boolean

  abstract cancelarReserva(hotel_:Hotel): void

  abstract getHotelDetalle(): Hotel
  abstract setHotelDetalle(hotel_:Hotel): void
  abstract setNullHotelDetalle(): void
  abstract resetPrecioTotal(): void
  abstract getPrecioTotal(): number
  abstract cargarMonto(valor:number): void
  abstract getMultiplicador(): number
  abstract setMultiplicador(valor:number): void
  abstract restarMonto(valor:number): void  
  abstract mapearHoteles(hoteles:Hotel[]): void
  abstract async buscarHoteles(): Promise<Hotel[]>
}

