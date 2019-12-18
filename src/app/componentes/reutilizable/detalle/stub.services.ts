import { Hotel } from '../../../dominio/hotel'

abstract class StubServices {
  
  getHotelDetalle() {
    const objeto = {id:9, nombre:'Park Hyatt', ubicacion:'Mendoza', precioNocheEconomico:8252, score:5, dormitorios:[['Triple Económica', 12000], ['Doble Económica', 8252], ['Doble Estándar', 10000], ['Penthouse', 15000]], servicios:[['Almuerzo',500],['Cena',500],['Cochera',700],['Lavandería',300]]}
    let parseado = JSON.parse(JSON.stringify(objeto))
    const hotel = Hotel.fromJson(parseado)  
    return hotel		
  }

  abstract getElementos()
  abstract getCheckbox(): boolean
  abstract getRadiobox(): boolean
  abstract getTitulo(): string
  abstract getConOtroMarco(): boolean
}

export class StubDormitorios extends StubServices {

  getElementos() {
  	return [['Triple Económica', 12000], ['Doble Económica', 8252], ['Doble Estándar', 10000], ['Penthouse', 15000]]
  }

  getCheckbox(): boolean {
  	return false
  }

  getRadiobox(): boolean {
    return true
  } 

  getTitulo(): string {
    return 'Habitaciones'
  }

  getConOtroMarco(): boolean {
    return false
  }
  
  getButtonError(): boolean {
    return false
  }
}

export class StubAdicionales extends StubServices {

  getElementos() {
  	return [['Almuerzo',500],['Cena',500],['Cochera',700],['Lavandería',300]]
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

  getConOtroMarco(): boolean {
    return false
  }  
}

