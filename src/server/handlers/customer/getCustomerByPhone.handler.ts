import getCustomerByField from "./lib";
import type { Request, Response } from "express";

function getCustomerByPhoneHandler(req: Request, res: Response){
  const { c_phone } = req.params
  // Realizar la petición a la base de datos
  getCustomerByField(req,res,'c_phone',c_phone)
  // Finalizar la ejecución
  return
}
export default getCustomerByPhoneHandler