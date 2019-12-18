import { Component, OnInit } from '@angular/core';

import { HotelService } from '../../services/hotel.service'
import { Hotel } from '../../dominio/hotel'
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from '../../services/user.service'
import { IListadoService } from '../../services/listado.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  error: Error
  getService: () => IListadoService
  isLoaded: () => boolean
  reutilizoRuta: () => boolean

  constructor(private hotelService: HotelService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { 
    this.isLoaded = () => { return false }
    // reutilizoRuta debe ser sobreescrita
    // cada vez que renderizo éste componente
    this.reutilizoRuta = () => { return false }
  }

  async ngOnInit() {
    this.route.params.subscribe( async (params: any) => {
      if ( params.tipo == 'hoteles' ) {
        try {
          this.setHotelService()
          const hoteles = await this.buscarHoteles()
          this.mapearHoteles(hoteles)
          this.setNullHotelDetalle()
          this.setLoadedTrue()
          this.setReutilizarFalse()
        } catch ( err ) {
          this.error = err
        }
      } else if ( params.tipo == 'reservas' ) {
        this.setUserService()
        this.setLoadedTrue()
        this.setReutilizarFalse()
      } else if ( params.tipo == 'detalle' ) {
        this.setReutilizarTrue()
      }
    })
  }

  getHoteles(): Hotel[] {
  	return this.getService().getHoteles()
  }

  getTitulo(): string {
    return this.getService().getTitulo()
  }

  buscarHoteles(): Promise<Hotel[]> {
    return this.getService().buscarHoteles()
  }

  mapearHoteles(hoteles:Hotel[]): void {
    this.getService().mapearHoteles(hoteles)
  }

  setNullHotelDetalle(): void {
    this.getService().setNullHotelDetalle()
  }

  setReutilizarFalse(): void {
    this.reutilizoRuta = () => { return false }  
  }

  setReutilizarTrue(): void {
    this.reutilizoRuta = () => { return true }
  }

  setLoadedTrue(): void {
    this.isLoaded = () => { return true }
  }

  setHotelService(): void {
    this.getService = () => { return this.hotelService }
  }

  setUserService(): void {
    this.getService = () => { return this.userService }
  }
}
