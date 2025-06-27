import { Client } from 'pg'

const GestionDB = new Client({
    port: 5432,
    host:'localhost',
    password: 'root',
    user: 'postgres',
    database: 'GestionDB'
})
GestionDB.connect()
export default GestionDB