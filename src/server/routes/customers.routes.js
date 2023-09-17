"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getCustomerById_handler_js_1 = __importDefault(require("../handlers/customer/getCustomerById.handler.js"));
const insertCustomer_handler_js_1 = __importDefault(require("../handlers/customer/insertCustomer.handler.js"));
const getCustomerByEmail_handler_js_1 = __importDefault(require("../handlers/customer/getCustomerByEmail.handler.js"));
const getCustomerByPhone_handler_js_1 = __importDefault(require("../handlers/customer/getCustomerByPhone.handler.js"));
const getCustomersByName_handler_js_1 = __importDefault(require("../handlers/customer/getCustomersByName.handler.js"));
const getAllCustomers_handler_js_1 = __importDefault(require("../handlers/customer/getAllCustomers.handler.js"));
const deleteCustomerById_handler_js_1 = __importDefault(require("../handlers/customer/deleteCustomerById.handler.js"));
const CustomersRouter = express_1.default.Router();
// Crear las peticiones que pueden hacerse a la base de datos
// Obtener cliente por id
CustomersRouter.get('/customerById/:c_id', getCustomerById_handler_js_1.default);
// Obtener cliente por email
CustomersRouter.get('/customerByEmail/:c_email', getCustomerByEmail_handler_js_1.default);
// Obtener cliente por teléfono
CustomersRouter.get('/customerByPhone/:c_phone', getCustomerByPhone_handler_js_1.default);
// Obtener clientes por su nombre
CustomersRouter.get('/customersByName/:c_name', getCustomersByName_handler_js_1.default);
// Obtener todos los clientes
CustomersRouter.get('/allCustomers', getAllCustomers_handler_js_1.default);
// Añadir un cliente
CustomersRouter.post('/insertCustomer', insertCustomer_handler_js_1.default);
// Eliminar un cliente por id
CustomersRouter.delete('/deleteById/:c_id', deleteCustomerById_handler_js_1.default);
exports.default = CustomersRouter;
