import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router'
import { HotelService } from '../../../services/hotel.service'
import { Hotel } from '../../../dominio/hotel'
import { IListadoService } from '../../../services/listado.service'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-hotel-row',
  templateUrl: './hotel-row.component.html',
  styleUrls: ['./hotel-row.component.css']
})
export class HotelRowComponent implements OnInit {
  @Input() hotel: Hotel = new Hotel()
  @Input() service: IListadoService
  rutaFoto: String
  faMapMarkerAlt = faMapMarkerAlt

  constructor(private router: Router, 
              private hotelService: HotelService) { }

  ngOnInit() {
    this.rutaFoto = `url(../../../../../assets/image/${this.getHotelId()}.jpeg)`
  }

  getHotel(): Hotel {
    return this.hotel
  }

  getHotelService(): HotelService {
    return this.hotelService
  }

  getService(): HotelService {
    return this.service
  }

  isLoaded(): boolean {
    return Boolean( this.getService() )
  }

  getHotelCopy(): Hotel {
    return this.getHotel().copy()
  }

  getHotelId(): number {
    return this.getHotel().getId()
  }

  getHotelName(): string {
    return this.getHotel().getNombre()
  }

  getHotelLocation(): string {
    return this.getHotel().getUbicacion()
  }

  getHotelMinPrice(): number {
    return this.getHotel().getPrecioNocheEconomico()
  }

  getHotelScore(): number {
    return this.getHotel().getScore()
  }

  setHotelService(): void {
    this.getHotelService().setHotelDetalle(this.getHotelCopy())
  }

  navegarADetalle(): void {
    this.setHotelService()
    this.router.navigate(['/listado/detalle'])
  }

  esListado(): boolean {
    return this.getService().esListado()
  }

  esListaDeHoteles(): boolean {
    return this.getService().esListaDeHoteles()
  }

  esListaDeReservas(): boolean {
    return this.getService().esListaDeReservas()
  }

  getFechaDesde(): Date {
    return this.getHotel().getFechaDesde()
  }

  getFechaHasta(): Date {
    return this.getHotel().getFechaHasta()
  }

  getFechaDesdeString(): string {
    const fecha = new Date(this.getFechaDesde())
    return fecha.toLocaleDateString()
  }

  getFechaHastaString(): string {
    const fecha = new Date(this.getFechaHasta())
    return fecha.toLocaleDateString()
  }

  getCantidadDeNoches(): number {
    return this.getHotel().getCantidadDeDias()
  }

  getPrecioFinal(): number {
    return this.getHotel().getPrecioFinal()
  }

  cancelarReserva(): void {
    this.getService().cancelarReserva(this.getHotel())
  }

  getUnixTime(fecha:Date): number {
    return fecha.getTime()
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

  esCancelable(): boolean{
    const hasta = this.getUnixTime(this.getFechaHasta()) 
    const desde = this.getUnixTime(new Date())
    const diferencia = hasta - desde     
    const numero = this.calcularCantidadDeDiasEntreFechas(diferencia)
    const format =  this.quitarDecimales(numero)
    const cantidadDias = this.redondearHaciaArriba(format)
    return cantidadDias >= 6
  }

}