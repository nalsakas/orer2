const models = require('../models')

function getOrers() {
  return models.orer.findAll({
    include: [{ model: models.orerStation, include: { model: models.station } }]
  })
}

function getOrerById(orerId) {
  return models.orer.findOne({
    where: { id: orerId },
    include: [{ model: models.orerStation, include: { model: models.station } }]
  })
}

module.exports = {
  getOrers,
  getOrerById
}
