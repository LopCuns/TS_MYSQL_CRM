"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inserProduct_handler_1 = __importDefault(require("../handlers/products/inserProduct.handler"));
const getAllProducts_handler_1 = __importDefault(require("../handlers/products/getAllProducts.handler"));
const deleteProduct_handler_1 = __importDefault(require("../handlers/products/deleteProduct.handler"));
const ProductsRouter = express_1.default.Router();
// Añadir un producto
ProductsRouter.post('/insertProduct', inserProduct_handler_1.default);
// Ver todos los productos
ProductsRouter.get('/allProducts', getAllProducts_handler_1.default);
// Eliminar un producto por su nombre
ProductsRouter.delete('/deleteProduct/:p_name', deleteProduct_handler_1.default);
exports.default = ProductsRouter;
