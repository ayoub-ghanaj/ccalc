const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const upload = require('../middleware/upload')
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
})
router.get('/', UserController.index)
router.post('/show', UserController.show)
router.post('/store', upload.single('avatar'), UserController.store)
router.post('/update', upload.single('avatar'), UserController.update)
router.post('/delete', UserController.destroy)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.post('/exis', UserController.userlook)
router.post('/gestter', UserController.gestter)
router.post('/upuser', UserController.updateuser)
router.post('/upgest', UserController.updategestr)

module.exports = router