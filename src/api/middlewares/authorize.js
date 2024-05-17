// src/middleware/authorizationMiddleware.js
import AccessControl from 'accesscontrol';
import { ForbiddenError } from '../../utils/appError.js';

// Initialize AccessControl
const ac = new AccessControl();

// Define roles and permissions
ac.grant('user')
    .readOwn('user')
    .updateOwn('user')
    .createOwn('product')
    .readAny('product')
    .updateOwn('product')
    .deleteOwn('product')

ac.grant('admin')
    .extend('user')
    .readAny('user')
    .createAny('user')
    .updateAny('user')
    .deleteAny('user')


function checkPermission(action, resource) {
    return (req, res, next) => {

        const permission = ac.can(req.currentUser.role)[action](resource);
        if (!permission.granted) {
            throw new ForbiddenError("Forbidden User");
        }

        next();
    };
}


export {
    checkPermission
};
