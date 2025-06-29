import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Espensor extends BaseModel {
  @column({ isPrimary: true })
  declare CodEspon: number

  @column()
  declare Esponsor: string

  @column()
  declare CodClub: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}