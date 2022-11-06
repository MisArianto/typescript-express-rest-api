import { Router, Request, Response } from "express"
import IRoute from "./RouteInterface"

class UserRoutes implements IRoute {
    public router: Router

    constructor() {
        this.router = Router()
        this.routes()
    }

    public routes(): void {
        this.router.get("/", (req: Request, res: Response) => {
            res.send("route root user")
        })

        this.router.post("/users", (req: Request, res: Response) => {
            res.send(req.body)
        })
    }
}

export default new UserRoutes().router