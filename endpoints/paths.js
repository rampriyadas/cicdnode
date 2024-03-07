const express = require('express')
const controller = require('../handdlers/shapefile')
const khsaraDetails = require('../handdlers/khsara')
const excel = require('../handdlers/excel')
const router = express.Router()

router.route('/shapefile').post(controller.postData)
router.route('/khasra').post(khsaraDetails.getData)

router.route('/getsampleexcel').get(excel.getX)
module.exports = router