import { CustomerData } from "../../../types/sql_schemas.js";
import { Request,Response } from "express";
import { DATABASE_ERROR, NOT_FOUND } from "../../errors/request.errors.js";
import connection from "../../../sql.js";
import { MysqlError } from "mysql";

function getCustomerByIdHandler(req : Request,res: Response){
  const { c_id } = req.params
  // Hacer la petición a la base de datos
  connection.query(`SELECT * FROM customers WHERE c_id = UUID_TO_BIN('${c_id}')`,(error : MysqlError,results : CustomerData[],fields) => {
    if (error) return DATABASE_ERROR(res,error)
    // Obtener los datos del cliente
    const customerData = results[0]
    // Si no obtenemos datos del usuario
    if (!customerData) return NOT_FOUND(res,`no se han encontrado los datos del usuario con c_id ${c_id}`)
    // Devolver los datos del cliente
    return res.send(results[0])
  })
  // Finalizar ejecución
  return
}


export default getCustomerByIdHandler