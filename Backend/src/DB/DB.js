const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect(process.env.MONGO_URL)

    .then(()=>{
        console.log("database connected")
    })
    .catch(()=>{
        console.log("connection denied")
    })
}

module.exports = connect