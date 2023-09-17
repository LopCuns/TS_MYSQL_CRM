import express from 'express'
import postPurchaseHandler from '../handlers/sales/postPurchase.handler'
import getCustomerPurchasesHandler from '../handlers/sales/getCustomerPurchases.handler'
import getProductPurchasesHandler from '../handlers/sales/getProductPurchases.handler'

const SalesRouter = express.Router()

// Realizar una compra
SalesRouter.post('/postPurchase/:c_id/:p_id',postPurchaseHandler)
// Obtener todas las compras de un cliente por su id
SalesRouter.get('/customerPurchases/:c_id',getCustomerPurchasesHandler)
// Obtener todas las compras de un producto
SalesRouter.get('/productPurchases/:p_id',getProductPurchasesHandler)
export default SalesRouter