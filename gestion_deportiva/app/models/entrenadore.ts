import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Entrenadore extends BaseModel {
  @column({ isPrimary: true })
  declare CodEntren: number

  @column()
  declare Entrenador: string

  @column.date()
  declare FechaNcmto: DateTime

  @column()
  declare Poblacion: string

  @column()
  declare Provincia: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}