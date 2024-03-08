const express = require('express')
const controller = require('../handdlers/shapefile')
const khsaraDetails = require('../handdlers/khsara')
const excel = require('../handdlers/excel')
const ndvi = require('../handdlers/ndvi')
const router = express.Router()

router.route('/shapefile').post(controller.postData)
router.route('/khasra').post(khsaraDetails.getData)

router.route('/getsampleexcel').get(excel.getX)
router.route('/uploadportfolio').post(excel.postX)
router.route('/getndvi').post(ndvi.getX)

module.exports = router