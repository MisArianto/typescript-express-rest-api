import { Request, Response } from "express"
import IController from "./ControllerInterface"

let data: any[] = [
    { id: 1, nama: "Mis Arianto" },
    { id: 2, nama: "Nurmala Sari" },
    { id: 3, nama: "Hadid Syurahbil" },
    { id: 4, nama: "Agus Riana" },
    { id: 5, nama: "Ahmad" },
]

class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.send(data)
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