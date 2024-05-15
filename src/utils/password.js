import bcrypt from "bcrypt";

export default class Password {
    static async hash(password) {

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("hashedPassword", hashedPassword);
        return hashedPassword;
    }
}