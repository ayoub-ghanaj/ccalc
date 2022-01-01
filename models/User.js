const { Timestamp } = require("bson")
const mongoose = require("mongoose")
const schema = mongoose.Schema
const userSchema = new schema({

    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    num: {
        type: String
    },
    email: {
        type: String
    },
    pass: {
        type: String
    },
    rank: {
        type: String
    },
    acess: {
        type: String
    },
    avatar: {
        type: String
    }
}, { timestamps: true })
const User = mongoose.model('User', userSchema)
module.exports = User