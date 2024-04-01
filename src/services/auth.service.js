import UserRepo from "../repos/user.repo.js";
import { BadRequestError, NotFoundError } from "../utils/appError.js";
import bcrypt from "bcrypt";

class AuthService {


    async register(username, email, password) {

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        let userDb;

        try {
            userDb = await UserRepo.createUser(username, email, hashedPassword);
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

        return passwordMatch;
    }

}

export default AuthService;

