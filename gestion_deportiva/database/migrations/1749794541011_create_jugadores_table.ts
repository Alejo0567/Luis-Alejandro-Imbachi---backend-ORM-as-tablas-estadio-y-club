import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jugadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodJugador') // PK

      table.string('Club', 100).notNullable()
      table.string('jugador', 100).notNullable()
      table.integer('dorsal').notNullable()

      table.integer('codpais').unsigned().notNullable() // FK1
        .references('CodPais').inTable('paises')

      table.integer('CodDem').unsigned().notNullable() // FK2
        .references('CodDem').inTable('demarcacions')
        
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}