import express from 'express'

const router = express.Router()

router.get("/api/users/sign-in", (req, res) => {
    res.send("Hi sign in")
})

export {
    router
}