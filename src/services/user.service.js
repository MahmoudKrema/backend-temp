import UserRepo from "../repos/user.repo.js";

class UserService {
    async getUsers() {
        const users = await UserRepo.getAllUsers();
        return users;
    }

    async getUserById(id) {

        const user = await UserRepo.getUserById(id);

        return user;
    }

    async createUser(user) {
        const userDb = await UserRepo.createUser(user);
        return userDb;
    }

    async updateUser(id, user) {
        throw new Error('Method not implemented.');
    }

    async deleteUser(id) {
        const userDb = await UserRepo.deleteUser(id);
        return userDb;
    }
}

export default UserService;

