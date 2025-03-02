import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { event } from "../models/events.model.js"

export const events = asyncHandler(async (req, res) => {
    const {fullName, email, phone, college, eventName, teamName, teamMates} = req.body

    if (!fullName || !email || !phone || !college || !eventName || !teamName || !teamMates) {
        throw new ApiError(400, "All fields are required")
    }

    const eventRegister = await event.create({
        fullName,
        email,
        phone,
        college,
        eventName,
        teamName,
        teamMates
    })

    return res.status(201).json(
        new ApiResponse(200, eventRegister, "✅ solo event added Successfully")
    )
})