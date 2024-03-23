import Joi from "joi";

class UserValidator {
  constructor() {
    this.createUser = Joi.object({
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
  
  
    this.getUser = Joi.object({
      id: Joi.number().integer().required(),
    });
  
    this.deleteUser = Joi.object({
      id: Joi.number().integer().required(),
    });
    
  }

  validateCreateUser = (req, res, next) => {
    const user = req.body;
    const { error } = this.createUser.validate(user);

    if (error) {
      return res.status(500).json({ error: error.details });
    }

    next();
  }

  validateGetUser = (req, res, next) => {

    console.log("this!!!!!!", this);

    const { error, value: { id } } = this.getUser.validate(req.params);

    if (error) {
        return res.status(500).json({ error: error.details });
    }
    req.params.id = id;

    next();
  }

  validateDeleteUser = (req, res, next) => {

    const { error, value: { id } } = this.deleteUser.validate(req.params);

    if (error) {
        return res.status(500).json({ error: error.details });
    }
    req.params.id = id;

    next();
  }
}

export default UserValidator;

