import JWTHelper from "../../utils/jwt.js";
import { BadRequestError } from "../../utils/appError.js";
import { STATUS_CODES } from "../../utils/constants.js"

export default async (req, res, next) => {

    // Verify access token and get user
    let token = req.headers["authorization"];

    token = token && token.split(" ")[1];

    if (!token) {

        throw new BadRequestError("Token is missing in the request headers");

    }


    const result = JWTHelper.verifyToken(token);

    if (!result.valid) {

        throw new BadRequestError("Invalid token");
    }

    if (result.expired) {

        throw new BadRequestError("Token expired");
    }

    // Set user in request
    req.currentUser = result.payload;

    next();
}