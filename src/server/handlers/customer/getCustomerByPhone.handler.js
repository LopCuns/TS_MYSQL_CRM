"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("./lib"));
function getCustomerByPhoneHandler(req, res) {
    const { c_phone } = req.params;
    // Realizar la petición a la base de datos
    (0, lib_1.default)(req, res, 'c_phone', c_phone);
    // Finalizar la ejecución
    return;
}
exports.default = getCustomerByPhoneHandler;
