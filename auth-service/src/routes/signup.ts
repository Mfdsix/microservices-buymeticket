import express, { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

const router = express.Router()

router.post("/api/users/sign-up", [
    body('email')
    .isEmail()
    .withMessage('Invalid Email'),
    body('password')
    .trim()
    .isLength({
        min: 4,
        max: 20
    })
    .withMessage('Invalid Password')
], (req: Request, res: Response) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).send(errors.array())
    }

    const { email, password } = req.body
    console.log("creating user")
    res.send({})
})

export {
    router
}