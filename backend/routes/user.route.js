import e from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import {getUsers} from "../controllers/user.controller.js";

const router = e.Router();

router.get("/", protectRoute, getUsers);

export default router;
