import e from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = e.Router();

router.post("/api/auth/signup", signup);

router.post("/api/auth/login", login);

router.post("/api/auth/logout", logout);

export default router;
