import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'palmares'

  async up() {
    this.schema.createTable(this.tableName, (table) => {

      table.integer('CodClub').unsigned().notNullable()
      table.integer('CodTrofeo').unsigned().notNullable()

      table.primary(['CodClub', 'CodTrofeo']) // PK compuesta

      table.foreign('CodClub').references('CodClub').inTable('clubes')
      table.foreign('CodTrofeo').references('CodTrofeo').inTable('campeonatoes')

      table.integer('Año').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}