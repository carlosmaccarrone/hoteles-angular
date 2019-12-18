import { Injectable } from '@angular/core';

import { DetalleService } from './detalle.service'
import { HotelService } from '../../services/hotel.service'

@Injectable({
  providedIn: 'root'
})
export class AdicionalesService extends DetalleService {

  constructor(private hotelService_: HotelService) { 
  	super(hotelService_)
  }

  getElementos(): [] {
  	return this.getHotelDetalle().getServicios()
  }

  getCheckbox(): boolean {
  	return true
  }

  getRadiobox(): boolean {
    return false
  }

  getTitulo(): string {
    return 'Servicios Adicionales'
  }
}
