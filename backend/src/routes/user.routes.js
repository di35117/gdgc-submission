import { Router } from "express";
import { submitUserData } from "../controllers/user.controller.js";
const router=Router()
router.route("/submitData").post(submitUserData)
export default router