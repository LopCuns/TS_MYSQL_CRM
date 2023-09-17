import express from "express"
import { createServer } from 'http'
import CustomersRouter from "./routes/customers.routes.js"
import ProductsRouter from "./routes/products.routes.js"
import SalesRouter from "./routes/sales.rountes.js"
// Crear la aplicación de express
const expressApp = express()

// middlewares

expressApp.use(express.json())

// Routes 
expressApp.use('/customers',CustomersRouter)
expressApp.use('/products',ProductsRouter)
expressApp.use('/sales',SalesRouter)

const server = createServer(expressApp)
// Exportar
export default server