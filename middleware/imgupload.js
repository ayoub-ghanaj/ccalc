const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'plateimg/')
    },
    filename: function(req, file, cb) {

        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var imgupload = multer({
        storage: storage,
        fileFilter: function(req, file, callback) {
            if (
                file.mimetype == "image/png" ||
                file.mimetype == "image/jpg"
            ) {

                callback(null, true)
            } else {
                console.log('images only shief')
                callback(null, false)
            }
        },
        limits: {
            fileSize: 1024 * 1024 * 2
        }
    })
    //export default upload.single('avatar')
module.exports = imgupload