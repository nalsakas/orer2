const express = require('express')
const router = express.Router()
const orerStationService = require('../service/orerstation')

router.get('/', async function (req, res, next) {
  try {
    const orerstations = await orerStationService.getOrerStations()
    res.json(orerstations)
  } catch (error) {
    next(error)
  }
})

router.get('/:orerId/:stationId', async function (req, res, next) {
  try {
    const orerId = req.params.orerId
    const stationId = req.params.stationId
    const orerstation = await orerStationService.getOrerStationById(
      orerId,
      stationId
    )
    res.json(orerstation)
  } catch (error) {
    next(error)
  }
})

module.exports = router
