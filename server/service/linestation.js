const models = require('../models')

function getLineStationByID(lineId, stationId) {
  const lineStation = models.lineStation.findOne({
    where: { lineId: lineId, stationId: stationId }
  })
  return lineStation
}

module.exports = {
  getLineStationByID
}
