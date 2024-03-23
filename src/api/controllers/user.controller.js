import UserService from "../../services/user.service.js";
import userValidator from "../validators/user.js"

class UserController {

    constructor() {
        this.userService = new UserService();
     }
    getUsers = async (req, res) => {
        try {
            const users = await this.userService.getUsers();
            res.status(200).json({ data: users });
        } catch (error) {

            res.status(500).json({ message: error.message });
        }
    }

    getUser = async (req, res) => {

        const id = req.params.id;

        try {
            const user = await this.userService.getUserById(id);
            res.status(200).json({ data: user });
        } catch (error) {
            console.log(error);

            res.status(500).json({ message: error.message });
        }
    }

    createUser = async (req, res) => {

        const user = req.body;

        try{
            const userDb = await this.userService.createUser(user);
            res.status(200).json({ data: userDb });
        }catch(error){
            res.status(500).json({ message: error.message });
        }

    }

    updateUser = async (req, res) => {
        const { id } = req.params;
        
        const user = req.body;

        console.log("user", user);
        console.log("id", id);


        try {
            const userDb = await this.userService.updateUser(id, user);
            res.status(200).json({ data: userDb });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    deleteUser = async (req, res) => {

        const id = req.params.id;

        try {
            await this.userService.deleteUser(id);
            res.status(200).json({ message: 'User Deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default UserController;


