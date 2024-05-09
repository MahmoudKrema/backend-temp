import { Router } from "express";
import ProductController from '../controllers/product.controller.js';
import ProductValidator from "../validators/product.validator.js";
import { checkPermission } from "../middlewares/authorize.js";



const router = Router();
const productController = new ProductController()
const productValidator = new ProductValidator()
const resource = 'product'

 
router.post("/", checkPermission('createOwn', resource), productValidator.validateCreate, productController.createProduct);



export default router