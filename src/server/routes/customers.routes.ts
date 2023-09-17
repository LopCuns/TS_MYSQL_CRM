import express from 'express'
import getCustomerByIdHandler from '../handlers/customer/getCustomerById.handler.js'
import insertCustomerHandler from '../handlers/customer/insertCustomer.handler.js'
import getCustomerByEmailHandler from '../handlers/customer/getCustomerByEmail.handler.js'
import getCustomerByPhoneHandler from '../handlers/customer/getCustomerByPhone.handler.js'
import getCustomersByNameHandler from '../handlers/customer/getCustomersByName.handler.js'
import getAllCustomersHandler from '../handlers/customer/getAllCustomers.handler.js'
import deleteCustomerByIdHandler from '../handlers/customer/deleteCustomerById.handler.js'
const CustomersRouter = express.Router()

// Crear las peticiones que pueden hacerse a la base de datos

// Obtener cliente por id
CustomersRouter.get('/customerById/:c_id',getCustomerByIdHandler)
// Obtener cliente por email
CustomersRouter.get('/customerByEmail/:c_email',getCustomerByEmailHandler)
// Obtener cliente por teléfono
CustomersRouter.get('/customerByPhone/:c_phone',getCustomerByPhoneHandler)
// Obtener clientes por su nombre
CustomersRouter.get('/customersByName/:c_name',getCustomersByNameHandler)
// Obtener todos los clientes
CustomersRouter.get('/allCustomers',getAllCustomersHandler)
// Añadir un cliente
CustomersRouter.post('/insertCustomer',insertCustomerHandler)
// Eliminar un cliente por id
CustomersRouter.delete('/deleteById/:c_id',deleteCustomerByIdHandler)
export default CustomersRouter