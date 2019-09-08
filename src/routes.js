const routes = require('express').Router();

// const { User } = require('./app/models/User');

// routes.get('/', async (req, res) => {
//     const user = await User.create({
//         user: "Lucas",
//         email: "lukas@gmail.com",
//         password_hash: "123123"
//     });

//     return res.json(user);
// });

const SessionController = require("./app/controllers/SessionController");

routes.post("/sessions", SessionController.store);

module.exports = routes;