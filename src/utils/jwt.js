import jwt from "jsonwebtoken";
import config from "../config/index.js";

export default class JWTHelper {
  static generateToken(user) {
    const payload = {
      id: user.id,
      role: user.role
    };
    const options = {
      expiresIn: "1h",
    };
    return jwt.sign(payload, config.jwtSecret, options);
  }

  static verifyToken(token) {

    const result = {
      valid: false,
      expired: false,
      payload: null
    }

    return jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {


        
        if (err.name === "JsonWebTokenError") {

          return result;
        }
        else if (err.name === "TokenExpiredError") {

          result.valid = true;
          result.expired = true;
          return result;
        }

      } else {

        result.valid = true;
        result.payload = decoded;
        return result;
      }
    })

    
    
  }
}

