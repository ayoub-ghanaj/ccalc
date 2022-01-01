const { json } = require('body-parser')
const { findById } = require('../models/User')
const User = require('../models/User')

// show list users
//promise
const index = (req, res, next) => {
    User.find()
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
    let userID = req.body.userID
    User.findById(userID)
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
        let user = new User({
            nom: req.body.nom,
            prenom: req.body.prenom,
            num: req.body.num,
            email: req.body.email,
            pass: req.body.pass,
            rank: req.body.rank,
            acess: "false"
        })
        if (req.file && req.body.eximg == "true") {
            user.avatar = req.file.path
        } else {
            user.avatar = "Images/clt.png"
        }
        user.save()
            .then(response => {
                res.json({
                    message: 'User added !' + req.body.nom
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
    let userID = req.body.userID
    let updatedData = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        num: req.body.num,
        email: req.body.email,
        pass: req.body.pass,
        rank: req.body.rank,
        acess: "true"
    }
    if (req.body.eximg == "true") {
        if (req.file) {
            updatedData.avatar = req.file.path
        }
    } else if (req.body.eximg == "true2") {

    } else {
        updatedData.avatar = "Images/clt.png"
    }
    User.findByIdAndUpdate(userID, { $set: updatedData })
        .then(response => {
            res.json({
                message: 'User updated !'
            })
        })
        .catch(error => {
            res.json({
                message: 'error'
            })

        })
}
const destroy = (req, res, next) => {
    let userID = req.body.userID
    User.findByIdAndRemove(userID)
        .then(response => {
            res.json({
                message: 'User deleted !'
            })
        })
        .catch(error => {
            res.json({
                message: 'error'
            })

        })
}
const login = (req, res, next) => {
    var email = req.body.email
    var pass = req.body.pass
    User.findOne({ $or: [{ email: email }, { num: email }] })
        .then(user => {
            if (user) {
                if (pass == user.pass) {
                    let updatedData = {
                        nom: user.nom,
                        prenom: user.prenom,
                        num: user.num,
                        email: user.email,
                        pass: user.pass,
                        rank: user.rank,
                        acess: "true",
                        avatar: user.avatar,
                    }
                    var errrr;
                    User.findByIdAndUpdate(user.id, { $set: updatedData })
                        .catch(error => {
                            errrr = error

                        })
                    res.json({
                        val: 'true',
                        id: user.id,
                        rank: user.rank


                    })
                } else {
                    res.json({
                        val: 'false'
                    })
                }

            } else {
                res.json({
                    message: 'No user found!' + req.email + " " + req.pass
                })
            }
        })
}
const logout = (req, res, next) => {
    var email = req.body.email
    var pass = req.body.pass
    User.findOne({ $or: [{ email: email }, { num: email }] })
        .then(user => {
            if (user) {
                if (pass == user.pass) {
                    let updatedData = {
                        nom: user.nom,
                        prenom: user.prenom,
                        num: user.num,
                        email: user.email,
                        pass: user.pass,
                        rank: user.rank,
                        acess: "false",
                        avatar: user.avatar,
                    }
                    var errrr;
                    User.findByIdAndUpdate(user.id, { $set: updatedData })
                        .catch(error => {
                            errrr = error

                        })
                    res.json({
                        val: 'true',
                        id: user.id,
                        rank: user.rank


                    })
                } else {
                    res.json({
                        val: 'false'
                    })
                }

            } else {
                res.json({
                    message: 'No user found!' + req.email + " " + req.pass
                })
            }
        })
}
const userlook = (req, res, next) => {
    var email = req.body.mail
    var num = req.body.num

    User.findOne({ $or: [{ email: email }, { num: num }] })
        .then(user => {
            if (user) {
                res.json({
                    exi: "true",

                })
            } else {
                res.json({
                    exi: "false",

                })
            }
        })
}
const gestter = (req, res, next) => {
    var rank = req.body.rank;
    User.find({ rank: rank })
        .then(user => {
            if (user) {
                res.json({
                    user
                })
            } else {
                res.json({
                    message: 'No ' + rank + "!"
                })
            }
        })
}
const updategestr = (req, res, next) => {
    let userID = req.body.userID


    let updatedData = {

        rank: "user"

    }




    User.findByIdAndUpdate(userID, { $set: updatedData })
        .then(response => {
            res.json({
                message: 'User updated !'
            })
        })
        .catch(error => {
            res.json({
                message: 'error'
            })

        })
}
const updateuser = (req, res, next) => {
    let userID = req.body.userID


    let updatedData = {

        rank: "gestionaire"

    }




    User.findByIdAndUpdate(userID, { $set: updatedData })
        .then(response => {
            res.json({
                message: 'User updated !'
            })
        })
        .catch(error => {
            res.json({
                message: 'error'
            })

        })
}
module.exports = {
    index,
    show,
    store,
    update,
    destroy,
    login,
    logout,
    userlook,
    gestter,
    updateuser,
    updategestr
}