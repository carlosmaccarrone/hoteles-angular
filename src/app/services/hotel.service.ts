import { Injectable } from '@angular/core';

import { Hotel } from '../dominio/hotel'
import { UserService } from './user.service'
import { ListadoService } from './listado.service'

@Injectable({
  providedIn: 'root'
})
export class HotelService extends ListadoService {

  async buscarHoteles(): Promise<Hotel[]> { 
	const array = [   {id:1, nombre:'NH Collection Crillon', ubicacion:'Buenos Aires', score:4, dormitorios:[['Triple Económica', 7000], ['Doble Económica', 8252], ['Doble Estándar', 9000], ['Penthouse', 10000]], servicios:[['Almuerzo',300],['Cena',300],['Cochera',500],['Lavandería',100]]},
					  {id:2, nombre:'Dazzler Maipú', ubicacion:'Buenos Aires', score:4, dormitorios:[['Triple Económica', 7000], ['Doble Económica', 3608], ['Doble Estándar', 5000], ['Penthouse', 10000]], servicios:[['Almuerzo',350],['Cena',300],['Cochera',600],['Lavandería',90]]},
					  {id:3, nombre:'Arribo Buenos Aires', ubicacion:'Buenos Aires', score:3, dormitorios:[['Triple Económica', 7000], ['Doble Económica', 3380], ['Doble Estándar', 5000]], servicios:[['Almuerzo',300],['Cena',350],['Lavandería',90]]},
					  {id:4, nombre:'Melia Buenos Aires', ubicacion:'Buenos Aires', score:5, dormitorios:[['Triple Económica', 9500], ['Doble Económica', 5888], ['Doble Estándar', 7500], ['Penthouse', 12340]], servicios:[['Almuerzo',500],['Cena',500],['Cochera',700],['Lavandería',300]]},
					  {id:5, nombre:'Epico Recoleta Hotel', ubicacion:'Buenos Aires', score:3, dormitorios:[['Triple Económica', 6500], ['Doble Económica', 2678], ['Doble Estándar', 4000]], servicios:[['Almuerzo',250],['Cena',300],['Lavandería',70]]},
					  {id:6, nombre:'Livin Residence', ubicacion:'Buenos Aires', score:4, dormitorios:[['Triple Económica', 7000], ['Doble Económica', 2533], ['Doble Estándar', 4000], ['Penthouse', 10030]], servicios:[['Almuerzo',300],['Cena',300],['Cochera',450],['Lavandería',100]]},
					  {id:7, nombre:'Catalinas Suites', ubicacion:'Buenos Aires', score:3, dormitorios:[['Triple Económica', 5000], ['Doble Económica', 1876], ['Doble Estándar', 3000]], servicios:[['Almuerzo',250],['Cena',250]]},
					  {id:8, nombre:'Hotel Canal Beagle', ubicacion:'Ushuaia', score:4, dormitorios:[['Triple Económica', 10000], ['Doble Económica', 6852], ['Doble Estándar', 8000], ['Penthouse', 13500]], servicios:[['Almuerzo',250],['Cena',350],['Cochera',500],['Lavandería',110]]},
					  {id:9, nombre:'Park Hyatt', ubicacion:'Mendoza', score:5, dormitorios:[['Triple Económica', 12000], ['Doble Económica', 8252], ['Doble Estándar', 10000], ['Penthouse', 15000]], servicios:[['Almuerzo',500],['Cena',500],['Cochera',700],['Lavandería',300]]},
					  {id:10, nombre:'Holiday Inn Express', ubicacion:'Rosario', score:3, dormitorios:[['Triple Económica', 7000], ['Doble Económica', 3408], ['Doble Estándar', 5000]], servicios:[['Almuerzo',200],['Cena',250],['Lavandería',50]]},
					  {id:11, nombre:'NH Urbano', ubicacion:'Córdoba', score:4, dormitorios:[['Triple Económica', 7000], ['Doble Económica', 3157], ['Doble Estándar', 5000], ['Penthouse', 9430]], servicios:[['Almuerzo',200],['Cena',400],['Cochera',450],['Lavandería',140]]},
					  {id:12, nombre:'Plaza Real', ubicacion:'Rosario', score:4, dormitorios:[['Triple Económica', 6000], ['Doble Económica', 2659], ['Doble Estándar', 3500], ['Penthouse', 9000]], servicios:[['Almuerzo',250],['Cena',350],['Cochera',200],['Lavandería',150]]},
					  {id:13, nombre:'Samka', ubicacion:'Salta', score:2, dormitorios:[['Doble Estándar', 1936], ['Penthouse', 5000]], servicios:[['Almuerzo',200],['Cena',180]]},
					  {id:14, nombre:'Amucan', ubicacion:'Neuquén', score:3, dormitorios:[['Doble Económica', 2540], ['Doble Estándar', 4000], ['Penthouse', 8000]], servicios:[['Almuerzo',300],['Cena',300]]},
					  {id:15, nombre:'Hotel Yrigoyen', ubicacion:'Córdoba', score:3, dormitorios:[['Doble Económica', 4176], ['Doble Estándar', 6000], ['Penthouse', 8000]], servicios:[['Almuerzo',350],['Cena',400],['Lavandería',100]]},
					  {id:16, nombre:'InterContinental', ubicacion:'Mendoza', score:5, dormitorios:[['Triple Económica', 9000], ['Doble Económica', 5647], ['Doble Estándar', 7500], ['Penthouse', 13000]], servicios:[['Almuerzo',500],['Cena',500],['Cochera',700],['Lavandería',300]]},
					  {id:17, nombre:'Hotel Ushuaia', ubicacion:'Ushuaia', score:4, dormitorios:[['Triple Económica', 10000], ['Doble Económica', 5435], ['Doble Estándar', 7500], ['Penthouse', 13000]], servicios:[['Almuerzo',330],['Cena',260],['Cochera',390],['Lavandería',400]]},
					  {id:18, nombre:'Millenium Mitre', ubicacion:'Mendoza', score:3, dormitorios:[['Triple Económica', 7000], ['Doble Económica', 2988], ['Doble Estándar', 5000]], servicios:[['Almuerzo',200],['Lavandería',70]]},
					  {id:19, nombre:'El Prado', ubicacion:'Neuquén', score:3, dormitorios:[['Doble Económica', 4052], ['Doble Estándar', 6000], ['Penthouse', 8000]], servicios:[['Almuerzo',350],['Lavandería',200]]},
					  {id:20, nombre:'Majestic Hotel', ubicacion:'Rosario', score:3, dormitorios:[['Doble Económica', 2653], ['Doble Estándar', 5000], ['Penthouse', 7000]], servicios:[['Almuerzo',300],['Lavandería',150]]},
					  {id:21, nombre:'Hotel Neu', ubicacion:'Neuquén', score:3, dormitorios:[['Triple Económica', 8753], ['Doble Económica', 4233], ['Doble Estándar', 6000]], servicios:[['Almuerzo',300],['Cochera',250]]},
					  {id:22, nombre:'San Francisco', ubicacion:'Salta', score:3, dormitorios:[['Doble Económica', 2603], ['Doble Estándar', 4000], ['Penthouse', 7000]], servicios:[['Almuerzo',350],['Cochera',400]]},
					  {id:23, nombre:'Hotel Patios de Lerma', ubicacion:'Salta', score:3, dormitorios:[['Triple Económica', 6000], ['Doble Económica', 2681], ['Doble Estándar', 4000]], servicios:[['Almuerzo',180],['Cena',280]]},
					  {id:24, nombre:'Interplaza', ubicacion:'Córdoba', score:4, dormitorios:[['Triple Económica', 7000], ['Doble Económica', 2574], ['Doble Estándar', 4500], ['Penthouse', 10000]], servicios:[['Almuerzo',300],['Cena',300],['Cochera',500]]},
					  {id:25, nombre:'Soltigua Apart', ubicacion:'Mendoza', score:3, dormitorios:[['Triple Económica', 6730], ['Doble Económica', 2464], ['Doble Estándar', 4000]], servicios:[['Almuerzo',230],['Cochera',370],['Lavandería',120]]}
				  ]

	  const hoteles = array.map((hotel)=>Hotel.fromJson(JSON.parse(JSON.stringify(hotel))))
	  return await Promise.resolve<Hotel[]>(hoteles).then(hotels=>{return hotels})
  }

