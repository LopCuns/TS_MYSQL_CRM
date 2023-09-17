import connection from "../../../sql"
import type { Request, Response } from 'express'
import { BAD_REQUEST, DATABASE_ERROR } from "../../errors/request.errors"
import { MysqlError } from "mysql"

function postPurchaseHandler(req: Request,res: Response){
  // Obtener los parámetros de la petición
  const { c_id,p_id } = req.params
  // Realizar la petición
  connection.query(`INSERT INTO sales (c_id,p_id) VALUES (UUID_TO_BIN('${c_id}'),${p_id})`,(error: MysqlError) => {
    // Notificar si se produce un error
    if (error) return DATABASE_ERROR(res,error)
    // Enviar una respuesta satisfactoria
    return res.status(200).send({ successMsg: 'Compra realizada con éxito :)' })
  })
  // Finalizar la ejecución
  return
}

export default postPurchaseHandler