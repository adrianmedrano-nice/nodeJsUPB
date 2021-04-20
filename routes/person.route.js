const express = require('express')
const router = express.Router()
const PersonCtrl = require('../controllers/person.controller')

router.get('/user', PersonCtrl.getList)

router.post('/user', PersonCtrl.savePerson)

router.delete('/user', PersonCtrl.deletePerson)

router.put('/user', PersonCtrl.updatePerson)

module.exports = router