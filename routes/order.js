const express = require('express')
const router = express.Router()
const controller = require('../controllers/order')
const passport = require("passport");

//Создаем роут с контроллером
router.post('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/', passport.authenticate('jwt', {session: false}), controller.create)


module.exports = router