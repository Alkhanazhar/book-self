export const asyncHandler = (fn) => async (req, res) => {
    try {
        fn(req, res)
    } catch (error) {
        console.log(error.message)
        console.log(error)
    }
}