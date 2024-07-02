import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { db } from "./db.js";
import bookRoutes from "./routes/book.route.js"
import userRoutes from "./routes/user.route.js"
dotenv.config()
const app = express();
app.get("/", (req, res) => {
    res.send("Welcome to the world")
})
app.use(cors())
app.use(express.json())

// mongo database
db()
app.use(bookRoutes)
app.use(userRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("listening on " + PORT)
})