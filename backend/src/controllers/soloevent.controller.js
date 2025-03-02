import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { soloEvent } from "../models/soloevents.model.js"

export const soloEvents = asyncHandler(async (req, res) => {
    const {fullName, email, phone, college, soloevent} = req.body

    if (!fullName || !email || !phone || !college || !soloevent) {
        throw new ApiError(400, "All fields are required")
    }

    const event = await soloEvent.create({
        fullName,
        email,
        phone,
        college,
        soloevent
    })

    return res.status(201).json(
        new ApiResponse(200, event, "✅ solo event added Successfully")
    )
})