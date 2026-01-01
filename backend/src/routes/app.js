import express from "express";
import registerController from "../controllers/Register.controller.js";
import loginController from "../controllers/Login.controller.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);

export default router;
