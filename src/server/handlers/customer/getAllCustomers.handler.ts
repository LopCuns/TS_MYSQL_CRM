import { MysqlError } from "mysql";
import connection from "../../../sql";
import type { Request, Response } from "express";
import { CustomerData } from "../../../types/sql_schemas";
import { DATABASE_ERROR } from "../../errors/request.errors";

function getAllCustomersHandler(req: Request, res: Response){
  connection.query('SELECT * FROM customers',(error: MysqlError,results: CustomerData[],fileds)=> {
    if (error) return DATABASE_ERROR(res,error)
    return res.status(200).send(results)
  })
  // Finalizar ejecución
  return
}

export default getAllCustomersHandler