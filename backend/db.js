import mongoose from "mongoose"

export const db = async () => {
    await mongoose.connect(process.env.DB_URL)
    console.log("mongodb connect success")
}