import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'entren_clubes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('codClub').unsigned().notNullable()
      table.integer('CodEntren').unsigned().notNullable()

      table.primary(['codClub', 'CodEntren']) // PK compuesta

      table.foreign('codClub').references('CodClub').inTable('clubes')
      table.foreign('CodEntren').references('CodEntren').inTable('entrenadores')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}