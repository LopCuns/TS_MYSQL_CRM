import { MysqlError } from "mysql";

export default function logError(err : MysqlError): void {
  console.error(`Ha ocurrido un error al conectarse a la base de datos ${err.code} (${err.name}): ${err.message}`)
}
