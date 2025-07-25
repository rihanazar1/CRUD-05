const express = require("express")
const userRoutes = express.Router()
const userController = require("../controllers/user.controller")

userRoutes.post("/register", userController.registerController)
userRoutes.get("/showUsers", userController.showUserController)
userRoutes.put("/update/:id", userController.updateController) 
userRoutes.delete("/delete/:id", userController.deleteController)

module.exports = userRoutes 