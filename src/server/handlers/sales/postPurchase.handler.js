"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_1 = __importDefault(require("../../../sql"));
const request_errors_1 = require("../../errors/request.errors");
function postPurchaseHandler(req, res) {
    // Obtener los parámetros de la petición
    const { c_id, p_id } = req.params;
    // Realizar la petición
    sql_1.default.query(`INSERT INTO sales (c_id,p_id) VALUES (UUID_TO_BIN('${c_id}'),${p_id})`, (error) => {
        // Notificar si se produce un error
        if (error)
            return (0, request_errors_1.DATABASE_ERROR)(res, error);
        // Enviar una respuesta satisfactoria
        return res.status(200).send({ successMsg: 'Compra realizada con éxito :)' });
    });
    // Finalizar la ejecución
    return;
}
exports.default = postPurchaseHandler;
