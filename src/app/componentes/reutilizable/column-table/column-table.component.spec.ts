import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnTableComponent } from './column-table.component';

import { AppRoutingModule, routingComponents } from '../../../app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material'
import { MatInputModule } from '@angular/material'

describe('ColumnTableComponent', () => {
  let component: ColumnTableComponent;
  let fixture: ComponentFixture<ColumnTableComponent>;

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
        ColumnTableComponent,
        routingComponents 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnTableComponent);
    component = fixture.componentInstance;

    spyOn(component, 'getCheckbox').and.returnValue(true)
    spyOn(component, 'getConOtroMarco').and.returnValue(false)
    spyOn(component, 'getRadiobox').and.returnValue(false)
    spyOn(component, 'getElementos').and.returnValue([])
    spyOn(component, 'getTitulo').and.returnValue("Servicios Adicionales")

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
