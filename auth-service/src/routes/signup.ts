import express from 'express'

const router = express.Router()

router.post("/api/users/sign-up", (req, res) => {
    res.send("Hi me")
})

export {
    router
}