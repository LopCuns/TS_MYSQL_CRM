import mysql, { MysqlError } from "mysql"
import logError from "./helpers/logerror"
import dotenv from 'dotenv'

dotenv.config()

// Crear y establecer la conexión con la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connection.connect((err: MysqlError) => {
  if (err) logError(err)
  else console.log('Conexión establecida correctamente :)')
})

export default connection