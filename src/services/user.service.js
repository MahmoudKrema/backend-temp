import UserRepo from "../repos/user.repo.js";
import { NotFoundError } from "../utils/appError.js";
import bcrypt from "bcrypt";

class UserService {
    async getUsers() {
        const users = await UserRepo.getAllUsers();
        return users;
    }

    async getUserById(id) {


        const user = await UserRepo.getUserById(id);

        if (!user) {
            throw new NotFoundError("User not found");
        }

        return user;
    }

    async createUser(username, email, password, role) {


        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const userDb = await UserRepo.createUser(username, email, hashedPassword, role);

        return userDb;
    }

    async updateUser(id, user) {
        const userDb = await UserRepo.updateUser(id, user);
        return userDb;
    }

    async deleteUser(id) {
        const userDb = await UserRepo.deleteUser(id);
        return userDb;
    }

    
    /**
     * Check if the given attribute value is unique.
     *
     * @param {string} attribute - The attribute to check uniqueness for.
     * @param {any} value - The value to check uniqueness against.
     * @return {Promise<boolean>} Whether the attribute value is unique.
     */
    async isUniqueAttribute(attribute, value) {
        const isUnique = await UserRepo.isUniqueAttribute(attribute, value);
        return isUnique;
    }
    

    /**
     * Retrieves a user from the database based on their attribute.
     *
     * @param {string} attribute - The attribute to search on.
     * @param {any} value - The value to search for.
     * @return {Promise<Object>} A Promise that resolves to the user object if found, or null if not found.
     */
    async getUserByAttribute(attribute, value) {
        const user = await UserRepo.getUserByAttribute(attribute, value);
        return user;
    }


}

export default UserService;

