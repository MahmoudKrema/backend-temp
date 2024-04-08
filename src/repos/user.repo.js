import prisma from "../loaders/prisma.js";
class UserRepo {
  /**
   * Retrieves a user from the database based on their ID.
   *
   * @param {number} id - The ID of the user to retrieve.
   * @return {Promise<object>} A promise that resolves to the user object.
   */
  static async getUserById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

     return user;
  }

  /**
   * Retrieves all users from the database.
   *
   * @return {Array} An array of user objects
   */
  static async getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
  }

  /**
   * Retrieves a user from the database based on their username.
   *
   * @param {string} username - The username of the user to retrieve.
   * @return {Promise<Object>} A Promise that resolves to the user object if found, or null if not found.
   */
  static async getUserByAttribute(attribute, value) {
    const user = await prisma.user.findUnique({
      where: {
        [attribute]: value,
      },
    });
    return user;
  }

  /**
   * Creates a new user in the database.
   *
   * @param {Object} user - The user object containing the user's information.
   * @return {Promise<Object>} The newly created user object.
   */
  static async createUser(username, email, password, role) {

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
        role
      },
    });
    return newUser;
  }

  /**
   * Update a user by their ID.
   *
   * @param {number} id - the ID of the user to update
   * @param {object} user - the updated user data
   * @returns {Promise<object>} the updated user
   */
  static async updateUser(id, user) {

    const updatedUser = await prisma.user.update({
      where: { id },
      data: user,
    });
    return updatedUser;
  }

  /**
   * Deletes a user by ID.
   *
   * @param {number} id - The ID of the user to delete
   * @return {Promise<Object>} The deleted user object
   */
  static async deleteUser(id) {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });
    return deletedUser;
  }


  /**
   * Checks if a given attribute is unique among all users.
   *
   * @param {string} attribute - The attribute to check.
   * @param {string} value - The value of the attribute to check.
   * @return {Promise<boolean>} True if the attribute value is unique, false otherwise.
   */
  static async isUniqueAttribute(attribute, value) {
    
    const user = await prisma.user.findUnique({
      where: {
        [attribute]: value,
      },
    });
    return user === null;
  }


}

export default UserRepo;

