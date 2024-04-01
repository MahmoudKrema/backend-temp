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

        // log the error
        console.error(error);

        // TODO: handle uncaught errors and error when no res object and think about the cases with no res object
        if (!res) {
            
            console.log("NO RESPONSE OBJECT");
        }
        
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