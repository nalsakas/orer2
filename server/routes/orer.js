const express = require('express')
const router = express.Router()
const orerService = require('../service/orer')

router.get('/', async function (req, res, next) {
  try {
    const orers = await orerService.getOrers()
    res.json(orers)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async function (req, res, next) {
  try {
    const orerId = req.params.orerId
    const orer = await orerService.getOrerById(orerId)
    res.json(orer)
  } catch (error) {
    next(error)
  }
})

module.exports = router
