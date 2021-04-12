const express = require('express')
const router = express.Router()
const lineService = require('../service/linestation')

router.get('/:lineId/:stationId', async function (req, res, next) {
  try {
    const lineId = req.params.lineId
    const stationId = req.params.stationId
    const linestation = await lineService.getLineStationByID(lineId, stationId)
    res.json(linestation)
  } catch (error) {
    next(error)
  }
})

module.exports = router
