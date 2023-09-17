import { MysqlError, OkPacket } from "mysql"
import connection from "../../../sql"
import type { Request, Response } from "express"
import { DATABASE_ERROR, NOT_FOUND } from "../../errors/request.errors"
function deleteCustomerByIdHandler(req: Request, res: Response){
  const { c_id } = req.params
  // Realizar la petición
  connection.query(`DELETE FROM customers WHERE c_id = UUID_TO_BIN('${c_id}')`,(error: MysqlError,result : OkPacket,filed)=>{
    // Notificar si ocurre un error
    if (error) return DATABASE_ERROR(res,error)
    // Si no se ha encontrado el cliente, notificarlo
    if (result.affectedRows === 0) return NOT_FOUND(res,'El usuario no ha sido encontrado en la base de datos')
    // Enviar un mensaje de éxito
    return res.status(200).send({ successMsg: `Cliente con el UUID ${c_id} ha sido eliminado correctamente` })
  })
  // Finalizar la ejecucion
  return
}
export default deleteCustomerByIdHandler