import { Injectable } from '@angular/core';

import { FechaService } from './fecha.service'

@Injectable({
  providedIn: 'root'
})
export class HastaService extends FechaService {

  getTitulo(): string {
  	return 'Hasta'
  }  
}
