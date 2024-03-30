import { STATUS_CODES } from "./constants.js";
class AppResponse {
    /**
     * 
     *
     * @param {type} statusCode - The status code to set.
     * @param {type} message - The message to set.
     */
    constructor(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
    }
}

class ErrorResponse extends AppResponse {
    /**
     *
     * @param {error} error - the error object to initialize the instance
     * @return {void} 
     */
    constructor(error) {
        super(error.statusCode);
        this.message = error.message
    }

    send(res) {
        res.status(this.statusCode).json({ message: this.message });
    }
}
 
class SuccessResponse extends AppResponse {
    
    constructor(message, data) {
        super(STATUS_CODES.OK, message);
        this.data = data
    }
    send(res) {
        res.status(this.statusCode).json({
            statusCode: this.statusCode,
            message: this.message,
            data: this.data 
        });
    }
}

class CreatedResponse extends AppResponse {

    constructor(message, data) {
        super(STATUS_CODES.CREATED, message);
        this.data = data
    }

    send(res) {
        res.status(this.statusCode).json({
            statusCode: this.statusCode,
            message: this.message,
            data: this.data 
        });
    }
}

class DeletedResponse extends AppResponse {

    constructor() {
        super(STATUS_CODES.NO_CONTENT);
    }

    send(res) {
        res.status(this.statusCode).json({
            statusCode: this.statusCode,
        });
    }
}


export {
    ErrorResponse,
    SuccessResponse,
    CreatedResponse,
    DeletedResponse
}