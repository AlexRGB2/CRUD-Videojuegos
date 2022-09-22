import { Router } from "express";
import GamesController from "../controllers/gamesControllers";
import gamesController from '../controllers/gamesControllers';

class GamesRoutes{
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
        this.router.get('/', GamesController.list);
        this.router.get('/:id', gamesController.getOne)
        this.router.post('/', gamesController.create);
        this.router.delete('/:id', gamesController.delete);
        this.router.put('/:id', gamesController.update)
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;