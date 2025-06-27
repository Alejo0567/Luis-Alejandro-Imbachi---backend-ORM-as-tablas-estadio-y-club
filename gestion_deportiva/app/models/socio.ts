import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Socio extends BaseModel {
  @column({ isPrimary: true })
   declare Numsocio: number

  @column()
  declare CodClub: number

  @column()
  declare Codpost: string

  @column()
  declare Nombre: string

  @column()
  declare Apellidos: string

  @column()
  declare Direccion: string

  @column()
  declare Provincia: string

  @column()
  declare FechaAlta: string

  @column()
  declare CuotaActual: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}