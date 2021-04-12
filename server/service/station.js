const models = require('../models')

function getStations() {
  return models.station.findAll()
}

function getStationById(stationId) {
  return models.station.findOne({
    where: { id: stationId }
  })
}

module.exports = {
  getStations,
  getStationById
}
