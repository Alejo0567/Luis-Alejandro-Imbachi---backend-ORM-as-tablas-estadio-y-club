import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'entrenadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      
      table.increments('CodEntren') 
      table.string('Entrenador').notNullable()
      table.date('FechaNcmto').notNullable()
      table.string('Poblacion').notNullable()
      table.string('Provincia').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}