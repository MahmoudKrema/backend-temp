import { STATUS_CODES, ERROR_TYPES } from "./constants.js";

class AppError extends Error {
    /**
     *
     * @param {string} message - The error message.
     * @param {string} [type=ERROR_TYPES.INTERNAL_SERVER_ERROR] - The type of error. Defaults to ERROR_TYPES.INTERNAL_SERVER_ERROR.
     * @param {number} [statusCode=500] - The HTTP status code. Defaults to 500.
     */
    constructor(message, type = ERROR_TYPES.INTERNAL_SERVER_ERROR, statusCode = 500) {

        super(message);

        this.type = type;
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}


class BadRequestError extends AppError {
    /**
     *
     * @param {string} [message='Bad request'] - The error message
     * @return {void}
     */
    constructor(message = 'Bad request') {
        super(message, ERROR_TYPES.BAD_REQUEST, STATUS_CODES.BAD_REQUEST);
    }
}

class NotFoundError extends AppError {
    /**
     *
     * @param {string} message - the error message
     * @return {void} 
     */
    constructor(message = 'Not found') {
        super(message, ERROR_TYPES.NOT_FOUND, STATUS_CODES.NOT_FOUND);
    }
}

class ForbiddenError extends AppError {
    /**
     *
     * @param {string} message - the error message
     * @return {void} 
     */
    constructor(message = 'Forbidden') {
        super(message, ERROR_TYPES.FORBIDDEN, STATUS_CODES.FORBIDDEN);
    }
}

class InternalServerError extends AppError {
    /**
     *
     * @param {string} message - The error message
     */
    constructor(message = 'Something went wrong') {
        super(message, ERROR_TYPES.INTERNAL_SERVER_ERROR, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
}

export {
    STATUS_CODES,
    ERROR_TYPES,
    AppError,
    BadRequestError,
    NotFoundError,
    InternalServerError,
    ForbiddenError
}