"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("./lib"));
function getCustomersByNameHandler(req, res) {
    const { c_name } = req.params;
    // Realizar la petición a la base de datos
    (0, lib_1.default)(req, res, 'c_name', c_name);
    // Finalizar la ejecución
    return;
}
exports.default = getCustomersByNameHandler;
