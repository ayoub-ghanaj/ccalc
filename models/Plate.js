const { Timestamp } = require("bson")
const mongoose = require("mongoose")
const schema = mongoose.Schema
const plateSchema = new schema({
    user: {
        type: String
    },
    nom: {
        type: String
    },
    calo: {
        type: String
    },
    heur: {
        type: String
    },
    date: {
        type: String
    },
    image: {
        type: String
    }
}, { timestamps: true })
const Plate = mongoose.model('Plate', plateSchema)
module.exports = Plate