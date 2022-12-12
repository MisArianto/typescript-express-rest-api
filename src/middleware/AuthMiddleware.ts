import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
    let token = false

    if(token){
        next()
    } 

    return res.send("Unauthenticated")
}