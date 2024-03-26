class AppResponse {
    /**
     * 
     *
     * @param {type} statusCode - The status code to set.
     * @param {type} message - The message to set.
     */
    constructor(statusCode, message) {
        this.statusCode = statusCode
        this.message = message
    }
}

class ErrorResponse extends AppResponse {
    /**
     *
     * @param {error} error - the error object to initialize the instance
     * @return {void} 
     */
    constructor(error) {
        super(error.statusCode, error.message);
    }

    send(res) {
        res.status(this.statusCode).json({ message: this.message });
    }
}


export { ErrorResponse }