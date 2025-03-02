import { Router } from "express";
import { soloEvents } from "../controllers/soloevent.controller.js";

const router = Router()

router.route("/register").post(soloEvents)

export default router