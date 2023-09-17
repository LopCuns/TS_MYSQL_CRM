"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_errors_1 = require("../../errors/request.errors");
const sql_1 = __importDefault(require("../../../sql"));
function insertCustomerHandler(req, res) {
    const { c_name, c_email, c_phone } = req.body;
    // Comprobar que todas las propiedades estén presentes en el body
    if (!c_name)
        return (0, request_errors_1.BAD_REQUEST)(res, 'c_name es requerido');
    else if (!c_email)
        return (0, request_errors_1.BAD_REQUEST)(res, 'c_email es requerido');
    else if (!c_phone)
        return (0, request_errors_1.BAD_REQUEST)(res, 'c_phone es requerido');
    // Crear la petición
    sql_1.default.query(`INSERT INTO customers (c_id,c_name,c_email,c_phone) VALUES (UUID_TO_BIN(UUID()),'${c_name}','${c_email}',${c_phone})`, (error) => {
        if (error)
            return (0, request_errors_1.DATABASE_ERROR)(res, error);
        return res.status(200).send({ successMsg: 'Cliente añadido correctamente :)' });
    });
    // Finalizar ejecución
    return;
}
exports.default = insertCustomerHandler;
