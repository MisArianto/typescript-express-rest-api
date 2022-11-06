import { Request, Response } from "express"
import IController from "./ControllerInterface"

class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.send("ini adalah endpoint index")
    }

    create(req: Request, res: Response): Response {
        return res.send(req.body)
    }

    show(req: Request, res: Response): Response {
        return res.send("ini adalah endpoint show")
    }

    update(req: Request, res: Response): Response {
        return res.send("ini adalah endpoint update")
    }

    delete(req: Request, res: Response): Response {
        return res.send("ini adalah endpoint delete")
    }
}

export default new UserController()