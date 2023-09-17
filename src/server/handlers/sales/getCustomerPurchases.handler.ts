import { MysqlError } from "mysql"
import connection from "../../../sql"
import type { Request, Response } from 'express'
import type { CustomerSalesData } from "../../../types/sql_schemas"
import { DATABASE_ERROR, NOT_FOUND } from "../../errors/request.errors"

function getCustomerPurchasesHandler(req: Request,res : Response){
  // Obtener el c_id de los parámetros de la petición
  const { c_id } = req.params
  // Realizar la petición
  connection.query(
    `SELECT sales.p_id,p_name,p_price, c_id FROM 
    (SELECT * FROM sales WHERE HEX(c_id) = '${c_id}') as sales 
    JOIN products ON sales.p_id = products.p_id;`,(error: MysqlError,result: CustomerSalesData[]) => {
      // Notificar si se ha producido un error
      if (error) return DATABASE_ERROR(res,error)
      // Si no hay resultados es porque el cliente no ha comprado ningún producto
      if (result.length === 0) return NOT_FOUND(res,'El cliente todavía no ha realizado ninguna compra')
      // Devolver los datos
      return res.status(200).send(result)
    })
  // Finalizar la ejecución
  return
}

export default getCustomerPurchasesHandler