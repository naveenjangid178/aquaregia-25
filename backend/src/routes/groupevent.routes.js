import { Router } from "express";
import { groupEvents } from "../controllers/groupevent.controller.js"

const router = Router()

router.route("/register").post(groupEvents)

export default router