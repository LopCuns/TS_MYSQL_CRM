"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logError(err) {
    console.error(`Ha ocurrido un error al conectarse a la base de datos ${err.code} (${err.name}): ${err.message}`);
}
exports.default = logError;
