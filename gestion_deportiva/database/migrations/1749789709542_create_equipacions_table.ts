import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'equipacions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodEquip') // PK
      table.boolean('Encasa').notNullable() // campo normal

      table.integer('CodClub').unsigned().notNullable() // FK1
      .references('CodClub').inTable('clubes').onDelete('CASCADE') // referencia a la tabla clubes


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}