const userModel = require("../model/user.model")

module.exports.registerController = async (req , res) => {
    try {
        const {image, name, email, age, bio} = req.body

        const createUser = await userModel.create({
            image : image,
            name: name,
            email: email,
            age: age,
            bio: bio
        })

        res.send({createUser})
    } catch (error) {
        res.status(500).json({message : "internal server error"})
    }
}

module.exports.showUserController = async (req , res) => {
    try {
        const showUser = await userModel.find()
        res.send({showUser})
    } catch (error) {
        res.send(500).json({message : "internal server error"})
    }
}

module.exports.updateController = async (req, res) => {
    try {
        const id = req.params.id
        const {image, name, email, age, bio} = req.body

        const updateuser = await userModel.findByIdAndUpdate(id,{
            image,
            name,
            email,
            age,
            bio
        }, {new : true})
        
        res.send({updateuser})
    } catch (error) {
        res.send(500).json({message : "internal server error"})
    }
}

