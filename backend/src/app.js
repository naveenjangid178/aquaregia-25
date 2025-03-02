import express from "express";
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json());

//Routes import
import soloEventRouter from "./routes/soloevent.routes.js"
import groupEventRouter from "./routes/groupevent.routes.js"
import eventRouter from "./routes/event.routes.js"

//Routes Declaration
app.use("/api/v1/solo-event", soloEventRouter)
app.use("/api/v1/group-event", groupEventRouter)
app.use("/api/v1/event", eventRouter)

export { app }