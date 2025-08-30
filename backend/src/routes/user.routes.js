import { Router } from "express";
import { submitUserData } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();
router.route("/submitData").post(
  upload.fields([
    {
      name: "proofOfPayment",
      maxCount: 1,
    },
  ]),
  submitUserData
);
export default router;
