import express from 'express'
import { json } from 'body-parser'
import { router as MeRouter } from './routes/me'
import { router as SignInRouter } from './routes/signin'
import { router as SignUpRouter } from './routes/signup'
import { router as SignOutRouter } from './routes/signout'

const port = 3000

const app = express()
app.use(json())

app.use(MeRouter)
app.use(SignInRouter)
app.use(SignUpRouter)
app.use(SignOutRouter)

app.listen(port, () => {
    console.log(`Running Auth Service on :${port}`)
})