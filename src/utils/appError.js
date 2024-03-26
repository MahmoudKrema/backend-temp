const STATUS_CODES = {
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    INTERNAL_SERVER_ERROR: 500,
}

const ERROR_TYPES = {
    BAD_REQUEST: 'BAD_REQUEST_ERROR',
    NOT_FOUND: 'NOT_FOUND_ERROR',
    FORBIDDEN: 'FORBIDDEN_ERROR',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
}

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
    InternalServerError
}