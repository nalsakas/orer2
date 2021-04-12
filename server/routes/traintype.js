const express = require('express')
const router = express.Router()
const trainTypeService = require('../service/traintype')

router.get('/', async function (req, res, next) {
  try {
    const trainTypes = await trainTypeService.getTrainTypes()
    res.json(trainTypes)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async function (req, res, next) {
  try {
    const id = req.params.id
    const trainType = await trainTypeService.getTrainTypeById(id)
    res.json(trainType)
  } catch (error) {
    next(error)
  }
})

module.exports = router
