import mongoose from "mongoose";

const groupEventSchema = new mongoose.Schema({
    name: {
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
    groupevent: {
        type: String,
        required: true
    },
    teamname: {
        type: String,
        required: true
    },
    teammates: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
})

export const groupEvent = new mongoose.model("groupEvent", groupEventSchema)