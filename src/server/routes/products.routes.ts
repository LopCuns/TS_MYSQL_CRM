import express from 'express'
import insertProductHandler from '../handlers/products/inserProduct.handler'
import getAllProductsHandler from '../handlers/products/getAllProducts.handler'
import deleteProductHandler from '../handlers/products/deleteProduct.handler'

const ProductsRouter = express.Router()
// Añadir un producto
ProductsRouter.post('/insertProduct',insertProductHandler)
// Ver todos los productos
ProductsRouter.get('/allProducts',getAllProductsHandler)
// Eliminar un producto por su nombre
ProductsRouter.delete('/deleteProduct/:p_name',deleteProductHandler)

export default ProductsRouter