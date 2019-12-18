import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComponent } from './detalle.component';

import { AppRoutingModule, routingComponents } from '../../../app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material'
import { MatInputModule } from '@angular/material'
import { Hotel } from '../../../dominio/hotel'
import { StubDormitorios, StubAdicionales } from './stub.services'
import { registerLocaleData } from '@angular/common'
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs) 

import { DormitoriosService } from '../../../services/detalle/dormitorios.service'
import { AdicionalesService } from '../../../services/detalle/adicionales.service'

describe('DetalleComponent', () => {
  let component: DetalleComponent;
  let fixture: ComponentFixture<DetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,        
        AppRoutingModule
      ],         
      declarations: [ 
        DetalleComponent,
        routingComponents 
      ],
      providers: [
        StubAdicionales,
        StubDormitorios
      ]       
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleComponent);
    component = fixture.componentInstance;

    component.getDormitorioService = () => {return TestBed.get(StubDormitorios)}
    component.getAdicionalesService = () => {return TestBed.get(StubAdicionales)}

    const objeto = {id:9, nombre:'Park Hyatt', ubicacion:'Mendoza', precioNocheEconomico:8252, score:5, dormitorios:[['Triple Económica', 12000], ['Doble Económica', 8252], ['Doble Estándar', 10000], ['Penthouse', 15000]], servicios:[['Almuerzo',500],['Cena',500],['Cochera',700],['Lavandería',300]]}
    let parseado = JSON.parse(JSON.stringify(objeto))
    const hotel = Hotel.fromJson(parseado)  
    spyOn(component, 'getHotelDetalle').and.returnValue(hotel)

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
