import jwt from "jsonwebtoken";
import config from "../config/index.js";

export default class JWTHelper {
  static generateToken(user) {
    const payload = {
      id: user.id,
    };
    const options = {
      expiresIn: "1h",
    };
    return jwt.sign(payload, config.jwtSecret, options);
  }

  static verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });
  }
}

