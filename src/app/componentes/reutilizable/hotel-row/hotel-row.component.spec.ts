import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRowComponent } from './hotel-row.component';

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

describe('HotelRowComponent', () => {
  let component: HotelRowComponent;
  let fixture: ComponentFixture<HotelRowComponent>;

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
        HotelRowComponent,
        routingComponents 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRowComponent);
    component = fixture.componentInstance;

    const objeto = {id:9, nombre:'Park Hyatt', ubicacion:'Mendoza', precioNocheEconomico:8252, score:5, dormitorios:[['Triple Económica', 12000], ['Doble Económica', 8252], ['Doble Estándar', 10000], ['Penthouse', 15000]], servicios:[['Almuerzo',500],['Cena',500],['Cochera',700],['Lavandería',300]]}
    let parseado = JSON.parse(JSON.stringify(objeto))
    const hotel = Hotel.fromJson(parseado)  
    spyOn(component, 'getHotel').and.returnValue(hotel)

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
