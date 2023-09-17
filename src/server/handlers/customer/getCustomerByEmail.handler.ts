import getCustomerByField from "./lib";
import type { Request, Response } from 'express'

function getCustomerByEmailHandler(req: Request, res: Response){
  const { c_email } = req.params
  // Hacer la petición
  getCustomerByField(req,res,'c_email',c_email)
  // Finalizar la ejecución
  return
}

export default getCustomerByEmailHandler