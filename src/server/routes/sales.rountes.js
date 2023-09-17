"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postPurchase_handler_1 = __importDefault(require("../handlers/sales/postPurchase.handler"));
const getCustomerPurchases_handler_1 = __importDefault(require("../handlers/sales/getCustomerPurchases.handler"));
const getProductPurchases_handler_1 = __importDefault(require("../handlers/sales/getProductPurchases.handler"));
const SalesRouter = express_1.default.Router();
// Realizar una compra
SalesRouter.post('/postPurchase/:c_id/:p_id', postPurchase_handler_1.default);
// Obtener todas las compras de un cliente por su id
SalesRouter.get('/customerPurchases/:c_id', getCustomerPurchases_handler_1.default);
// Obtener todas las compras de un producto
SalesRouter.get('/productPurchases/:p_id', getProductPurchases_handler_1.default);
exports.default = SalesRouter;
