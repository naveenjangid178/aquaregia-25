import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    teamMates: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
})

export const event = new mongoose.model("event", eventSchema)