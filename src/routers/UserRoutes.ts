import { Router} from "express"
import IRoute from "./RouteInterface"

// controlles
import UserController from "../controllers/UserController"

class UserRoutes implements IRoute {
    public router: Router

    constructor() {
        this.router = Router()
        this.routes()
    }

    public routes(): void {
        this.router.get("/", UserController.index)

        this.router.post("/", UserController.create)
    }
}

export default new UserRoutes().router