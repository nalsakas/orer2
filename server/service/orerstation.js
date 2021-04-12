const models = require('../models')

function getOrerStations() {
  return models.orerStation.findAll()
}

function getOrerStationById(orerId, stationId) {
  return models.orerStation.findOne({
    where: { orerId: orerId, stationId: stationId }
  })
}

module.exports = {
  getOrerStations,
  getOrerStationById
}
