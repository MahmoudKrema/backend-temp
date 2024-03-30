import UserService from "../../services/user.service.js";
import { CreatedResponse, SuccessResponse, DeletedResponse } from "../../utils/appResponse.js";

class UserController {

    constructor() {
        this.userService = new UserService();
     }
    getUsers = async (req, res) => {

            const users = await this.userService.getUsers();
            return new SuccessResponse("Users are fetched successfully", users).send(res);
    }

    getUser = async (req, res) => {

        const id = req.params.id;
 
        const user = await this.userService.getUserById(id);
        return new SuccessResponse("User is fetched successfully", user).send(res);
    }

    createUser = async (req, res) => {

        const user = req.body;

        const userDb = await this.userService.createUser(user);

        return new CreatedResponse("User is created successfully", userDb).send(res);


    }

    updateUser = async (req, res) => {
        const { id } = req.params;
        
        const user = req.body;

        const userDb = await this.userService.updateUser(id, user);
        return new SuccessResponse("User is updated successfully", userDb).send(res);
    }

    deleteUser = async (req, res) => {

        const id = req.params.id;

        await this.userService.deleteUser(id);

        return new DeletedResponse("User is deleted successfully").send(res);
    }
}

export default UserController;


