const express = require("express")
const userRoutes = express.Router()
const userController = require("../controllers/user.controller")

userRoutes.get("/showUsers", userController.showUserController)
userRoutes.post("/register", userController.registerController)
userRoutes.put("/update:id")
// userRoutes.delete("delete")

module.exports = userRoutes