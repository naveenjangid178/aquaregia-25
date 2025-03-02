import { Router } from "express";
import { events } from "../controllers/event.controller.js";

const router = Router()

router.route("/register").post(events)

export default router