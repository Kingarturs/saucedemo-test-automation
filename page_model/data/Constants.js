import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.USER,
        PASSWORD: process.env.PASSWORD,
    },
    INVALID_USER: {
        USERNAME: "invalid_username",
        PASSWORD: "invalid_password",
    },
    FIRST_NAME: process.env.FIRST_NAME,
    LAST_NAME: process.env.LAST_NAME,
    ZIP_CODE: process.env.ZIP_CODE,
}