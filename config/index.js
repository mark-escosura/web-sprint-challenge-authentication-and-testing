module.exports = {
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
    PORT: process.env.PORT || 3300,
    SECRET: process.env.SECRET || "shh",
    NODE_ENV: process.env.NODE_ENV || 'development'
}