import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'socios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
       table.increments('Numsocio') // PK
      table.integer('CodClub').unsigned().notNullable().references('CodClub').inTable('clubes') // FK1

      table.string('Codpost').notNullable()
      table.string('Nombre').notNullable()
      table.string('Apellidos').notNullable()
      table.string('Direccion').notNullable()
      table.string('Provincia').notNullable()
      table.string('FechaAlta').notNullable()
      table.integer('CuotaActual').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}