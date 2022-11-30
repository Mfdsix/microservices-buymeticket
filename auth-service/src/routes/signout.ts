import express from 'express'

const router = express.Router()

router.get("/api/users/sign-out", (req, res) => {
    res.send("Hi sign out")
})

export {
    router
}