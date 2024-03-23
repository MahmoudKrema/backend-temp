import { Router } from "express";
import UserController from '../controllers/user.controller.js';
import UserValidator from "../validators/user.js";


const router = Router();
const userController = new UserController()
const userValidator = new UserValidator()


router.get("/", userController.getUsers);
router.get("/:id", userValidator.validateGetUser, userController.getUser);
router.post("/", userValidator.validateCreateUser, userController.createUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", userValidator.validateDeleteUser, userController.deleteUser);


export default router