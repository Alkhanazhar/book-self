import { Book } from "../models/book.models.js";
import { asyncHandler } from "../utils/asynchandler.js";

export const getBook = asyncHandler(async (req, res) => {
    const book = await Book.find()
    res.status(200).json({ data: book, message: "success", status: true })
})