import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Jugadore extends BaseModel {
  @column({ isPrimary: true })
   declare CodJugador: number

  @column()
  declare Club: string

  @column()
  declare jugador: string

  @column()
  declare dorsal: number

  @column()
  declare codpais: number

  @column()
  declare CodDem: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}