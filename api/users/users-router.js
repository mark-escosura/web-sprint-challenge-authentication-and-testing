// Just to check if my model functions are working
const router = require("express").Router();
const User = require("./users-model.js");


router.get("/", (req, res, next) => {
  User.getUsers()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
    User.getUserById(req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

module.exports = router;
