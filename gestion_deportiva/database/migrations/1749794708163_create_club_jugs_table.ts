import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'club_jugs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('CodJugador').unsigned().notNullable()
      table.integer('CodClub').unsigned().notNullable()

      table.string('Liga', 100).notNullable()

      table.primary(['CodJugador', 'CodClub']) // PK compuesta

      table.foreign('CodJugador').references('CodJugador').inTable('jugadores')
      table.foreign('CodClub').references('CodClub').inTable('clubes')


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}