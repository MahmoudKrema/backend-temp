import Joi from "joi";
import ProductService from "../../services/product.service.js";



class ProductValidator {
  constructor() {

    this.productService = new ProductService();

    this.createSchema = Joi.object({
        name: Joi.string()
        .required(),
  
        description: Joi.string()
        .required(),
  
        price: Joi.number()
        .required(),

        stock: Joi.number()
        .required()
    });
  
    this.getSchema = Joi.object({
      id: Joi.number().integer().required(),
    });
  
    this.deleteSchema = Joi.object({
      id: Joi.number().integer().required(),
    });

    this.updateSchema = Joi.object({

      id: Joi.number().integer().required(),

      name: Joi.string(),

      description: Joi.string(),

      price: Joi.number(),

      stock: Joi.number()
  });
  }

  validateCreate = async (req, res, next) => {
    const product = req.body;
    const { error, value } = this.createSchema.validate(product);

    if (error) {
      return res.status(500).json({ error: error.details });
    }

    req.body = value;

    // Use model istead of service
    // if (!await this.productService.isUniqueAttribute("productname", product.productname)) {
    //   return res.status(500).json({ error: 'Productname is taken' });
    // }

    next();
  }

  validateGet = (req, res, next) => {


    const { error, value: { id } } = this.getSchema.validate(req.params);

    if (error) {
        return res.status(500).json({ error: error.details });
    }

    req.params.id = id;

    next();
  }

  validateUpdate = async (req, res, next) => {

    // Assuming you have a request object containing both body and path parameters
    const request = {
      ...req.body,
      ...req.params
    };

    const { error, value: { id } } = this.updateSchema.validate(request);
    

    if (error) {
      return res.status(500).json({ error: error.details });
    }

    // Get the product from the database
    const product = await this.productService.getProductById(id);

    if (product.sellerId !== req.currentUser.id) {

      return res.status(500).json({ error: "User is not authorized to update this product" });
    }

    req.params.id = id;

    next();
  }

  validateDelete = async (req, res, next) => {

    const { error, value: { id } } = this.deleteSchema.validate(req.params);

    if (error) {
        return res.status(500).json({ error: error.details });
    }

    const product = await this.productService.getProductById(id);

    if (!product) {
      return res.status(500).json({ error: "Product not found" });
    }

    if (product.sellerId !== req.currentUser.id) {
      return res.status(500).json({ error: "User is not authorized to delete this product" });
    }

    req.params.id = id;

    next();
  }
}

export default ProductValidator;

