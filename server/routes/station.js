const express = require('express')
const router = express.Router()
const stationService = require('../service/station')

router.get('/', async function (req, res, next) {
  try {
    const stations = await stationService.getStations()
    res.json(stations)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async function (req, res, next) {
  try {
    const stationId = req.params.id
    const station = stationService.getStationById(stationId)
    res.json(station)
  } catch (error) {
    next(error)
  }
})

module.exports = router
