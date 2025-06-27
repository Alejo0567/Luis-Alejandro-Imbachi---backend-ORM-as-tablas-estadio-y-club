import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Equipacion extends BaseModel {
  @column({ isPrimary: true })
  declare CodEquip: number  

  @column()
  declare Encasa: boolean   

  @column()
  declare CodClub: number 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}