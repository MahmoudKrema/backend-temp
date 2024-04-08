import { Router } from "express";
import UserController from '../controllers/user.controller.js';
import UserValidator from "../validators/user.validator.js";
import passport from "../../utils/jwt.js";
import { checkPermission } from "../middlewares/authorize.js";



const router = Router();
const userController = new UserController()
const userValidator = new UserValidator()
const resource = 'user'

 
router.get("/", checkPermission('readAny', resource), userController.getUsers);
router.get("/me", checkPermission('readOwn', resource), userController.getSelf);
router.get("/:id", checkPermission('readAny', resource), userValidator.validateGet, userController.getUser);
router.post("/", checkPermission('createAny', resource), userValidator.validateCreate, userController.createUser);
router.patch("/:id", checkPermission('updateAny', resource), userValidator.validateUpdate, userController.updateUser);
router.delete("/:id", checkPermission('deleteAny', resource), userValidator.validateDelete, userController.deleteUser);


export default router