import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from 'cors';
import connectToDB from './db/db.js';
import userRoutes from './routes/user.routes.js';
const app = express()
connectToDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.use("/user", userRoutes)

export default app