import UserService from "../../services/user.service.js";
import AuthService from "../../services/auth.service.js";
import { CreatedResponse, SuccessResponse, DeletedResponse } from "../../utils/appResponse.js";

class UserController {

    constructor() {
        this.userService = new UserService();
        this.authService = new AuthService();

     }

    register = async (req, res) => {

        const { username, email, password } = req.body;

        const user = await this.authService.register(username, email, password);

        return new CreatedResponse("User is created successfully", user).send(res);
    }

    login = async (req, res) => {

        const { username, password } = req.body;

        const token = await this.authService.login(username, password);

        return new SuccessResponse("User is logged in successfully", { token }).send(res);
    }
}

export default UserController;