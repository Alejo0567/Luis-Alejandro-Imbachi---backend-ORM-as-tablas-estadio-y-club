import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ClubJug extends BaseModel {
  @column({ isPrimary: true })
  declare CodJugador: number

  @column({ isPrimary: true })
  declare CodClub: number

  @column()
  declare Liga: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}