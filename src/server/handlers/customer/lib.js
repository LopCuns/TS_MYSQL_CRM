"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_1 = __importDefault(require("../../../sql"));
const request_errors_1 = require("../../errors/request.errors");
function getCustomerByField(req, res, fieldname, fieldvalue) {
    sql_1.default.query(`SELECT * FROM customers WHERE ${fieldname} = '${fieldvalue}'`, (error, result, fields) => {
        // Si se ha producido un error, notificarlo
        if (error)
            return (0, request_errors_1.DATABASE_ERROR)(res, error);
        // Obtener los datos del cliente
        const customersData = result;
        // Si no se ha devuelto nada, enviar un error not found
        if (!customersData)
            return (0, request_errors_1.NOT_FOUND)(res, `Cliente no encontrado`);
        // De lo contrario, devolver los datos del cliente
        res.status(200).send(customersData);
    });
    // Finalizar ejecución
    return;
}
exports.default = getCustomerByField;
