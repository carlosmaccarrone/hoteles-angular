import { Injectable } from '@angular/core';

import { FechaService } from './fecha.service'

@Injectable({
  providedIn: 'root'
})
export class DesdeService extends FechaService {
	
  getTitulo(): string {
  	return 'Desde'
  }
}
