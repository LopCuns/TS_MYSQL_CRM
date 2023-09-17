"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const customers_routes_js_1 = __importDefault(require("./routes/customers.routes.js"));
const products_routes_js_1 = __importDefault(require("./routes/products.routes.js"));
const sales_rountes_js_1 = __importDefault(require("./routes/sales.rountes.js"));
// Crear la aplicación de express
const expressApp = (0, express_1.default)();
// middlewares
expressApp.use(express_1.default.json());
// Routes 
expressApp.use('/customers', customers_routes_js_1.default);
expressApp.use('/products', products_routes_js_1.default);
expressApp.use('/sales', sales_rountes_js_1.default);
const server = (0, http_1.createServer)(expressApp);
// Exportar
exports.default = server;
