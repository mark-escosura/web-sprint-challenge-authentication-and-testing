module.exports = {
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
    PORT: process.env.PORT || 3300,
    JWT_SECRET: process.env.JWT_SECRET || "shh",
    NODE_ENV: process.env.NODE_ENV || 'development'
}