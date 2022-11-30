import express from 'express'

const router = express.Router()

router.get("/api/users/sign-up", (req, res) => {
    res.send("Hi me")
})

export {
    router
}