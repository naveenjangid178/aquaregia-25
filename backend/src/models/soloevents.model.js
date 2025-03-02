import mongoose from "mongoose";

const soloEventSchema = new mongoose.Schema({
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
    soloevent: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export const soloEvent = new mongoose.model("soloEvent", soloEventSchema)