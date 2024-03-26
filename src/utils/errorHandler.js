import { AppError, InternalServerError } from './appError.js';
import { ErrorResponse } from './appResponse.js';
export default class ErrorHandler {
    constructor() {}

    /**
     * Handle errors and send appropriate response.
     *
     * @param {Error} error - the error object to handle
     * @param {Response} res - the response object to send
     * @return {void} 
     */
    static handle(error, res) {
        
        if (error instanceof AppError) {

            return new ErrorResponse(error).send(res);
        }
        else {

            // if it's not an AppError, it's an internal server error and we don't want to leak the error details
            const internalServerError = new InternalServerError();
            return new ErrorResponse(internalServerError).send(res);
        }
    }
}