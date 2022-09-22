import {Request, Response} from 'express';
import pool from '../database';

class GamesController{
    public async list (req: Request,resp: Response) {
        const games = await pool.query('SELECT * FROM games');
        resp.json(games);
    }

    public async create (req: Request, resp:Response): Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body]);
        resp.json({text:'Creating a game'});
    }

    public async delete (req: Request, resp: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM games WHERE id = ?',[id]);
        resp.json({message: 'The game was deleted'});
    }

    public async update (req: Request, resp: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE games set ? where id = ?', [req.body, id]);
        resp.json({text:'The was updated'});
    }

    public async getOne (req: Request, resp: Response): Promise<any>{
        const {id} = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?',[id]);
        if (games.length>0) {
            return resp.json(games[0]);
        }
        resp.status(404).json({text: 'The Game doesnt exists'});
    }
}

const gamesController = new GamesController();
export default gamesController;