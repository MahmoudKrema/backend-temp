import UserRepo from "../repos/user.repo.js";
import { BadRequestError, NotFoundError } from "../utils/appError.js";
import bcrypt from "bcrypt";
import JWTHelper from "../utils/jwt.js";

class AuthService {


    async register(username, email, password, role) {

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        let userDb;

        try {
            userDb = await UserRepo.createUser(username, email, hashedPassword, role);
        } catch (error) {
            
            console.log(error);
        }

        return userDb;
    }

    async login(username, password) {

        const user = await UserRepo.getUserByAttribute("username", username);

        if (!user) {
            
            throw new BadRequestError("Wrong username or password");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw new BadRequestError("Wrong username or password");
        }

        const token = JWTHelper.generateToken(user);

        return token;
    }

}

export default AuthService;

