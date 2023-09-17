"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("./lib"));
function getCustomerByEmailHandler(req, res) {
    const { c_email } = req.params;
    // Hacer la petición
    (0, lib_1.default)(req, res, 'c_email', c_email);
    // Finalizar la ejecución
    return;
}
exports.default = getCustomerByEmailHandler;
