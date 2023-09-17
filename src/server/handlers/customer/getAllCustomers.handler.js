"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_1 = __importDefault(require("../../../sql"));
const request_errors_1 = require("../../errors/request.errors");
function getAllCustomersHandler(req, res) {
    sql_1.default.query('SELECT * FROM customers', (error, results, fileds) => {
        if (error)
            return (0, request_errors_1.DATABASE_ERROR)(res, error);
        return res.status(200).send(results);
    });
    // Finalizar ejecución
    return;
}
exports.default = getAllCustomersHandler;
