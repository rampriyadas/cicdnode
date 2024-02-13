const express = require('express')
const controller = require('../handdlers/shapefile')
const khsaraDetails = require('../handdlers/khsara')
const router = express.Router()

router.route('/shapefile').post(controller.postData)
router.route('/khasra').post(khsaraDetails.getData)


module.exports = router