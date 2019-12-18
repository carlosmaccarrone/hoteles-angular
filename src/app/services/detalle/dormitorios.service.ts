import { Injectable } from '@angular/core';

import { DetalleService } from './detalle.service'
import { HotelService } from '../../services/hotel.service'

@Injectable({
  providedIn: 'root'
})
export class DormitoriosService extends DetalleService {

  constructor(private hotelService_: HotelService) { 
  	super(hotelService_)
  }

  getHotelService(): HotelService {
    return this.hotelService_
  }

  getElementos(): [] {
  	return this.getHotelDetalle().getDormitorios()
  }

  getCheckbox(): boolean {
  	return false
  }

  getRadiobox(): boolean {
    return true
  } 

  getTitulo(): string {
    return 'Habitaciones'
  } 
}
