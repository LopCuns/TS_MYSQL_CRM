"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_1 = __importDefault(require("../../../sql"));
const request_errors_1 = require("../../errors/request.errors");
function deleteProductHandler(req, res) {
    // Recuperar el nombre del producto de los parámetros
    const { p_name } = req.params;
    // Enviar la petición a la base de datos
    sql_1.default.query(`DELETE FROM products WHERE p_name = '${p_name}'`, (error, result) => {
        // Notificar si se produce un error
        if (error)
            return (0, request_errors_1.DATABASE_ERROR)(res, error);
        // Si no se ha encontrado el producto, notificarlo
        if (result.affectedRows === 0)
            return (0, request_errors_1.NOT_FOUND)(res, `El producto ${p_name} no se ha encontrado en la base de datos`);
        // Enviar una respuesta satisfactoria
        return res.status(200).send({ successMsg: `Producto ${p_name} ha sido eliminado correctamente :)` });
    });
    // Finalizar la ejecución
}
exports.default = deleteProductHandler;