  mapearHoteles(hoteles:Hotel[]): void {
  	this.hoteles = hoteles.map(hotel => Hotel.fromJson(hotel))
  }

  getHoteles(): Hotel[] {
  	return this.hoteles
  }

  getHotelDetalle(): Hotel {
  	return this.hotelDetalle
  }

  setHotelDetalle(hotel_:Hotel): void {
  	this.hotelDetalle = hotel_
  }

  esListado(): boolean {
  	return this.hotelDetalle == null
  }

  setNullHotelDetalle(): void {
  	this.hotelDetalle = null 
  }

// ~~~~~~~~~~~~~~~~~~~~
// ésto lo delegaría solamente en detalleComponent pero el
// desconoce el componente colum-table que modifica el precio final
  resetPrecioTotal(): void {
  	this.precioTotal = 0
  }

  getPrecioTotal(): number {
  	return this.precioTotal * this.getMultiplicador()
  }

  cargarMonto(valor:number): void {
    this.precioTotal = this.precioTotal + valor
  }

  getMultiplicador(): number {
    return this.multiplicador
  }

  setMultiplicador(valor:number): void {
    this.multiplicador = valor
  }

  restarMonto(valor:number): void {
    const diferencia = this.precioTotal - valor
    if(!isNaN(diferencia)){
      this.precioTotal = diferencia
    }
  }

  getTitulo(): string {
    return 'Lista de Hoteles'
  }

  esListaDeHoteles(): boolean {
    return true
  }

  esListaDeReservas(): boolean {
    return false
  }

  cancelarReserva(hotel_:Hotel): void {}
}
