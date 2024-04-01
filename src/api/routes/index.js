import { Router } from "express";
import user from "./user.js";
import auth from "./auth.js";

const router = Router();

router.use("/users", user);
router.use("/auth", auth);

export default router;
