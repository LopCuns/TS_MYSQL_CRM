import { MysqlError } from "mysql";
import connection from "../../../sql";
import type { Request, Response } from 'express'
import type { CustomerData } from "../../../types/sql_schemas";
import { DATABASE_ERROR, NOT_FOUND } from "../../errors/request.errors";

function getCustomerByField(req : Request,res : Response,fieldname : string,fieldvalue : string){
  connection.query(`SELECT * FROM customers WHERE ${fieldname} = '${fieldvalue}'`,(error : MysqlError, result : CustomerData[],fields) => {
    // Si se ha producido un error, notificarlo
    if (error) return DATABASE_ERROR(res,error)
    // Obtener los datos del cliente
    const customersData = result
    // Si no se ha devuelto nada, enviar un error not found
    if (!customersData) return NOT_FOUND(res,`Cliente no encontrado`)
    // De lo contrario, devolver los datos del cliente
    res.status(200).send(customersData)
  })
  // Finalizar ejecución
  return
}

export default getCustomerByField