import { Hotel } from './hotel'

export class User {
  id: number
  nombre: string
  reservasHechas?: Hotel[]

  constructor() { }

  static fromJson(userJSON:User) : User {
    return Object.assign(new User(), { 
        id: userJSON.id, 
        nombre: userJSON.nombre 
    })
  }
}
