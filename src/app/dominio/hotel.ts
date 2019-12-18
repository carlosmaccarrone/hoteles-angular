export class Hotel {
  id: number
  nombre: string
  ubicacion: string
  score: number
  dormitorios: []
  servicios: []
  fechaDesde?: Date
  fechaHasta?: Date
  cantidadDeDias?: number
  precioFinal?: number

  static fromJson(hotelJSON:Hotel) : Hotel {
    return Object.assign(new Hotel(), { 
        id: hotelJSON.id, 
        nombre: hotelJSON.nombre,
        ubicacion: hotelJSON.ubicacion,
        score: hotelJSON.score,
        dormitorios: hotelJSON.dormitorios,
        servicios: hotelJSON.servicios,
        fechaDesde: hotelJSON.fechaDesde,
        fechaHasta: hotelJSON.fechaHasta,
        cantidadDeDias: hotelJSON.cantidadDeDias,
        precioFinal: hotelJSON.precioFinal
    })
  }

  getId(): number {
    return this.id
  }

  getNombre(): string {
    return this.nombre
  }

  getUbicacion(): string {
    return this.ubicacion
  }

  getPrecioNocheEconomico(): number {
    const array = this.getDormitorios().map(array=>{return array[1]})
    return Math.min.apply(null, array)
  }

  getScore(): number {
    return this.score
  }

  getDormitorios(): [] {
    return this.dormitorios.sort((a, b) => { return a[1] - b[1] })
  }

  getServicios(): [] {
    return this.servicios
  }

  copy(): Hotel {
    return Object.assign(new Hotel(), JSON.parse(JSON.stringify(this)))
  }

  getFechaDesde(): Date {
    return this.fechaDesde
  }

  getFechaHasta(): Date {
    return this.fechaHasta
  }

  getCantidadDeDias(): number {
    return this.cantidadDeDias
  }

  getPrecioFinal(): number {
    return this.precioFinal
  }

  setFechaDesde(fecha:Date): void {
    this.fechaDesde = fecha
  }

  setFechaHasta(fecha:Date): void {
    this.fechaHasta = fecha
  }

  setCantidadDeDias(valor:number): void {
    this.cantidadDeDias = valor
  }

  setPrecioFinal(valor:number): void {
    this.precioFinal = valor
  }
}
