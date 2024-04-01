import { Router } from "express";
import AuthController from '../controllers/auth.controller.js';
import UserValidator from "../validators/user.validator.js";


const router = Router();
const authController = new AuthController()
const userValidator = new UserValidator()


router.post("/register", userValidator.validateCreate, authController.register);
router.post("/login", userValidator.validateLogin, authController.login);




export default router