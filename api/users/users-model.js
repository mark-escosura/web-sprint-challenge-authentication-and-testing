const database = require('../../data/dbConfig.js');

const getUsers = () => {
  return database("users")
}

const getBy = (filter) => {
  return database("users").where(filter)
}

const getUserById = (id) => {
    return database("users").where("id", id).first()
}

const create = async (user) => {
    const [id] = await database("users")
    .insert(user)
    return getUserById(id)   
}

module.exports = {
    getUsers,
    getBy,
    getUserById,
    create,
}