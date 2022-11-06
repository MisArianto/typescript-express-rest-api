import express, { Application, Request, Response } from "express"

class App {
    public app: Application

    constructor() {
        this.app = express()
        this.routes()
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("router root dengan TS")
        })
    }
}

const port: number = 5000
const app = new App().app
app.listen(port, () => {
    console.log(`aplikasi running in port: ${port}`)
}) 