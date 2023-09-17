import { Response } from "express"
import { responseError } from "../../types/errors"
import { MysqlError } from "mysql"

export const NOT_FOUND = (res : Response,msg : string = 'recurso no encontrado') : Response<responseError> => res.status(404).send({ errors : `Error 404 (not found): ${msg}` })

export const BAD_REQUEST = (res : Response,msg = ' petición mala') : Response<responseError> => res.status(400).send({ errors : `Error 400 (bad request): ${msg}` })

export const DATABASE_ERROR = (res: Response,error: MysqlError) => BAD_REQUEST(res,`Error en la base de datos ${error.code} : ${error.message}`)