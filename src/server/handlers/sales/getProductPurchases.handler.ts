import { MysqlError } from "mysql"
import connection from "../../../sql"
import type { Request, Response } from 'express'
import { ProductSalesData } from "../../../types/sql_schemas"
import { DATABASE_ERROR, NOT_FOUND } from "../../errors/request.errors"

function getProductPurchasesHandler(req: Request, res: Response){
  // Obtener el p_id de los parámetros de la petición
  const { p_id } = req.params
  // Relizar la petición
  connection.query(`SELECT customers.c_id, s_id,c_name,c_email,c_phone FROM 
  (SELECT * FROM sales WHERE p_id = ${p_id}) as sales LEFT JOIN customers ON sales.c_id = customers.c_id;`,
  (error: MysqlError, result: ProductSalesData[]) => {
    // Notificar si se ha productido un error
    if (error) return DATABASE_ERROR(res,error)
    // Si los datos están vacios es porque no se ha comprado el producto
    if (result.length === 0) return NOT_FOUND(res,'Este producto todavía no ha sido comprado por nadie')
    // Enviar los resultados
    return res.status(200).send(result)
  })
  // Finalizar la ejecución
  return
}

export default getProductPurchasesHandler