"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = __importDefault(require("../controllers/gamesControllers"));
const gamesControllers_2 = __importDefault(require("../controllers/gamesControllers"));
class GamesRoutes {
    constructor() {
        //Se esta creando la propiedad que guardara el objeto
        //devuelto y se inicializa esta propiedad en la misma
        //linea de codigo.
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Creando una ruta de mi aplicacion del servidor para la ruta inicial, y
        // se devuelve un mensaje de Hello.
        this.router.get('/', gamesControllers_1.default.list);
        this.router.get('/:id', gamesControllers_2.default.getOne);
        this.router.post('/', gamesControllers_2.default.create);
        this.router.delete('/:id', gamesControllers_2.default.delete);
        this.router.put('/:id', gamesControllers_2.default.update);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
