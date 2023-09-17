import getCustomerByField from "./lib";
import type { Request, Response } from "express";

function getCustomersByNameHandler(req: Request, res: Response){
  const { c_name } = req.params
  // Realizar la petición a la base de datos
  getCustomerByField(req,res,'c_name',c_name)
  // Finalizar la ejecución
  return
}
export default getCustomersByNameHandler