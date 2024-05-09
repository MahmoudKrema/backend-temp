import { Router } from "express";
import user from "./user.js";
import auth from "./auth.js";
import product from "./product.js";

const router = Router();

router.use("/users", user);
router.use("/auth", auth);
router.use("/products", product);

export default router;
