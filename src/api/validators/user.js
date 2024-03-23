import Joi from "joi";
import UserService from "../../services/user.service.js";



class UserValidator {
  constructor() {

    this.userService = new UserService();
    this.createSchema = Joi.object({
      username: Joi.string()
        .empty()
        .min(3)
        .max(255)
        .required()
        .messages({
          'string.base': 'Username must be a string',
          'string.empty': 'Username cannot be empty',
          'string.min': 'Username must have at least {#limit} characters',
          'string.max': 'Username must have at most {#limit} characters',
          'any.required': 'Username is required'
        }),
  
        email: Joi.string()
        .email()
        .required(),
  
        password: Joi.string()
        .min(3)
        .max(255)
        .required()
    });
  
  
    this.getSchema = Joi.object({
      id: Joi.number().integer().required(),
    });
  
    this.deleteSchema = Joi.object({
      id: Joi.number().integer().required(),
    });
    
  }

  validateCreate = async (req, res, next) => {
    const user = req.body;
    const { error } = this.createSchema.validate(user);

    if (!await this.userService.isUniqueAttribute("username", user.username)) {
      return res.status(500).json({ error: 'Username is taken' });
    }

    if (!await this.userService.isUniqueAttribute("email", user.email)) {
      return res.status(500).json({ error: 'Email is taken' });
    }

    if (error) {
      return res.status(500).json({ error: error.details });
    }

    next();
  }

  validateUpdate = (req, res, next) => {


    const { error, value: { id } } = this.getSchema.validate(req.params);

    if (error) {
        return res.status(500).json({ error: error.details });
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

  validateDelete = (req, res, next) => {

    const { error, value: { id } } = this.deleteSchema.validate(req.params);

    if (error) {
        return res.status(500).json({ error: error.details });
    }
    req.params.id = id;

    next();
  }
}

export default UserValidator;

