import { Router } from "express";
import ProductController from '../controllers/product.controller.js';
import ProductValidator from "../validators/product.validator.js";
import { checkPermission } from "../middlewares/authorize.js";



const router = Router();
const productController = new ProductController()
const productValidator = new ProductValidator()
const resource = 'product'

 
router.get("/", checkPermission('readAny', resource), productController.getProducts);
router.get("/:id", checkPermission('readAny', resource), productValidator.validateGet, productController.getProduct);
router.post("/", checkPermission('createOwn', resource), productValidator.validateCreate, productController.createProduct);
router.patch("/:id", checkPermission('updateOwn', resource), productValidator.validateUpdate, productController.updateProduct);
router.delete("/:id", checkPermission('deleteOwn', resource), productValidator.validateDelete, productController.deleteProduct);



export default router