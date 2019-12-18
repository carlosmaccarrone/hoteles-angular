import { Component, OnInit } from '@angular/core';

import { HotelService } from '../../../services/hotel.service'
import { Hotel } from '../../../dominio/hotel'
import { DormitoriosService } from '../../../services/detalle/dormitorios.service'
import { AdicionalesService } from '../../../services/detalle/adicionales.service'
import { DesdeService } from '../../../services/fecha/desde.service'
import { HastaService } from '../../../services/fecha/hasta.service'
import { UserService } from '../../../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  fechaDesde: Date
  fechaHasta: Date
  precioTotal: number
  multiplicador: number

  constructor(private hotelService: HotelService,
              private dormitorioService: DormitoriosService,
              private adicionalesService: AdicionalesService,
              private fechaDesdeService: DesdeService,
              private fechaHastaService: HastaService,
              private userService: UserService,
              private router: Router
              ) { }

  ngOnInit() {
    this.fechaDesde = this.generarNewDate()
    this.fechaHasta = this.generarNewDate()
    this.resetPrecioTotal()
    this.setMultiplicador(0)
    this.setErrorFechaHasta()
  }

  getHotelService(): HotelService {
    return this.hotelService
  }

  getHotelDetalle(): Hotel {
    return this.getHotelService().getHotelDetalle()
  }

  getDormitorioService(): DormitoriosService {
    return this.dormitorioService
  }

  getAdicionalesService(): AdicionalesService {
    return this.adicionalesService
  }

  getFechaDesdeService(): DesdeService {
    return this.fechaDesdeService
  }

  getFechaHastaService(): HastaService {
    return this.fechaHastaService
  }

  getUserService(): UserService {
    return this.userService
  }
// ~~~~~~~~~~~~~~~~~~~~
// ésto lo delegaría solamente en detalleComponent pero el
// desconoce el componente colum-table que modifica el precio final
  getPrecioTotal(): number {
    return this.getHotelService().getPrecioTotal()
  }

  resetPrecioTotal(): void {
    this.getHotelService().resetPrecioTotal()
  }

  setMultiplicador(valor:number): void {
    this.getHotelService().setMultiplicador(valor)
  }

  getMultiplicador(): number {
    return this.getHotelService().getMultiplicador()
  }
// ~~~~~~~~~~~~~~~~~~~~

  getUnixTime(fecha:Date): number {
    return fecha.getTime()
  }

  generarNewDate(): Date {
    return new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate())
  }

  setFechaDesde(fecha:Date): void {
    this.fechaDesde = new Date(fecha)
    this.validarFechas()
  }

  setFechaHasta(fecha:Date): void {
    this.fechaHasta = new Date(fecha)
    this.validarFechas()
  }

  validarFechas(): void {
    this.validarFechaHasta()
    this.validarFechaDesde()
  }

  validarFechaHasta(){
    const diferencia = this.getDiferenciaEntreFechas()
    if(diferencia<1){
      this.setMultiplicador(0)
      this.setErrorFechaHasta()
    } else {
      const calcularDias = this.calcularDias(diferencia)
      this.setMultiplicador(calcularDias) 
      this.unsetErrorFechaHasta()
      this.unsetButtonError()
    }  
  }

  validarFechaDesde(): void {
    const cantidad = this.getCantidadDeDiasEntreFechaDeDesdeYFechaDeHoy()
    if(cantidad>1){
      this.setErrorFechaDesde()
      this.setMultiplicador(0)
    } else {
      this.unsetErrorFechaDesde()
      this.unsetButtonError()
    }
  }

  calcularDias(valor:number): number {
    const numero = this.calcularCantidadDeDiasEntreFechas(valor)
    const format =  this.quitarDecimales(numero)
    return this.redondearHaciaArriba(format)    
  }

  setButtonError(): void {
    this.getDormitorioService().setButtonError()
  }

  unsetButtonError(): void {
    this.getDormitorioService().unsetButtonError()
  }

  getButtonError(): boolean {
    return this.getDormitorioService().getButtonError()
  }

  getDiferenciaConDiaDeHoy(): number {
    const desde = this.getUnixTime(this.fechaDesde)
    const today = this.getUnixTime(new Date())
    const diferencia = today - desde
    return diferencia
  }

  getCantidadDeDiasEntreFechaDeDesdeYFechaDeHoy(): number {
    const diferencia = this.getDiferenciaConDiaDeHoy()
    const numero = this.calcularCantidadDeDiasEntreFechas(diferencia)
    const format = this.quitarDecimales(numero)
    const cantidad = this.redondearHaciaArriba(format)
    return cantidad
  }

  getDiferenciaEntreFechas(): number {
    const hasta = this.getUnixTime(this.fechaHasta) 
    const desde = this.getUnixTime(this.fechaDesde)
    const diferencia = hasta - desde     
    return diferencia
  }

  calcularCantidadDeDiasEntreFechas(valor:number): number {
    // valor dividido cantidad de milisegundos en un día
    // 24 horas * 3600 segundos * 1000 unidades
    // 3600 segundos = 1 hora
    return valor / (1000 * 3600 * 24)
  }

  quitarDecimales(valor:number): number {
    // se quitan decimales porque sino el redondeo no tiene efecto
    return Math.round(valor * 100) / 100
  }

  redondearHaciaArriba(valor:number): number {
    return Math.ceil(valor)
  }

  setErrorFechaHasta(): void {
    this.getFechaHastaService().setErrorFecha()
  }

  unsetErrorFechaHasta(): void {
    this.getFechaHastaService().unsetErrorFecha()
  }

  setErrorFechaDesde(): void {
    this.getFechaDesdeService().setErrorFecha()
  }

  unsetErrorFechaDesde(): void {
    this.getFechaDesdeService().unsetErrorFecha()
  }

  precioFinalEsDistintoDeNull(): boolean {
    return this.getPrecioTotal() != 0
  }

  tieneErrorEnPrecio(): void {
    if (!this.precioFinalEsDistintoDeNull()){
      this.setMarcoRojoDormitorios()
    }
  }

  generarReserva(): void {
    if(this.getDiferenciaEntreFechas()>1 &&
      this.getCantidadDeDiasEntreFechaDeDesdeYFechaDeHoy()<=1 &&
      this.precioFinalEsDistintoDeNull()){
      let hotel = this.getHotelDetalle().copy()
      hotel.setFechaDesde(this.fechaDesde)
      hotel.setFechaHasta(this.fechaHasta)
      hotel.setCantidadDeDias(this.getMultiplicador()) 
      hotel.setPrecioFinal(this.getPrecioTotal())
      this.getUserService().addReserva(hotel)
      this.router.navigate(['/listado/hoteles'])
    } else {
      this.setErrores()
    }
  }

  setErrores(): void {
    this.setButtonError()
    this.tieneErrorEnPrecio()    
  }

  setMarcoRojoDormitorios(): void {
    this.getDormitorioService().setMarcoRojo()
  }
}

