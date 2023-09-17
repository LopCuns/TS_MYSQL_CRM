"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_ERROR = exports.BAD_REQUEST = exports.NOT_FOUND = void 0;
const NOT_FOUND = (res, msg = 'recurso no encontrado') => res.status(404).send({ errors: `Error 404 (not found): ${msg}` });
exports.NOT_FOUND = NOT_FOUND;
const BAD_REQUEST = (res, msg = ' petición mala') => res.status(400).send({ errors: `Error 400 (bad request): ${msg}` });
exports.BAD_REQUEST = BAD_REQUEST;
const DATABASE_ERROR = (res, error) => (0, exports.BAD_REQUEST)(res, `Error en la base de datos ${error.code} : ${error.message}`);
exports.DATABASE_ERROR = DATABASE_ERROR;
