"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_errors_js_1 = require("../../errors/request.errors.js");
const sql_js_1 = __importDefault(require("../../../sql.js"));
function getCustomerByIdHandler(req, res) {
    const { c_id } = req.params;
    // Hacer la petición a la base de datos
    sql_js_1.default.query(`SELECT * FROM customers WHERE c_id = UUID_TO_BIN('${c_id}')`, (error, results, fields) => {
        if (error)
            return (0, request_errors_js_1.DATABASE_ERROR)(res, error);
        // Obtener los datos del cliente
        const customerData = results[0];
        // Si no obtenemos datos del usuario
        if (!customerData)
            return (0, request_errors_js_1.NOT_FOUND)(res, `no se han encontrado los datos del usuario con c_id ${c_id}`);
        // Devolver los datos del cliente
        return res.send(results[0]);
    });
    // Finalizar ejecución
    return;
}
exports.default = getCustomerByIdHandler;
