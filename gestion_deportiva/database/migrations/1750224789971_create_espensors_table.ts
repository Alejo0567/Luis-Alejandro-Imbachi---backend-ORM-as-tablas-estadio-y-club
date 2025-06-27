import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'espensors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodEspon') // PK
      table.string('Esponsor').notNullable()

      table.integer('CodClub').unsigned().notNullable().references('CodClub').inTable('clubes') // FK1

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}