import { Router } from "express";
import { indexController } from "../controllers/indexControllers";

class IndexRoutes{
    //Se esta creando la propiedad que guardara el objeto
    //devuelto y se inicializa esta propiedad en la misma
    //linea de codigo.
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //Creando una ruta de mi aplicacion del servidor para la ruta inicial, y
        // se devuelve un mensaje de Hello.
        this.router.get('/', indexController.index);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;