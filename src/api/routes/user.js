import { Router } from "express";
import UserController from '../controllers/user.controller.js';
import UserValidator from "../validators/user.validator.js";
import passport from "../../utils/jwt.js";
import { checkPermission } from "../middlewares/authorize.js";
import ProductController from "../controllers/product.controller.js";
import ProductValidator from "../validators/product.validator.js";



const router = Router();
const userController = new UserController()
const productController = new ProductController()
const userValidator = new UserValidator()
const productValidator = new ProductValidator()
const resource = 'user'

 
router.get("/", checkPermission('readAny', resource), userController.getUsers);
router.get("/me", checkPermission('readOwn', resource), userController.getSelf);
router.get("/:id", checkPermission('readAny', resource), userValidator.validateGet, userController.getUser);
router.post("/", checkPermission('createAny', resource), userValidator.validateCreate, userController.createUser);
router.patch("/:id", checkPermission('updateAny', resource), userValidator.validateUpdate, userController.updateUser);
router.delete("/:id", checkPermission('deleteAny', resource), userValidator.validateDelete, userController.deleteUser);

router.get("/me/products", checkPermission('readOwn', 'product'), productController.getMyProducts);


export default router