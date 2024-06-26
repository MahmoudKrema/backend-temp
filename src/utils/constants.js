const STATUS_CODES = {
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401,
    INTERNAL_SERVER_ERROR: 500,
    OK: 200,
    NO_CONTENT: 204,
    CREATED: 201
}

const ERROR_TYPES = {
    BAD_REQUEST: 'BAD_REQUEST_ERROR',
    NOT_FOUND: 'NOT_FOUND_ERROR',
    FORBIDDEN: 'FORBIDDEN_ERROR',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
}

export {
    STATUS_CODES,
    ERROR_TYPES
}