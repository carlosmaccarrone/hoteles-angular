import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { UserService } from './services/user.service'
import { DormitoriosService } from './services/detalle/dormitorios.service'
import { User } from './dominio/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faBed = faBed
  ruta: string
  error: Error

  constructor(private router: Router, 
              private userService: UserService,
              private dormitorioService: DormitoriosService) { }

  async ngOnInit() {
    if(!this.userService.hayUserLogueado()){
      this.router.navigate(['/'])
    }        
  	try {
      // en realidad validarUser se llama en el login 
      // y el unico comportamiento de app.component es mostrar un select
  	  this.userService.validarUser( new User() )
  	} catch (err) {
  	  this.error = err
  	}
  }

  getUserService(): UserService {
    return this.userService
  }

  getUser(): User {
  	return this.getUserService().getUser()
  }

  getUserName(): string {
  	return this.getUser().nombre
  }

  getDormitoriosService(): DormitoriosService {
    return this.dormitorioService
  }

  unsetDetalleErrors(): void {
    this.getDormitoriosService().unsetButtonError()
    this.getDormitoriosService().unsetMarcoRojo()
  }

  navegarAHome(): void {
    this.unsetDetalleErrors()
    this.router.navigate(['/'])    
  }

  navegarAHoteles(): void {
    this.unsetDetalleErrors()
    this.router.navigate(['/listado/hoteles'])
  }

  navegarAReservas(): void {
    this.unsetDetalleErrors()
    this.router.navigate(['/listado/reservas'])
  }
}
