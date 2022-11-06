import { Request, Response } from "express"
import IController from "./ControllerInterface"

let data: any[] = [
    { id: 1, name: "Mis Arianto" },
    { id: 2, name: "Nurmala Sari" },
    { id: 3, name: "Hadid Syurahbil" },
    { id: 4, name: "Agus Riana" },
    { id: 5, name: "Ahmad" },
]

class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.send(data)
    }

    create(req: Request, res: Response): Response {
        // destructing object 
        const {id, name} = req.body

        data.push({
            id,
            name
        })

        return res.send({
            message: "successfully insert data!",
            data
        })
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