import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asynchandler.js";

export const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(401).json({
            success: false,
            message: "All field is required",
            error: true

        })
    }
    const isExist = await User.findOne({ email: email })
    if (isExist) {
        return res.status(401).json({
            success: false,
            message: "User already exists",
            error: true
        })
    }

    const user = await User.create({ username, email, password })
    return res.status(200).json({ success: true, message: "User created successfully", error: false })


})


export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).json({
            success: false,
            message: "All field is required",
            error: true

        })
    }
    const isExist = await User.findOne({ email: email })
    if (!isExist) {
        return res.status(401).json({
            success: false,
            message: "User not exist",
            error: true
        })
    }
    const passwordMatched = await isExist.isPasswordCorrect(password)
    if (!passwordMatched) {
        return res.status(405).json({
            success: false,
            message: "password not matched",
            error: true
        })
    }
    return res.status(200).json({ success: true, message: "login successfully", error: false, data: { email: isExist.email, _id: isExist._id } })


})