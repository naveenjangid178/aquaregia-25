import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import {groupEvent} from "../models/groupevents.model.js"

export const groupEvents = asyncHandler(async (req, res) => {
    const {name, email, phone, college, groupevent, teamname, teammates} = req. body

    if (!name || !email || !phone || !college || !groupevent || !teamname || !teammates) {
        throw new ApiError(400, "All fields are required")
    }

    const event = await groupEvent.create({
        name,
        email,
        phone,
        college,
        groupevent,
        teamname,
        teammates
    })

    return res.status(201).json(
        new ApiResponse(200, event, "✅ group event added Successfully")
    )
})