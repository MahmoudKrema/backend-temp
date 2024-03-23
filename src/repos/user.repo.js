import prisma from "../loaders/prisma.js";
class UserRepo {
  static async getUserById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

     return user;
  }

  static async getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
  }

  static async getUserByUsername(username) {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    return user;
  }

  static async createUser(user) {
    const newUser = await prisma.user.create({
      data: user,
    });
    return newUser;
  }

  static async updateUser(id, user) {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: user,
    });
    return updatedUser;
  }

  static async deleteUser(id) {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });
    return deletedUser;
  }
}

export default UserRepo;

