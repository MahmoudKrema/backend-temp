import Joi from "joi";
// import ProductService from "../../services/product.service.js";



class ProductValidator {
  constructor() {

    // this.productService = new ProductService();

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

      productname: Joi.string()
        .empty()
        .min(3)
        .max(255),
      
      email: Joi.string()
      .email()
          
      
    })
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

  validateRegister = async (req, res, next) => {
    const product = req.body;
    const { error } = this.registerSchema.validate(product);

    if (error) {
      return res.status(500).json({ error: error.details });
    }

    // Use model istead of service
    if (!await this.productService.isUniqueAttribute("productname", product.productname)) {
      return res.status(500).json({ error: 'Productname is taken' });
    }

    if (!await this.productService.isUniqueAttribute("email", product.email)) {
      return res.status(500).json({ error: 'Email is taken' });
    }

    next();
  }

  validateLogin = async (req, res, next) => {
    const product = req.body;
    const { error } = this.login.validate(product);

    if (error) {
      return res.status(500).json({ error: error.details });
    }

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
    
    const product = await this.productService.getProductById(id);

    if (!product) {
      return res.status(500).json({ error: "Product not found" });
    }

    const productWithSameProductname = await this.productService.getProductByAttribute("productname", req.body.productname);

    if (productWithSameProductname && productWithSameProductname.id !== id) {
      return res.status(500).json({ error: "Productname is taken" });
    }

    req.params.id = id;

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

  validateDelete = async (req, res, next) => {

    const { error, value: { id } } = this.deleteSchema.validate(req.params);

    if (error) {
        return res.status(500).json({ error: error.details });
    }

    const product = await this.productService.getProductById(id);

    if (!product) {
      return res.status(500).json({ error: "Product not found" });
    }

    req.params.id = id;

    next();
  }
}

export default ProductValidator;

