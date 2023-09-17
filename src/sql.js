"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const logerror_1 = __importDefault(require("./helpers/logerror"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Crear y establecer la conexión con la base de datos
const connection = mysql_1.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
connection.connect((err) => {
    if (err)
        (0, logerror_1.default)(err);
    else
        console.log('Conexión establecida correctamente :)');
});
exports.default = connection;
