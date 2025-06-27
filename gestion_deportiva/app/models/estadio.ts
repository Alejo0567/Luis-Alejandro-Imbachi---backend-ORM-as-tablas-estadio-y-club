import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Estadio extends BaseModel {
  @column({ isPrimary: true, columnName: 'CodEstadio' })
  declare CodEstadio: number

  @column({columnName: 'Estadio'})
  declare Estadio: string

  @column({columnName: 'Direccion'})
  declare Direccion: string

  @column({columnName: 'CodPostal'})
  declare CodPostal: string

  @column({columnName: 'Poblacion'})
  declare Poblacion: string

  @column({columnName: 'Provincia'})
  declare Provincia: string

  @column({columnName: 'Capacidad'})
  declare Capacidad: number

  @column({columnName: 'Sentados'})
  declare Sentados: number

  @column({columnName: 'Inauguracion'})
  declare Inauguracion: string

  @column({columnName: 'Dimensiones'})
  declare Dimensiones: string

  @column({columnName: 'CodClub'})
  declare CodClub: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}