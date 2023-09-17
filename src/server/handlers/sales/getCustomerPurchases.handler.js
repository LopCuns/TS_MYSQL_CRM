"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_1 = __importDefault(require("../../../sql"));
const request_errors_1 = require("../../errors/request.errors");
function getCustomerPurchasesHandler(req, res) {
    // Obtener el c_id de los parámetros de la petición
    const { c_id } = req.params;
    // Realizar la petición
    sql_1.default.query(`SELECT sales.p_id,p_name,p_price, c_id FROM 
    (SELECT * FROM sales WHERE HEX(c_id) = '${c_id}') as sales 
    JOIN products ON sales.p_id = products.p_id;`, (error, result) => {
        // Notificar si se ha producido un error
        if (error)
            return (0, request_errors_1.DATABASE_ERROR)(res, error);
        // Si no hay resultados es porque el cliente no ha comprado ningún producto
        if (result.length === 0)
            return (0, request_errors_1.NOT_FOUND)(res, 'El cliente todavía no ha realizado ninguna compra');
        // Devolver los datos
        return res.status(200).send(result);
    });
    // Finalizar la ejecución
    return;
}
exports.default = getCustomerPurchasesHandler;
