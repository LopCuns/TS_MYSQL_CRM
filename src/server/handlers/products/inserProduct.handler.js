"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_1 = __importDefault(require("../../../sql"));
const request_errors_1 = require("../../errors/request.errors");
const request_errors_2 = require("../../errors/request.errors");
function insertProductHandler(req, res) {
    const { p_name, p_price } = req.body;
    // Comprobar que se han recibido los datos necesarios
    if (!p_name)
        return (0, request_errors_1.BAD_REQUEST)(res, 'p_name es requerido');
    if (!p_price)
        return (0, request_errors_1.BAD_REQUEST)(res, 'p_price es requerido');
    // Realizar la petición
    sql_1.default.query(`INSERT INTO products (p_name,p_price) VALUES ('${p_name}','${p_price}')`, (error) => {
        // Manejo de errores
        if (error)
            return (0, request_errors_2.DATABASE_ERROR)(res, error);
        // Enviar respuesta satisfatoria
        res.status(200).send({ successMsg: 'Producto añadido correctamente :)' });
    });
    // Finalizar la conexión
    return;
}
exports.default = insertProductHandler;
