"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class IndexRoutes {
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
        this.router.get('/', indexControllers_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
