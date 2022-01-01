const { json } = require('body-parser')
const Plate = require('../models/Plate')

// show list plates
const index = (req, res, next) => {
    Plate.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(err => {
            res.json({
                message: 'An error Occured!'
            })
        })
}

const show = (req, res, next) => {
    let plateID = req.body.plateID
    Plate.findById(plateID)
        .then(response => {
            res.json({
                response

            })
        })
        .catch(error => {
            res.json({
                message: 'error'
            })

        })
}

// save /add

const store = (req, res, next) => {
        let plate = new Plate({
            user: req.body.user,
            nom: req.body.nom,
            calo: req.body.calo,
            heur: req.body.heur,
            date: req.body.date
        })
        if (req.file && req.body.eximg == "true") {
            plate.image = req.file.path
        } else {
            plate.image = "svg/meal.svg"
        }
        plate.save()
            .then(response => {
                res.json({
                    message: 'Plate added !' + req.body.image
                })
            })
            .catch(error => {
                res.json({
                    message: 'error'
                })

            })
    }
    //update 

const update = (req, res, next) => {
    let plateID = req.body.plateID
    let updatedData = {
        user: req.body.user,
        nom: req.body.nom,
        calo: req.body.calo,
        heur: req.body.heur,
        date: req.body.date
    }
    if (req.file) {
        updatedData.image = req.file.path
    }
    Plate.findByIdAndUpdate(plateID, { $set: updatedData })
        .then(response => {
            res.json({
                message: 'Plate updated !'
            })
        })
        .catch(error => {
            res.json({
                message: 'error'
            })

        })
}
const destroy = (req, res, next) => {
    let plateID = req.body.plateID

    Plate.findByIdAndRemove(plateID)
        .then(response => {
            res.json({
                message: 'plate deleted !'
            })
        })
        .catch(error => {
            res.json({
                message: 'error'
            })

        })
}
const platelook = (req, res, next) => {
    var user = req.body.user


    Plate.find({ user: user })
        .then(plate => {
            if (plate) {
                res.json({
                    plate
                })
            } else {
                res.json({
                    message: 'No plate found!'
                })
            }
        })
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
    platelook
}