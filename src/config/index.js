import dotenv from 'dotenv';
dotenv.config();


const config = {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET
}

export default config