import { MysqlError } from "mysql"
import connection from "../../../sql"
import type { Request, Response } from 'express'
import type { ProductData } from "../../../types/sql_schemas"
import { DATABASE_ERROR } from "../../errors/request.errors"

function getAllProductsHandler(req: Request,res: Response){
  // Petición
  connection.query('SELECT * FROM products',(error: MysqlError,result : ProductData[]) =>{
    if (error) return DATABASE_ERROR(res,error)
    return res.status(200).send(result)
  } )
  // Finalizar ejecución
  return
}
export default getAllProductsHandler