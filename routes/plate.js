const express = require('express')
const router = express.Router()

const PlateController = require('../controllers/PlateController')
const upload = require('../middleware/upload')
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
})
router.get('/', PlateController.index)
router.post('/show', PlateController.show)
router.post('/store', upload.single('image'), PlateController.store)
router.post('/update', upload.single('image'), PlateController.update)
router.post('/delete', PlateController.destroy)
router.post('/plates', PlateController.platelook)

module.exports = router