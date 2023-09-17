import { Request, Response } from 'express'
import { BAD_REQUEST,DATABASE_ERROR } from '../../errors/request.errors'
import connection from '../../../sql'
import { MysqlError } from 'mysql'

function insertCustomerHandler(req: Request, res: Response) {
  const {c_name,c_email,c_phone } = req.body
  // Comprobar que todas las propiedades estén presentes en el body
  if (!c_name) return BAD_REQUEST(res,'c_name es requerido')
  else if (!c_email) return BAD_REQUEST(res,'c_email es requerido')
  else if (!c_phone) return BAD_REQUEST(res,'c_phone es requerido')
  // Crear la petición
  connection.query(`INSERT INTO customers (c_id,c_name,c_email,c_phone) VALUES (UUID_TO_BIN(UUID()),'${c_name}','${c_email}',${c_phone})`,(error : MysqlError) => {
    if (error) return DATABASE_ERROR(res,error)
    return res.status(200).send({ successMsg: 'Cliente añadido correctamente :)' })
  })
  // Finalizar ejecución
  return
}

export default insertCustomerHandler