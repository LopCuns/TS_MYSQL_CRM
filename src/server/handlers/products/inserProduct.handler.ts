import connection from "../../../sql"
import type { Request, Response } from 'express'
import { BAD_REQUEST } from "../../errors/request.errors"
import { MysqlError } from "mysql"
import { DATABASE_ERROR } from "../../errors/request.errors"

function insertProductHandler(req : Request, res: Response){
  const { p_name,p_price } = req.body
  // Comprobar que se han recibido los datos necesarios
  if (!p_name) return BAD_REQUEST(res,'p_name es requerido')
  if (!p_price) return BAD_REQUEST(res,'p_price es requerido')
  // Realizar la petición
  connection.query(`INSERT INTO products (p_name,p_price) VALUES ('${p_name}','${p_price}')`,(error: MysqlError) => {
    // Manejo de errores
    if (error) return DATABASE_ERROR(res,error)
    // Enviar respuesta satisfatoria
    res.status(200).send({ successMsg: 'Producto añadido correctamente :)' })
  })
  // Finalizar la conexión
  return
}

export default insertProductHandler