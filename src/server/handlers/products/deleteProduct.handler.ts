import { MysqlError, OkPacket } from "mysql"
import connection from "../../../sql"
import type { Request,Response } from 'express'
import { DATABASE_ERROR, NOT_FOUND } from "../../errors/request.errors"

function deleteProductHandler(req: Request, res: Response){
  // Recuperar el nombre del producto de los parámetros
  const { p_name } = req.params
  // Enviar la petición a la base de datos
  connection.query(`DELETE FROM products WHERE p_name = '${p_name}'`,(error: MysqlError,result : OkPacket) => {
    // Notificar si se produce un error
    if (error) return DATABASE_ERROR(res,error)
    // Si no se ha encontrado el producto, notificarlo
    if (result.affectedRows === 0) return NOT_FOUND(res,`El producto ${p_name} no se ha encontrado en la base de datos`)
    // Enviar una respuesta satisfactoria
    return res.status(200).send({ successMsg: `Producto ${p_name} ha sido eliminado correctamente :)` })
  })
  // Finalizar la ejecución
}

export default deleteProductHandler
