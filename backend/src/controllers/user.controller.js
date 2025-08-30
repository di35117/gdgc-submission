import {asyncHandler} from "../utils/asyncHandler.js"
const submitUserData=asyncHandler(async (req,res) => {
    res.status(200).json({
        message: "chutiye"
    })
})
export {submitUserData}