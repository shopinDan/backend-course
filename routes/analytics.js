const express = require('express')
const router = express.Router()
const controller = require('../controllers/analytics')

//Создаем роут с контроллером
router.get('/overview', controller.overview)
router.post('/analytics', controller.analytics)


module.exports = router