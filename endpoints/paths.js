const express = require('express')
const controller = require('../handdlers/shapefile')
const khsaraDetails = require('../handdlers/khsara')
const getdtls = require('../handdlers/android')
const router = express.Router()

router.route('/shapefile').post(controller.postData)
router.route('/khasra').post(khsaraDetails.getData)

router.route('/getmethod').get(getdtls.getData)
router.route('/postmethod').post(getdtls.postData)

module.exports = router