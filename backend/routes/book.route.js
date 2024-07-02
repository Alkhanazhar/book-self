import express from "express"
import { getBook } from "../controllers/book.controllers.js"

const router = express.Router()
router.get("/books", getBook)
export default router