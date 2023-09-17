"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_1 = __importDefault(require("../../../sql"));
const request_errors_1 = require("../../errors/request.errors");
function deleteCustomerByIdHandler(req, res) {
    const { c_id } = req.params;
    // Realizar la petición
    sql_1.default.query(`DELETE FROM customers WHERE c_id = UUID_TO_BIN('${c_id}')`, (error, result, filed) => {
        // Notificar si ocurre un error
        if (error)
            return (0, request_errors_1.DATABASE_ERROR)(res, error);
        // Si no se ha encontrado el cliente, notificarlo
        if (result.affectedRows === 0)
            return (0, request_errors_1.NOT_FOUND)(res, 'El usuario no ha sido encontrado en la base de datos');
        // Enviar un mensaje de éxito
        return res.status(200).send({ successMsg: `Cliente con el UUID ${c_id} ha sido eliminado correctamente` });
    });
    // Finalizar la ejecucion
    return;
}
exports.default = deleteCustomerByIdHandler;
