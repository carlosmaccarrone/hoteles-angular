import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IFechaService } from '../../../services/fecha/fecha.service'
import { FormControl } from '@angular/forms'
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core'
import { MomentDateAdapter } from '@angular/material-moment-adapter'
import * as _moment from 'moment'
import { default as _rollupMoment, Moment } from 'moment'
const moment = _rollupMoment || _moment

import { MatDatepickerInputEvent } from '@angular/material/datepicker'

export const formatoDeFechas = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
  }
}

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [
  				{ provide: DateAdapter,
  				  useClass: MomentDateAdapter },
    			{ provide: MAT_DATE_FORMATS, 
    			  useValue: formatoDeFechas }
  			 ]
})
export class DatepickerComponent {
  @Input() service: IFechaService
  @Output() pasajeFecha = new EventEmitter()
  fecha: Date = new Date()

  pasarFecha(){
  	this.pasajeFecha.emit(this.fecha)
  }

  getService(): IFechaService {
    return this.service
  }

  getTitulo(): string {
    return this.getService().getTitulo()
  }

  getErrorFecha(): boolean {
    return this.getService().getErrorFecha()
  }
}


