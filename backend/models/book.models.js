import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: String,
    title: String,
    image: String,
    category: String,
    price: Number,

})

export const Book = mongoose.model("Book", bookSchema);