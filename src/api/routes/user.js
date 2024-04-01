import { Router } from "express";
import UserController from '../controllers/user.controller.js';
import UserValidator from "../validators/user.validator.js";
import passport from "../../utils/jwt.js";


const router = Router();
const userController = new UserController()
const userValidator = new UserValidator()


router.get("/", passport.authenticate('jwt', { session: false }), userController.getUsers);
router.get("/:id", userValidator.validateGet, userController.getUser);
router.post("/", userValidator.validateCreate, userController.createUser);
router.patch("/:id", userValidator.validateUpdate, userController.updateUser);
router.delete("/:id", userValidator.validateDelete, userController.deleteUser);


export default router