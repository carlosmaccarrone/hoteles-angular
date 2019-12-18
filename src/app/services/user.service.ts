import { Injectable } from '@angular/core';

import { User } from '../dominio/user'
import { Hotel } from '../dominio/hotel'
import { ListadoService } from './listado.service'
import * as _ from 'lodash'
// import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService extends ListadoService {
  user: User = new User()
  reservas: Hotel[] = new Array()

  async buscarUser(user_:User): Promise<User> {
  	// debería ser this.http.post, pero queda stubeado 
  	// return await this.http.post<User>(REST_SERVER_URL + '/validarUser', user_).toPromise()
  	const usuario = {id:1, nombre:'Carlos Maccarrone'}
	  return await Promise.resolve<User>(usuario).then( user => { return user } )
  }

  async validarUser(user_:User): Promise<void> {
  	const user = await this.buscarUser(user_)
  	this.setUser(user)
  }

  setUser(user_:User): void {
  	this.user = User.fromJson(user_)
  }

  hayUserLogueado(): boolean {
    return this.getUserId() != null
  }

  getUser(): User {
  	return this.user
  }

  getUserId(): number {
    return this.getUser().id
  }

  addReserva(hotel:Hotel): void {
    // en realidad es un llamado put al backend
    this.reservas.push(hotel)
  }

  getTitulo(): string {
    return 'Reservas'
  }

  getHoteles(): Hotel[] {
    // no sin antes hacer los pertinentes llamados al backend
    return this.reservas
  }

  esListaDeHoteles(): boolean {
    return false
  }

  esListaDeReservas(): boolean {
    return true
  }

  esListado(): boolean {
    return true
  }

  cancelarReserva(hotel_:Hotel): void {
    _.remove(this.reservas, (e) => hotel_ === e)
  }

  getHotelDetalle(): Hotel { return new Hotel()}
  setHotelDetalle(hotel_:Hotel): void {}
  setNullHotelDetalle(): void {}
  resetPrecioTotal(): void {}
  getPrecioTotal(): number { return 0 }
  cargarMonto(valor:number): void {}
  getMultiplicador(): number { return 0 }
  setMultiplicador(valor:number): void{}
  restarMonto(valor:number): void {}
  mapearHoteles(hoteles:Hotel[]): void {}

  async buscarHoteles(): Promise<Hotel[]> { 
    const array = [   {id:1, nombre:'NH Collection Crillon', ubicacion:'Buenos Aires', score:4, dormitorios:[['Triple Económica', 7000], ['Doble Económica', 8252], ['Doble Estándar', 9000], ['Penthouse', 10000]], servicios:[['Almuerzo',300],['Cena',300],['Cochera',500],['Lavandería',100]]}]
    const hoteles = array.map((hotel)=>Hotel.fromJson(JSON.parse(JSON.stringify(hotel))))
    return await Promise.resolve<Hotel[]>(hoteles).then(hotels=>{return hotels})
  }
}
