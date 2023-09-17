"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_1 = __importDefault(require("../../../sql"));
const request_errors_1 = require("../../errors/request.errors");
function getProductPurchasesHandler(req, res) {
    // Obtener el p_id de los parámetros de la petición
    const { p_id } = req.params;
    // Relizar la petición
    sql_1.default.query(`SELECT customers.c_id, s_id,c_name,c_email,c_phone FROM 
  (SELECT * FROM sales WHERE p_id = ${p_id}) as sales LEFT JOIN customers ON sales.c_id = customers.c_id;`, (error, result) => {
        // Notificar si se ha productido un error
        if (error)
            return (0, request_errors_1.DATABASE_ERROR)(res, error);
        // Si los datos están vacios es porque no se ha comprado el producto
        if (result.length === 0)
            return (0, request_errors_1.NOT_FOUND)(res, 'Este producto todavía no ha sido comprado por nadie');
        // Enviar los resultados
        return res.status(200).send(result);
    });
    // Finalizar la ejecución
    return;
}
exports.default = getProductPurchasesHandler;
