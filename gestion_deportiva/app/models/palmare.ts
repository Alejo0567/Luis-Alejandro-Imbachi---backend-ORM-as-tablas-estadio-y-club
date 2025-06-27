import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Palmare extends BaseModel {
  @column({ isPrimary: true })
  declare CodClub: number

  @column({ isPrimary: true })
  declare CodTrofeo: number

  @column()
  declare Año: number


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}